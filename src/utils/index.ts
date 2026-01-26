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
