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

export type CombineType = {
  numberResult: string[]
  offsetNumber: number
  kCombine: number
}
export type CombineCountType = {
  offsetNumber: number
  total: number
}

export type ConsecutiveGroup = {
  index: number
  value: string
  rows: number[]
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
  feature_1_setArrray_1 = new Set<string>()
  feature_1_setArrray_1_diff_setArrray_2 = new Set<string>()
  feature_1_setArrray_2 = new Set<string>()
  feature_1_setArrray_2_diff_setArrray_1 = new Set<string>()
  feature_1_two_list = new Set<string>()
  feature_1_two_not_union = new Set<string>()
  feature_1_union_two_list = new Set<string>()
  feature_1_two_list_number_apear: Array<ApearType> = []

  // feature 2
  feature_2_rowElement: string[][] = []
  feature_2_same3Element: string[][] = []

  // feature 3
  feature_3_combine_3: CombineType[] = []
  feature_3_combine_4: CombineType[] = []
  feature_3_combine_5: CombineType[] = []
  feature_3_combine_6: CombineType[] = []

  // feature 4
  feature_4_rowElement: string[][] = []
  feature_4_consecutiveGrpup: ConsecutiveGroup[] = []

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
