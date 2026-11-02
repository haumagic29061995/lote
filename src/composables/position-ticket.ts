import {
  CÁC_MỨC_TRÚNG,
  GIẢI_THƯỞNG,
  GIÁ_VÉ_THỰC_TẾ,
  tiền_thực_nhận,
  xác_suất_ngẫu_nhiên,
  type Mức_Trúng,
} from '@/composables/backtest'
import { tạo_bộ_sinh_ngẫu_nhiên } from '@/composables/ticket-portfolio'
import type { Đối_Tượng_Xổ_Số } from '@/types/lote'

const SỐ_VỊ_TRÍ_MỖI_VÉ = 6
const SỐ_VỊ_TRÍ_MỖI_HÀNG = 6
const SỐ_VỊ_TRÍ_TỐI_ĐA_MỖI_HÀNG_TRONG_VÉ = 3
// seed cố định: cùng (số_vị_trí, số_vé) thì luôn ra đúng cùng một bộ vị trí, đó là "công thức không đổi"
const SEED_CÔNG_THỨC = 20261008

/**
 * Vé hợp lệ khi: có ít nhất 1 cột chứa từ 2 vị trí trở lên, và mỗi hàng chứa tối đa 3 vị trí.
 * Cột của vị trí v là v % 6, hàng là floor(v / 6) (danh sách xếp theo hàng, mỗi hàng 6 số).
 */
export function thỏa_điều_kiện_vị_trí(ds_vị_trí: number[]): boolean {
  const đếm_cột = new Map<number, number>()
  const đếm_hàng = new Map<number, number>()
  ds_vị_trí.forEach((vị_trí) => {
    const cột = vị_trí % SỐ_VỊ_TRÍ_MỖI_HÀNG
    const hàng = Math.floor(vị_trí / SỐ_VỊ_TRÍ_MỖI_HÀNG)
    đếm_cột.set(cột, (đếm_cột.get(cột) ?? 0) + 1)
    đếm_hàng.set(hàng, (đếm_hàng.get(hàng) ?? 0) + 1)
  })
  return (
    [...đếm_cột.values()].some((số) => số >= 2) &&
    [...đếm_hàng.values()].every((số) => số <= SỐ_VỊ_TRÍ_TỐI_ĐA_MỖI_HÀNG_TRONG_VÉ)
  )
}

// 15 cách chọn 4 trong 6 chỉ số, dùng để bảo đảm không 2 vé nào chung ≥4 vị trí
const CÁC_TẬP_4_TRONG_6: number[][] = (() => {
  const kết_quả: number[][] = []
  for (let a = 0; a < 6; a++)
    for (let b = a + 1; b < 6; b++)
      for (let c = b + 1; c < 6; c++) for (let d = c + 1; d < 6; d++) kết_quả.push([a, b, c, d])
  return kết_quả
})()

const bộ_nhớ_đệm = new Map<string, number[][]>()

/**
 * Tạo `số_vé` bộ 6 vị trí trong 0..số_vị_trí-1 thỏa điều kiện cột/hàng và đôi một chung nhau tối đa 3 vị trí.
 * Chung tối đa 3 vị trí nghĩa là chung tối đa 3 số với mọi danh sách, nên các biến cố "vé trúng ≥5 số" loại
 * trừ nhau và xác suất có vé trúng ≥5 đạt mức tối đa. Kết quả chỉ phụ thuộc (số_vị_trí, số_vé), không đổi giữa các lần.
 */
export function tạo_bộ_vị_trí_cố_định(số_vị_trí: number, số_vé: number): number[][] {
  const khóa_đệm = `${số_vị_trí}-${số_vé}`
  const đã_có = bộ_nhớ_đệm.get(khóa_đệm)
  if (đã_có) return đã_có

  const ngẫu_nhiên = tạo_bộ_sinh_ngẫu_nhiên(SEED_CÔNG_THỨC)
  const bộ_vị_trí: number[][] = []
  const đã_dùng = new Set<number>()
  const số_lần_thử_tối_đa = số_vé * 3000
  const nguồn = Array.from({ length: số_vị_trí }, (_, i) => i)

  for (let lần_thử = 0; lần_thử < số_lần_thử_tối_đa && bộ_vị_trí.length < số_vé; lần_thử++) {
    // chọn ngẫu nhiên 6 vị trí không lặp (Fisher-Yates từng phần)
    for (let i = 0; i < SỐ_VỊ_TRÍ_MỖI_VÉ; i++) {
      const j = i + Math.floor(ngẫu_nhiên() * (số_vị_trí - i))
      ;[nguồn[i], nguồn[j]] = [nguồn[j], nguồn[i]]
    }
    const vé = nguồn.slice(0, SỐ_VỊ_TRÍ_MỖI_VÉ).sort((a, b) => a - b)
    if (!thỏa_điều_kiện_vị_trí(vé)) continue

    const các_khóa = CÁC_TẬP_4_TRONG_6.map(
      (tập) => ((vé[tập[0]] * 64 + vé[tập[1]]) * 64 + vé[tập[2]]) * 64 + vé[tập[3]],
    )
    if (các_khóa.some((khóa) => đã_dùng.has(khóa))) continue
    các_khóa.forEach((khóa) => đã_dùng.add(khóa))
    bộ_vị_trí.push(vé)
  }

  bộ_nhớ_đệm.set(khóa_đệm, bộ_vị_trí)
  return bộ_vị_trí
}

// Áp bộ vị trí cố định lên một danh sách xuất hiện cụ thể để ra các vé (mỗi vé là 6 số)
export function tạo_vé_từ_danh_sách(danh_sách: string[], bộ_vị_trí: number[][]): string[][] {
  return bộ_vị_trí.map((ds_vị_trí) => ds_vị_trí.map((vị_trí) => danh_sách[vị_trí]).sort())
}

export type Vé_Trúng = { vé: string[]; số_trúng: number; số_trùng: string[]; mức: Mức_Trúng }

export type Đánh_Giá_Bộ_Vé = {
  dòng_theo_mức: Array<{
    mức_trúng: Mức_Trúng
    số_vé: number
    kỳ_vọng_ngẫu_nhiên: number
    tiền_mỗi_vé: number
    tiền: number
  }>
  chi_phí: number
  tiền_thắng: number
  lãi_lỗ: number
  vé_trúng_từ_4: Vé_Trúng[]
}

/**
 * So bộ vé với kết quả thật của `kỳ_sau`. Tiền thắng đã trừ thuế, chi phí đã gồm phí mua vé.
 * Trúng 5 số mà vé có số phụ (chỉ loại 55) là jackpot 2.
 */
export function đánh_giá_bộ_vé(vé: string[][], kỳ_sau: Đối_Tượng_Xổ_Số): Đánh_Giá_Bộ_Vé {
  const loại_xổ_số = kỳ_sau.loại_xổ_số
  const có_jackpot_2 = loại_xổ_số === 55
  const tập_kết_quả = new Set(kỳ_sau.kết_quả_xổ_số)
  const giải = GIẢI_THƯỞNG[loại_xổ_số] ?? GIẢI_THƯỞNG[45]
  const xác_suất = xác_suất_ngẫu_nhiên(loại_xổ_số === 55 ? 55 : 45, có_jackpot_2)

  const số_vé_theo_mức = Object.fromEntries(CÁC_MỨC_TRÚNG.map((mức) => [mức, 0])) as Record<
    Mức_Trúng,
    number
  >
  const vé_trúng_từ_4: Vé_Trúng[] = []

  vé.forEach((một_vé) => {
    const số_trùng = một_vé.filter((số) => tập_kết_quả.has(số))
    const số_trúng = số_trùng.length
    let mức: Mức_Trúng | undefined
    if (số_trúng === 3) mức = 'trúng_3'
    else if (số_trúng === 4) mức = 'trúng_4'
    else if (số_trúng === 5) {
      mức = có_jackpot_2 && một_vé.includes(kỳ_sau.số_jacpot_2) ? 'jackpot_2' : 'trúng_5'
    } else if (số_trúng === 6) mức = 'jackpot_1'
    if (!mức) return
    số_vé_theo_mức[mức]++
    if (số_trúng >= 4) vé_trúng_từ_4.push({ vé: một_vé, số_trúng, số_trùng, mức })
  })

  let tiền_thắng = 0
  const dòng_theo_mức = CÁC_MỨC_TRÚNG.map((mức_trúng) => {
    const tiền_mỗi_vé = tiền_thực_nhận(giải[mức_trúng])
    const tiền = số_vé_theo_mức[mức_trúng] * tiền_mỗi_vé
    tiền_thắng += tiền
    return {
      mức_trúng,
      số_vé: số_vé_theo_mức[mức_trúng],
      kỳ_vọng_ngẫu_nhiên: Number((vé.length * xác_suất[mức_trúng]).toFixed(2)),
      tiền_mỗi_vé,
      tiền,
    }
  })

  const chi_phí = vé.length * GIÁ_VÉ_THỰC_TẾ
  return {
    dòng_theo_mức,
    chi_phí,
    tiền_thắng,
    lãi_lỗ: tiền_thắng - chi_phí,
    vé_trúng_từ_4: vé_trúng_từ_4.sort((a, b) => b.số_trúng - a.số_trúng),
  }
}

export type Vé_Theo_Số_Lần = { vé: string[][]; số_ứng_viên: number }

/**
 * Tạo tối đa `số_vé` vé 6 số từ các số của một danh sách có số lần xuất hiện trong [từ, tới].
 * `lọc_vị_trí` nhận vị trí (chỉ số trong danh sách, xếp lưới 6 cột) của 6 số, dùng để áp điều kiện cột/hàng.
 * Không hai vé nào chung từ 4 số trở lên để các vé khác nhau nhiều. `ngẫu_nhiên` có seed thì kết quả lặp lại được.
 */
export function tạo_vé_theo_số_lần_xuất_hiện(
  danh_sách: string[],
  số_lần: number[],
  từ: number,
  tới: number,
  số_vé: number,
  lọc_vị_trí: (ds_vị_trí: number[]) => boolean,
  ngẫu_nhiên: () => number,
): Vé_Theo_Số_Lần {
  const ứng_viên = danh_sách
    .map((_, vị_trí) => vị_trí)
    .filter((vị_trí) => số_lần[vị_trí] >= từ && số_lần[vị_trí] <= tới)
  if (ứng_viên.length < SỐ_VỊ_TRÍ_MỖI_VÉ) return { vé: [], số_ứng_viên: ứng_viên.length }

  const vé: string[][] = []
  const đã_dùng = new Set<number>()
  const nguồn = [...ứng_viên]
  const số_lần_thử_tối_đa = số_vé * 300

  for (let lần_thử = 0; lần_thử < số_lần_thử_tối_đa && vé.length < số_vé; lần_thử++) {
    // chọn ngẫu nhiên 6 vị trí không lặp (Fisher-Yates từng phần)
    for (let i = 0; i < SỐ_VỊ_TRÍ_MỖI_VÉ; i++) {
      const j = i + Math.floor(ngẫu_nhiên() * (nguồn.length - i))
      ;[nguồn[i], nguồn[j]] = [nguồn[j], nguồn[i]]
    }
    const ds_vị_trí = nguồn.slice(0, SỐ_VỊ_TRÍ_MỖI_VÉ).sort((a, b) => a - b)
    if (!lọc_vị_trí(ds_vị_trí)) continue

    const các_khóa = CÁC_TẬP_4_TRONG_6.map(
      (tập) =>
        ((ds_vị_trí[tập[0]] * 128 + ds_vị_trí[tập[1]]) * 128 + ds_vị_trí[tập[2]]) * 128 +
        ds_vị_trí[tập[3]],
    )
    if (các_khóa.some((khóa) => đã_dùng.has(khóa))) continue
    các_khóa.forEach((khóa) => đã_dùng.add(khóa))
    vé.push(ds_vị_trí.map((vị_trí) => danh_sách[vị_trí]).sort())
  }
  return { vé, số_ứng_viên: ứng_viên.length }
}

// các tập con gồm `cỡ` chỉ số trong 0..5
function tạo_tập_con_chỉ_số(cỡ: number): number[][] {
  const kết_quả: number[][] = []
  const đi = (bắt_đầu: number, hiện_tại: number[]) => {
    if (hiện_tại.length === cỡ) return void kết_quả.push([...hiện_tại])
    for (let i = bắt_đầu; i < SỐ_VỊ_TRÍ_MỖI_VÉ; i++) đi(i + 1, [...hiện_tại, i])
  }
  đi(0, [])
  return kết_quả
}

/**
 * Bộ lọc loại vé giống `số_giống` vị trí trở lên với một bộ vị trí đã biết (vd bộ trong thống kê dự đoán).
 * Trả về hàm nhận 6 vị trí đã sắp xếp: true là giữ lại, false là phải loại. `số_giống` ngoài 1..6 thì không loại gì.
 */
export function tạo_bộ_lọc_loại_vé_giống(
  các_bộ_vị_trí: number[][],
  số_giống: number,
): (ds_vị_trí: number[]) => boolean {
  if (!Number.isInteger(số_giống) || số_giống < 1 || số_giống > SỐ_VỊ_TRÍ_MỖI_VÉ) return () => true
  const các_tập = tạo_tập_con_chỉ_số(số_giống)
  const tạo_khóa = (ds: number[], tập: number[]) => tập.reduce((khóa, i) => khóa * 128 + ds[i], 0)
  const khóa_đã_biết = new Set<number>()
  các_bộ_vị_trí.forEach((bộ) => {
    if (bộ.length < số_giống) return
    const đã_sắp_xếp = [...bộ].sort((a, b) => a - b)
    // bộ dài hơn 6 vẫn xét đủ mọi tổ hợp
    const tập_bộ = bộ.length === SỐ_VỊ_TRÍ_MỖI_VÉ ? các_tập : tổ_hợp_chỉ_số(bộ.length, số_giống)
    tập_bộ.forEach((tập) => khóa_đã_biết.add(tạo_khóa(đã_sắp_xếp, tập)))
  })
  return (ds_vị_trí) => !các_tập.some((tập) => khóa_đã_biết.has(tạo_khóa(ds_vị_trí, tập)))
}

function tổ_hợp_chỉ_số(tổng: number, cỡ: number): number[][] {
  const kết_quả: number[][] = []
  const đi = (bắt_đầu: number, hiện_tại: number[]) => {
    if (hiện_tại.length === cỡ) return void kết_quả.push([...hiện_tại])
    for (let i = bắt_đầu; i < tổng; i++) đi(i + 1, [...hiện_tại, i])
  }
  đi(0, [])
  return kết_quả
}
