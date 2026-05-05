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

export const findCommonValues = (matrices: string[][]): Set<string> => {
  if (matrices.length === 0) {
    return new Set<string>()
  }

  if (matrices.length === 1) {
    return new Set<string>(matrices[0])
  }

  // Tạo Set cho ma trận đầu tiên
  const commonSet = new Set<string>(matrices[0])

  // Duyệt qua các ma trận còn lại
  for (let i = 1; i < matrices.length; i++) {
    const currentMatrixSet = new Set<string>(matrices[i])

    // Giữ lại chỉ những giá trị xuất hiện ở cả 2
    for (let value of commonSet) {
      if (!currentMatrixSet.has(value)) {
        commonSet.delete(value)
      }
    }
  }

  return commonSet
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
