export const generateOptions = (maxLength: number) => {
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

export const sortNestedArray = (arr: number[][]): number[][] => {
  return arr.sort((a, b) => {
    // So sánh từng phần tử từ trái sang phải
    for (let i = 0; i < 6; i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i]
      }
    }
    return 0 // Tất cả phần tử giống nhau
  })
}
/**
 * Tìm các giá trị xuất hiện ở tất cả các ma trận
 * @param matrices - Mảng các ma trận
 * @returns Set các giá trị xuất hiện ở tất cả ma trận
 */
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
// Lote 45: Thứ 4 (3), Thứ 6 (5), Chủ nhật (0)
// Lote 55: Thứ 3 (2), Thứ 5 (4), Thứ 7 (6)
const LOTE_SCHEDULE: Record<45 | 55, number[]> = {
  45: [3, 5, 0], // Wednesday, Friday, Sunday
  55: [2, 4, 6], // Tuesday, Thursday, Saturday
}

export const getNextLoteTimestamp = (timestamp: number, loteType: 45 | 55): number => {
  const date = new Date(timestamp)
  const currentDay = date.getDay()
  const validDays = LOTE_SCHEDULE[loteType]

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (currentDay + offset) % 7
    if (validDays.includes(nextDay)) {
      const nextDate = new Date(date)
      nextDate.setDate(date.getDate() + offset)
      return nextDate.getTime()
    }
  }

  return timestamp
}
