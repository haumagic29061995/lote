import type { Đối_Tượng_Xổ_Số } from '@/types/lote'

export type Mức_Trúng = 'trúng_3' | 'trúng_4' | 'trúng_5' | 'jackpot_2' | 'jackpot_1'

const CÁC_MỨC_TRÚNG: Mức_Trúng[] = ['trúng_3', 'trúng_4', 'trúng_5', 'jackpot_2', 'jackpot_1']

// Giá vé và giá trị giải (VND). Jackpot dùng mức tối thiểu công bố, thực tế có thể cao hơn.
const GIÁ_VÉ = 10000
const GIẢI_THƯỞNG: Record<number, Record<Mức_Trúng, number>> = {
  45: {
    trúng_3: 30_000,
    trúng_4: 300_000,
    trúng_5: 10_000_000,
    jackpot_2: 0, // 6/45 không có jackpot 2
    jackpot_1: 12_000_000_000,
  },
  55: {
    trúng_3: 50_000,
    trúng_4: 500_000,
    trúng_5: 40_000_000,
    jackpot_2: 3_000_000_000,
    jackpot_1: 30_000_000_000,
  },
}

export type Dòng_Kết_Quả_Backtest = {
  mức_trúng: Mức_Trúng
  thực_tế: number
  kỳ_vọng_ngẫu_nhiên: number
  // (thực tế - kỳ vọng) / sqrt(kỳ vọng); vé trong cùng kỳ tương quan nhau nên z thực chỉ nhỏ hơn
  z: number
}

export type Kết_Quả_Backtest = {
  loại_xổ_số: number
  số_kỳ_đã_thử: number
  tổng_vé: number
  chi_phí: number
  tiền_thắng: number
  lãi_lỗ: number
  các_dòng: Dòng_Kết_Quả_Backtest[]
}

function tổ_hợp(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let kết_quả = 1
  for (let i = 1; i <= k; i++) {
    kết_quả = (kết_quả * (n - k + i)) / i
  }
  return kết_quả
}

// Xác suất ngẫu nhiên của 1 vé 6 số (trong 1..tổng_số) ở mỗi mức trúng
function xác_suất_ngẫu_nhiên(tổng_số: number, có_jackpot_2: boolean): Record<Mức_Trúng, number> {
  const tất_cả = tổ_hợp(tổng_số, 6)
  const đúng_k = (k: number) => (tổ_hợp(6, k) * tổ_hợp(tổng_số - 6, 6 - k)) / tất_cả
  const jackpot_2 = có_jackpot_2 ? 6 / tất_cả : 0
  return {
    trúng_3: đúng_k(3),
    trúng_4: đúng_k(4),
    trúng_5: đúng_k(5) - jackpot_2, // 5 số thường, không tính trường hợp 5 + số phụ
    jackpot_2,
    jackpot_1: đúng_k(6),
  }
}

/**
 * Chạy lại chiến lược "vị trí lặp lại" trên toàn bộ lịch sử.
 * Với mỗi kỳ, chỉ dùng tập vị trí học từ các kỳ cũ hơn nó, nên không nhìn trước tương lai.
 * Yêu cầu các hàm xữ lý dữ liệu xuất hiện đã chạy trước để `dự_đoán_ds_xuất_hiện` và
 * `vị_trí_ds_xuất_hiện` có dữ liệu.
 */
export function chạy_backtest(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>): Kết_Quả_Backtest {
  const loại_xổ_số = danh_sách_dữ_liệu[0].loại_xổ_số
  const tổng_số = loại_xổ_số === 55 ? 55 : 45
  const có_jackpot_2 = loại_xổ_số === 55

  const thực_tế: Record<Mức_Trúng, number> = {
    trúng_3: 0,
    trúng_4: 0,
    trúng_5: 0,
    jackpot_2: 0,
    jackpot_1: 0,
  }
  let tổng_vé = 0
  let số_kỳ_đã_thử = 0
  const vị_trí_đã_học: number[][] = []

  // duyệt từ kỳ cũ nhất đến kỳ mới nhất
  for (let k = danh_sách_dữ_liệu.length - 1; k >= 0; k--) {
    const dữ_liệu = danh_sách_dữ_liệu[k]
    const kỳ_sau = dữ_liệu.dữ_liệu_kỳ_sau_đó

    if (kỳ_sau && vị_trí_đã_học.length > 0 && dữ_liệu.dự_đoán_ds_xuất_hiện.length > 0) {
      const kết_quả = new Set(kỳ_sau.kết_quả_xổ_số)
      số_kỳ_đã_thử++

      for (const danh_sách of dữ_liệu.dự_đoán_ds_xuất_hiện) {
        // vòng trong chạy hàng trăm triệu lần nên tính trước vị trí nào của danh sách trúng, và vị trí của số phụ
        const vị_trí_trúng = new Uint8Array(danh_sách.length)
        danh_sách.forEach((số, vị_trí) => {
          if (kết_quả.has(số)) vị_trí_trúng[vị_trí] = 1
        })
        const vị_trí_số_phụ = danh_sách.indexOf(kỳ_sau.số_jacpot_2)

        for (const ds_vị_trí of vị_trí_đã_học) {
          tổng_vé++
          let số_trúng = 0
          for (let m = 0; m < ds_vị_trí.length; m++) {
            số_trúng += vị_trí_trúng[ds_vị_trí[m]] | 0
          }
          if (số_trúng === 3) thực_tế.trúng_3++
          else if (số_trúng === 4) thực_tế.trúng_4++
          else if (số_trúng === 5) {
            if (có_jackpot_2 && vị_trí_số_phụ >= 0 && ds_vị_trí.includes(vị_trí_số_phụ)) {
              thực_tế.jackpot_2++
            } else thực_tế.trúng_5++
          } else if (số_trúng === 6) thực_tế.jackpot_1++
        }
      }
    }

    vị_trí_đã_học.push(...dữ_liệu.vị_trí_ds_xuất_hiện)
  }

  const xác_suất = xác_suất_ngẫu_nhiên(tổng_số, có_jackpot_2)
  const giải = GIẢI_THƯỞNG[loại_xổ_số] ?? GIẢI_THƯỞNG[45]

  let tiền_thắng = 0
  const các_dòng = CÁC_MỨC_TRÚNG.map((mức_trúng) => {
    const kỳ_vọng = tổng_vé * xác_suất[mức_trúng]
    tiền_thắng += thực_tế[mức_trúng] * giải[mức_trúng]
    return {
      mức_trúng,
      thực_tế: thực_tế[mức_trúng],
      kỳ_vọng_ngẫu_nhiên: Number(kỳ_vọng.toFixed(3)),
      z: kỳ_vọng > 0 ? Number(((thực_tế[mức_trúng] - kỳ_vọng) / Math.sqrt(kỳ_vọng)).toFixed(2)) : 0,
    }
  })

  const chi_phí = tổng_vé * GIÁ_VÉ
  return {
    loại_xổ_số,
    số_kỳ_đã_thử,
    tổng_vé,
    chi_phí,
    tiền_thắng,
    lãi_lỗ: tiền_thắng - chi_phí,
    các_dòng,
  }
}
