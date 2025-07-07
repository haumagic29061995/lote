import type { ConsecutiveGroup } from '@/types/lote'

export const generateOptions = (maxLength: number) => {
  const options: number[] = [1, 2, 3, 4, 5]
  for (let i = 10; i <= 100; i += 10) {
    if (i <= maxLength) {
      options.push(i)
    }
  }
  for (let i = 200; i <= 1000; i += 100) {
    if (i <= maxLength) {
      options.push(i)
    }
  }
  for (let i = 1100; i <= maxLength; i += 100) {
    options.push(i)
  }
  return options
}

function findConsecutiveChunks(arr: number[]): number[][] {
  const chunks: number[][] = []
  let temp: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (temp.length === 0 || arr[i] === temp[temp.length - 1] + 1) {
      temp.push(arr[i])
    } else {
      if (temp.length >= 2) chunks.push([...temp])
      temp = [arr[i]]
    }
  }

  if (temp.length >= 2) chunks.push([...temp])
  return chunks
}

export function findAllConsecutiveValueGroups(rows: string[][]): ConsecutiveGroup[] {
  const results: { index: number; value: string; rows: number[] }[] = []
  const numCols = Math.max(...rows.map((row) => row.length))

  for (let col = 0; col < numCols; col++) {
    const valueMap: Record<string, number[]> = {}

    rows.forEach((row, rowIndex) => {
      const value = row[col]
      if (!value) return

      if (!valueMap[value]) valueMap[value] = []
      valueMap[value].push(rowIndex)
    })

    for (const [value, rowIndices] of Object.entries(valueMap)) {
      const chunks = findConsecutiveChunks(rowIndices)
      for (const chunk of chunks) {
        const cg: ConsecutiveGroup = {
          index: col,
          value,
          rows: chunk,
        }
        results.push(cg)
      }
    }
  }

  return results
}
