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
  nextItem?: LoteObject

  ////
  //// feature 1
  ////

  /**
   * danh sách các số trùng trong 2 kết quả của 1 kỳ 55 và 1 kỳ 45 ở index = 0
   */
  feature_1_duplicate_numbers_45_55_at_index0: string[] = []

  /**
   * danh sách chứa các kết quả
   * được tìm bởi 1 kỳ 55 và 1 kỳ 45 ở index = 0
   * từ kết quả của 1 kỳ 55 và 1 kỳ 45 là index để tìm các kết quả trước đó
   */
  feature_1_list_result_45_55_at_index0: string[][] = []

  /**
   * tập hợp các số
   * trong 2 kết quả của 1 kỳ 55 và 1 kỳ 45 (feature_1_list_result_45_55_at_index0)
   */
  feature_1_set_numbers_from_result_45_55_at_index0 = new Set<string>()

  /**
   * số lần xuất hiện của các số
   * trong 2 kết quả của 1 kỳ 55 và 1 kỳ 45 (feature_1_list_result_45_55_at_index0)
   */
  feature_1_appear_list: Array<ApearType> = []

  /**
   * tập hợp 45 hoặc 55 số xuất hiện theo thứ tự index
   * đếm từ index = 0 đến khi nào xuất hiện đủ 45 hoặc 55 số
   *
   * ví dụ cho 45: 10, 20, 01, 02, 45, ....và 40 số còn lại
   * ví dụ cho 55: 11, 20, 33, 22, 55, ....và 50 số còn lại
   */
  feature_1_nearly_set_numbers_from_index0 = new Set<string>()

  /**
   * đếm bao nhiêu kỳ thì xuất hiện tất cả 45 hoặc 55 số
   * đếm từ index = 0
   */
  feature_1_nearly_how_manu_version_from_index0?: number = undefined

  /**
   * danh sách số xuất hiện trong 2 kết quả của 1 kỳ 55 và 1 kỳ 45
   * cộng thêm dãy số không xuất hiện
   * - sắp xếp theo gần nhất và tổng số xuất hiện
   */
  feature_1_nearly_appear_list: Array<ApearType> = []

  /**
   * danh sách index mà đúng với kết quả từ feature_1_nearly_appear_list
   */
  feature_1_nearly_index_appear_list: number[] = []

  /**
   * danh sách khoảng các index của feature_1_nearly_index_appear_list
   * ví dụ:
   * feature_1_nearly_index_appear_list = [1, 9, 15, 20, 30, 41]
   * thì = [9-1=8, 15-9=6, 20-15=5, 30-20=10, 41-30=11]
   */
  feature_1_nearly_spacing_list_index: number[] = []

  /**
   * danh sách số xuất hiện trong 2 kết quả của 1 kỳ 55 và 1 kỳ 45
   * cộng thêm dãy số không xuất hiện
   * - sắp xếp theo total (trừ các số không xuất hiện)
   */
  feature_1_appear_list_total: Array<ApearType> = []

  /**
   * danh sách index mà đúng với kết quả từ feature_1_appear_list_total
   */
  feature_1_appear_index_list_total: number[] = []

  /**
   * danh sách khoảng các index của feature_1_appear_index_list_total
   * ví dụ:
   * feature_1_appear_index_list_total = [1, 9, 15, 20, 30, 41]
   * thì = [9-1=8, 15-9=6, 20-15=5, 30-20=10, 41-30=11]
   */
  feature_1_appear_spacing_list_index_total: number[] = []

  /**
   * danh sách 6 phần tử cho 6 cột
   * mỗi cột có bao nhiêu số xuất hiện từ kết quả theo feature_1_appear_list_total
   */
  feature_1_appear_pattern_list_total: number[] = Array(6).fill(0)

  /**
   * đếm bao nhiêu kỳ thì sẽ có 6 số xuất hiện
   * trong các kết quả feature_1_appear_list giống nhau
   */
  feature_1_spacing_count_6_in_appear?: number = undefined
  /**
   * đếm bao nhiêu kỳ thì sẽ có 1 số xuất hiện
   * trong các kết quả feature_1_appear_list giống nhau
   */
  feature_1_spacing_count_1_in_appear?: number = undefined

  /**
   * sau khi kết quả dự đoán (next item) đã có
   * 6 số sẽ xuất hiện theo thứ tự gì
   * ví dụ:
   * next item result = [10, 20, 30, 40, 42, 44]
   * 6 số xuất hiện = [44, 10, 30, 20, 42, 40]
   */
  feature_1_order_6_number_from_next_result: string[] = []

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
