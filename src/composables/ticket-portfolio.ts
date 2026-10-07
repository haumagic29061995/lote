import type { Đối_Tượng_Xổ_Số } from '@/types/lote'

const SỐ_LƯỢNG_SỐ_MỖI_VÉ = 6
const SỐ_KỲ_LỊCH_SỬ_TỐI_THIỂU = 50

// Số vé mục tiêu theo loại xổ số
export const SỐ_VÉ_MỤC_TIÊU: Record<number, number> = { 45: 500, 55: 1000 }

/**
 * Chiến lược trả về trọng số của từng số 1..tổng_số (phần tử 0 bỏ trống).
 * `lịch_sử` là các kỳ cũ hơn kỳ cần dự đoán, kỳ mới nhất ở đầu mảng.
 */
export type Chiến_Lược_Trọng_Số = (lịch_sử: Array<Đối_Tượng_Xổ_Số>, tổng_số: number) => number[]

function đếm_xuất_hiện(lịch_sử: Array<Đối_Tượng_Xổ_Số>, tổng_số: number, số_kỳ: number): number[] {
  const đếm = new Array<number>(tổng_số + 1).fill(0)
  lịch_sử.slice(0, số_kỳ).forEach((kỳ) => kỳ.kết_quả_xổ_số.forEach((số) => đếm[Number(số)]++))
  return đếm
}

export const CÁC_CHIẾN_LƯỢC: Record<string, Chiến_Lược_Trọng_Số> = {
  // đối chứng: mọi số như nhau, đây là mức tối đa nếu kết quả quay thật sự ngẫu nhiên
  ngẫu_nhiên: (_lịch_sử, tổng_số) => new Array<number>(tổng_số + 1).fill(1),

  // thiên về số ra nhiều trong 50 kỳ gần nhất
  số_nóng_50: (lịch_sử, tổng_số) => đếm_xuất_hiện(lịch_sử, tổng_số, 50).map((c) => c + 1),

  // thiên về số ít ra trong 50 kỳ gần nhất
  số_lạnh_50: (lịch_sử, tổng_số) => đếm_xuất_hiện(lịch_sử, tổng_số, 50).map((c) => 1 / (c + 1)),

  // thiên về số lâu chưa xuất hiện
  số_lâu_chưa_ra: (lịch_sử, tổng_số) => {
    const khoảng_cách = new Array<number>(tổng_số + 1).fill(lịch_sử.length)
    for (let i = lịch_sử.length - 1; i >= 0; i--) {
      lịch_sử[i].kết_quả_xổ_số.forEach((số) => (khoảng_cách[Number(số)] = i))
    }
    return khoảng_cách.map((k) => k + 1)
  },

  // thiên về số vừa ra ở kỳ liền trước (xem số có "lặp" theo kỳ không)
  số_vừa_ra: (lịch_sử, tổng_số) => {
    const trọng_số = new Array<number>(tổng_số + 1).fill(1)
    lịch_sử[0]?.kết_quả_xổ_số.forEach((số) => (trọng_số[Number(số)] = 4))
    return trọng_số
  },
}

// bộ sinh số ngẫu nhiên có seed, để backtest lặp lại được cùng kết quả
export function tạo_bộ_sinh_ngẫu_nhiên(seed: number): () => number {
  let trạng_thái = seed >>> 0
  return () => {
    trạng_thái = (trạng_thái + 0x6d2b79f5) >>> 0
    let t = trạng_thái
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// 15 cách chọn 4 vị trí trong 6 (dùng để kiểm tra 2 vé có chung ≥4 số không)
const CÁC_TẬP_4_TRONG_6: number[][] = (() => {
  const kết_quả: number[][] = []
  for (let a = 0; a < 6; a++)
    for (let b = a + 1; b < 6; b++)
      for (let c = b + 1; c < 6; c++) for (let d = c + 1; d < 6; d++) kết_quả.push([a, b, c, d])
  return kết_quả
})()

function khóa_tập_4(vé_đã_sắp_xếp: number[], tập: number[]): number {
  return (
    ((vé_đã_sắp_xếp[tập[0]] * 64 + vé_đã_sắp_xếp[tập[1]]) * 64 + vé_đã_sắp_xếp[tập[2]]) * 64 +
    vé_đã_sắp_xếp[tập[3]]
  )
}

/**
 * Tạo `số_vé` vé 6 số, đôi một chung nhau tối đa 3 số (không vé nào chung ≥4 số với vé khác).
 * Khi đó các biến cố "vé trúng ≥5 số" loại trừ nhau, nên xác suất có ít nhất 1 vé trúng ≥5 đạt tối đa
 * bằng số_vé × xác_suất_1_vé. Trọng số chỉ làm lệch việc chọn số, không thay đổi mức tối đa này
 * nếu kết quả quay thật sự ngẫu nhiên.
 */
export function tạo_danh_sách_vé(
  tổng_số: number,
  số_vé: number,
  trọng_số: number[],
  ngẫu_nhiên: () => number = Math.random,
): number[][] {
  const vé_đã_chọn: number[][] = []
  const đã_dùng = new Set<number>()
  const số_lần_thử_tối_đa = số_vé * 200
  const khóa_số = new Float64Array(tổng_số + 1)

  for (let lần_thử = 0; lần_thử < số_lần_thử_tối_đa && vé_đã_chọn.length < số_vé; lần_thử++) {
    // lấy mẫu có trọng số không hoàn lại (Efraimidis-Spirakis): lấy 6 số có khóa lớn nhất
    for (let số = 1; số <= tổng_số; số++) {
      khóa_số[số] = ngẫu_nhiên() ** (1 / Math.max(trọng_số[số], 1e-9))
    }
    const vé: number[] = []
    for (let lần = 0; lần < SỐ_LƯỢNG_SỐ_MỖI_VÉ; lần++) {
      let số_tốt_nhất = 0
      for (let số = 1; số <= tổng_số; số++) {
        if (khóa_số[số] > khóa_số[số_tốt_nhất]) số_tốt_nhất = số
      }
      vé.push(số_tốt_nhất)
      khóa_số[số_tốt_nhất] = -1
    }
    vé.sort((a, b) => a - b)

    const các_khóa = CÁC_TẬP_4_TRONG_6.map((tập) => khóa_tập_4(vé, tập))
    if (các_khóa.some((khóa) => đã_dùng.has(khóa))) continue
    các_khóa.forEach((khóa) => đã_dùng.add(khóa))
    vé_đã_chọn.push(vé)
  }
  return vé_đã_chọn
}

function tổ_hợp(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let kết_quả = 1
  for (let i = 1; i <= k; i++) kết_quả = (kết_quả * (n - k + i)) / i
  return kết_quả
}

// Xác suất 1 vé trúng đúng 6 số, và trúng từ 5 số trở lên (kể cả trường hợp 5 số + số phụ)
export function xác_suất_một_vé(tổng_số: number): { từ_5: number; số_6: number } {
  const tất_cả = tổ_hợp(tổng_số, 6)
  const số_6 = 1 / tất_cả
  const đúng_5 = (6 * (tổng_số - 6)) / tất_cả
  return { từ_5: đúng_5 + số_6, số_6 }
}

export type Dòng_Backtest_Vé = {
  chiến_lược: string
  số_kỳ: number
  số_vé_mỗi_kỳ: number
  kỳ_trúng_từ_5: number
  kỳ_vọng_ngẫu_nhiên: number
  // (thực tế - kỳ vọng) / độ lệch chuẩn nhị thức. Kỳ vọng chỉ cỡ chục kỳ nên z dưới 2 là chưa kết luận được gì
  z: number
  kỳ_trúng_6: number
}

/**
 * Với mỗi kỳ trong lịch sử, tạo bộ vé chỉ từ các kỳ cũ hơn rồi xem có vé nào trúng ≥5 số không.
 * `danh_sách_dữ_liệu` có kỳ mới nhất ở chỉ số 0.
 */
export function backtest_bộ_vé(
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  tên_chiến_lược: string,
  số_vé: number = SỐ_VÉ_MỤC_TIÊU[danh_sách_dữ_liệu[0].loại_xổ_số],
  seed: number = 1,
): Dòng_Backtest_Vé {
  const tổng_số = danh_sách_dữ_liệu[0].loại_xổ_số === 55 ? 55 : 45
  const chiến_lược = CÁC_CHIẾN_LƯỢC[tên_chiến_lược]
  const ngẫu_nhiên = tạo_bộ_sinh_ngẫu_nhiên(seed)

  let số_kỳ = 0
  let kỳ_trúng_từ_5 = 0
  let kỳ_trúng_6 = 0

  for (let p = 0; p + SỐ_KỲ_LỊCH_SỬ_TỐI_THIỂU < danh_sách_dữ_liệu.length; p++) {
    const lịch_sử = danh_sách_dữ_liệu.slice(p + 1)
    const vé = tạo_danh_sách_vé(tổng_số, số_vé, chiến_lược(lịch_sử, tổng_số), ngẫu_nhiên)
    const kết_quả = new Set(danh_sách_dữ_liệu[p].kết_quả_xổ_số.map(Number))

    let trúng_nhiều_nhất = 0
    for (const v of vé) {
      let trúng = 0
      for (const số of v) if (kết_quả.has(số)) trúng++
      if (trúng > trúng_nhiều_nhất) trúng_nhiều_nhất = trúng
    }
    số_kỳ++
    if (trúng_nhiều_nhất >= 5) kỳ_trúng_từ_5++
    if (trúng_nhiều_nhất === 6) kỳ_trúng_6++
  }

  const q = Math.min(1, số_vé * xác_suất_một_vé(tổng_số).từ_5)
  const kỳ_vọng = số_kỳ * q
  const độ_lệch = Math.sqrt(số_kỳ * q * (1 - q))
  return {
    chiến_lược: tên_chiến_lược,
    số_kỳ,
    số_vé_mỗi_kỳ: số_vé,
    kỳ_trúng_từ_5,
    kỳ_vọng_ngẫu_nhiên: Number(kỳ_vọng.toFixed(2)),
    z: độ_lệch > 0 ? Number(((kỳ_trúng_từ_5 - kỳ_vọng) / độ_lệch).toFixed(2)) : 0,
    kỳ_trúng_6,
  }
}
