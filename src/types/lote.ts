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
  nextTimestamp: number
  nextItem?: LoteObject
}

export type ApearType = {
  number: string
  total: number
  isResult: boolean
  isResult2: boolean
  isDuplicate?: boolean
}

export type ApearRepeat = {
  number: string
  total: number
  maxRepeat: number
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
  nextTimestamp: number
  nextItem?: LoteObject

  duplicateNumbers4555Index0: string[] = []
  numbersFromResult4555Index0: string[] = []

  listResult4555Index0: string[][] = []

  setNumbersFromResult4555Index0 = new Set<string>()

  appearListData: Array<ApearType> = []

  nearlySetNumbersFromIndex0 = new Set<string>()

  nearlyHowManyVersionFromIndex0?: number = undefined

  nearlyAppearList: Array<ApearType> = []

  nearlyIndexAppearList: number[] = []

  nearlySpacingListIndex: number[] = []

  appearListTotal: Array<ApearType> = []

  appearIndexListTotal: number[] = []

  appearSpacingListIndexTotal: number[] = []

  appearPatternListTotal: number[] = Array(6).fill(0)

  spacingCount6InAppear?: number = undefined

  spacingCount1InAppear?: number = undefined

  order6NumbersFromNextResult: string[] = []

  numberByNextDate: string[] = []

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
    this.nextTimestamp = lote.nextTimestamp
    this.nextItem = lote.nextItem
  }
}
