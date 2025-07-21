export const generateOptions = (maxLength: number) => {
  const options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 10; i <= 100; i += 5) {
    if (i <= maxLength) {
      options.push(i)
    }
  }
  for (let i = 200; i <= 1000; i += 100) {
    if (i <= maxLength) {
      options.push(i)
    }
  }
  for (let i = 1100; i <= maxLength + 100; i += 100) {
    options.push(i)
  }
  return options
}
