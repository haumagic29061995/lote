interface Lote {
  loteType: number
  dataIndex: number
  date: string
  numberResult: string[]
  extraNumber: string
  version: string
  weekOfDate: string
  day: string
  month: string
  year: string
  timestamp: number

  nextItem?: LoteObject
}

export type ApearType = {
  number: string
  total: number
  isResult: boolean
  isResult2: boolean
}

export class LoteObject {
  loteType: number
  dataIndex: number
  date: string
  numberResult: string[]
  extraNumber: string
  version: string
  weekOfDate: string
  day: string
  month: string
  year: string
  timestamp: number
  nextItem?: LoteObject

  // feature 1
  feature_1_rowElement: string[][] = []

  feature_1_two_list = new Set<string>()

  feature_1_two_list_number_apear: Array<ApearType> = []

  feature_1_two_list_apear_sorted: Array<ApearType> = []
  feature_1_two_list_apear_sorted_index: number[] = []
  feature_1_two_list_apear_sorted_pattern: number[] = Array(6).fill(0)

  feature_1_duplicate_number: string[] = []

  constructor(lote: Lote) {
    this.loteType = lote.loteType
    this.dataIndex = lote.dataIndex
    this.date = lote.date
    this.numberResult = lote.numberResult
    this.extraNumber = lote.extraNumber
    this.version = lote.version
    this.weekOfDate = lote.weekOfDate
    this.day = lote.day
    this.month = lote.month
    this.year = lote.year
    this.timestamp = lote.timestamp
    this.nextItem = lote.nextItem
  }
}
