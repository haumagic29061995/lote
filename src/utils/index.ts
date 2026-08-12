export const tạo_tùy_chọn_để_hiển_thị = (maxLength: number) => {
  const options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 10; i <= 100; i += 3) {
    if (i <= maxLength) {
      options.push(i)
    }
  }
  for (let i = 200; i <= 1000; i += 80) {
    if (i <= maxLength) {
      options.push(i)
    }
  }
  for (let i = 1100; i <= maxLength + 100; i += 80) {
    options.push(i)
  }
  return options
}

// Lịch quay số:
// loại 45: Thứ 4 (3), Thứ 6 (5), Chủ nhật (0)
// loại 55: Thứ 3 (2), Thứ 5 (4), Thứ 7 (6)
const LICH_XO_SO: Record<45 | 55, number[]> = {
  45: [3, 5, 0], // Thứ 4, Thứ 6, Chủ nhật
  55: [2, 4, 6], // Thứ 3, Thứ 5, Thứ 7
}

export const lấy_dấu_thời_gian_của_kỳ_sau = (
  dấu_thời_gian_của_ngày: number,
  loại_xổ_số: 45 | 55,
): number => {
  const ngày_xổ_số = new Date(dấu_thời_gian_của_ngày)
  const ngay_hien_tai = ngày_xổ_số.getDay()
  const lich_xo_so = LICH_XO_SO[loại_xổ_số]

  for (let offset = 1; offset <= 7; offset++) {
    const kỳ_quay_tiếp_theo = (ngay_hien_tai + offset) % 7
    if (lich_xo_so.includes(kỳ_quay_tiếp_theo)) {
      const nextDate = new Date(ngày_xổ_số)
      nextDate.setDate(ngày_xổ_số.getDate() + offset)
      return nextDate.getTime()
    }
  }

  return dấu_thời_gian_của_ngày
}

export const lấy_dấu_thời_gian_của_các_kỳ_tiếp_theo = (
  dấu_thời_gian_của_ngày: number,
  loại_xổ_số: 45 | 55,
  số_kỳ: number = 6,
): number[] => {
  const kết_quả: number[] = []
  let dấu_thời_gian_hiện_tại = dấu_thời_gian_của_ngày

  for (let i = 0; i < số_kỳ; i++) {
    dấu_thời_gian_hiện_tại = lấy_dấu_thời_gian_của_kỳ_sau(dấu_thời_gian_hiện_tại, loại_xổ_số)
    kết_quả.push(dấu_thời_gian_hiện_tại)
  }

  return kết_quả
}

export function lọc_các_số_giống_nhau_cùng_1_cột(ma_trận: string[][]): string[][] {
  if (ma_trận.length === 0 || ma_trận[0].length === 0) return []

  const số_dòng_ma_trận = ma_trận.length
  const số_cột_ma_trận = ma_trận[0].length

  const kết_quả_ma_trận: string[][] = Array.from({ length: số_dòng_ma_trận }, () =>
    Array(số_cột_ma_trận).fill(''),
  )

  for (let cột = 0; cột < số_cột_ma_trận; cột++) {
    const cột_đã_có_số_đó = new Set<string>()

    for (let dòng = 0; dòng < số_dòng_ma_trận; dòng++) {
      const số = ma_trận[dòng][cột]
      if (!cột_đã_có_số_đó.has(số)) {
        cột_đã_có_số_đó.add(số)
        kết_quả_ma_trận[dòng][cột] = số
      }
    }
  }

  return kết_quả_ma_trận
}
