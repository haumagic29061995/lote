import lote45Content from '@/assets/csv/lote45.csv?raw'
import lote55Content from '@/assets/csv/lote55.csv?raw'
import { LoteObject } from '@/types/lote'
import moment from 'moment'

export function getLote45(): Array<LoteObject> {
  const loteType = 45
  const lines = lote45Content.split('\n').map((line) =>
    line
      .split('\t')
      .map((item) => item.trim())
      .filter((item) => item !== ''),
  )
  const result: Array<LoteObject> = []
  for (let i = 0; i < lines.length / 2; i++) {
    const arr1: Array<string> = lines[2 * i]
    const arr2: Array<string> = lines[2 * i + 1]
    const [date, version] = arr1
    const numberResult: string[] = arr2[0].match(/.{2}/g) || []
    const dateVn = moment(date, 'DD/MM/YYYY')
    const weekOfDate = dateVn.format('dddd')
    const extraNumber: string = ''
    const day = dateVn.date().toString()
    const month = (dateVn.month() + 1).toString()
    const year = dateVn.year().toString()
    const timestamp = moment(dateVn, 'DD/MM/YYYY').valueOf()

    const nextItem: LoteObject | undefined = result[result.length - 1]
    const dataIndex: number = result.length
    // construction
    const obj = new LoteObject({
      loteType,
      dataIndex,
      date,
      numberResult,
      extraNumber,
      version,
      weekOfDate,
      day,
      month,
      year,
      timestamp,

      nextItem,
    })
    result.push(obj)
  }
  return result
}

export function getLote55(): Array<LoteObject> {
  const loteType = 55
  const lines = lote55Content.split('\n').map((line) =>
    line
      .split(/\t| \|/)
      .map((item) => item.trim())
      .filter((item) => item !== ''),
  )
  const result: Array<LoteObject> = []
  for (let i = 0; i < lines.length / 2; i++) {
    const arr1: Array<string> = lines[2 * i]
    const arr2: Array<string> = lines[2 * i + 1]
    const [date, version] = arr1
    const [resultNumber, extraNumber] = arr2
    const numberResult: string[] = resultNumber.match(/.{2}/g) || []
    const dateVn = moment(date, 'DD/MM/YYYY')
    const weekOfDate = dateVn.format('dddd')
    const day = dateVn.date().toString()
    const month = (dateVn.month() + 1).toString()
    const year = dateVn.year().toString()
    const timestamp = moment(dateVn, 'DD/MM/YYYY').valueOf()

    const nextItem: LoteObject | undefined = result[result.length - 1]

    const dataIndex: number = result.length
    // construction
    const obj = new LoteObject({
      loteType,
      dataIndex,
      date,
      numberResult,
      version,
      extraNumber,
      weekOfDate,
      day,
      month,
      year,
      timestamp,

      nextItem,
    })
    result.push(obj)
  }
  return result
}

export function getCombinations(arr: string[], k: number): string[][] {
  const result: string[][] = []

  function backtrack(start: number, path: string[]) {
    if (path.length === k) {
      result.push([...path])
      return
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i])
      backtrack(i + 1, path)
      path.pop()
    }
  }

  backtrack(0, [])
  return result
}
