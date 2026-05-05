interface Dữ_Liệu_1_Đối_Tượng {
  loại_xổ_số: number
  vị_trí_dữ_liệu: number
  ngày_xổ_số: string
  kết_quả_xổ_số: string[]
  số_jacpot_2: string
  kỳ_xổ_số: string
  tuần_xổ_số: string
  giá_trị_ngày: string
  giá_trị_tháng: string
  giá_trị_năm: string
  dấu_thời_gian_của_ngày: number
  dấu_thời_gian_kỳ_sau_đó: number
  dữ_liệu_kỳ_sau_đó?: Đối_Tượng_Xổ_Số
}

export type Loại_Dữ_Liệu_Xuât_Hiện = {
  số_xuất_hiện: string
  tổng_xuất_hiện: number
  là_số_kết_quả: boolean
  là_số_jackpot_2: boolean
  là_số_trùng?: boolean
}

export class Đối_Tượng_Xổ_Số {
  loại_xổ_số: number
  vị_trí_dữ_liệu: number
  ngày_xổ_số: string
  kết_quả_xổ_số: string[]
  số_jacpot_2: string
  kỳ_xổ_số: string
  tuần_xổ_số: string
  giá_trị_ngày: string
  giá_trị_tháng: string
  giá_trị_năm: string
  dấu_thời_gian_của_ngày: number
  dấu_thời_gian_kỳ_sau_đó: number
  dữ_liệu_kỳ_sau_đó?: Đối_Tượng_Xổ_Số

  danh_sách_dự_đoán_bằng_ngày_xổ_số: string[] = []
  kết_quả_dự_đoán_bằng_ngày_xổ_số: number = 0

  tổng_trong_ngày: number = 0
  danh_sách_dự_đoán_bẳng_tổng_trong_ngày: string[] = []
  kết_quả_dự_đoán_bằng_tổng_trong_ngày: number = 0

  tổng_ngày_tháng: number = 0
  danh_sách_dự_đoán_bằng_tổng_ngày_tháng: string[] = []
  kết_quả_dự_đoán_bằng_tổng_ngày_tháng: number = 0

  tổng_trong_ngày_tháng: number = 0
  danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng: string[] = []
  kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng: number = 0

  tổng_trong_ngày_tháng_năm: number = 0
  danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng_năm: string[] = []
  kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng_năm: number = 0

  các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau: string[] = []
  danh_sách_dự_đoán_các_số_trùng: string[] = []
  kết_quả_dự_đoán_các_số_trùng: number = 0

  danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện: string[][] = []
  danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện: Array<Loại_Dữ_Liệu_Xuât_Hiện> = []
  số_kết_quả_trong_các_số_đã_xuất_hiện: number = 0
  tập_các_số_đã_xuất_hiện = new Set<string>()

  constructor(đối_tượng: Dữ_Liệu_1_Đối_Tượng) {
    this.loại_xổ_số = đối_tượng.loại_xổ_số
    this.vị_trí_dữ_liệu = đối_tượng.vị_trí_dữ_liệu
    this.ngày_xổ_số = đối_tượng.ngày_xổ_số
    this.kết_quả_xổ_số = đối_tượng.kết_quả_xổ_số
    this.số_jacpot_2 = đối_tượng.số_jacpot_2
    this.kỳ_xổ_số = đối_tượng.kỳ_xổ_số
    this.tuần_xổ_số = đối_tượng.tuần_xổ_số
    this.giá_trị_ngày = đối_tượng.giá_trị_ngày
    this.giá_trị_tháng = đối_tượng.giá_trị_tháng
    this.giá_trị_năm = đối_tượng.giá_trị_năm
    this.dấu_thời_gian_của_ngày = đối_tượng.dấu_thời_gian_của_ngày
    this.dấu_thời_gian_kỳ_sau_đó = đối_tượng.dấu_thời_gian_kỳ_sau_đó
    this.dữ_liệu_kỳ_sau_đó = đối_tượng.dữ_liệu_kỳ_sau_đó
  }
}
