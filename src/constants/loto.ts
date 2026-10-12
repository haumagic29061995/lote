export type Tỉnh_Xổ_Số = {
  tên: string
  thứ: number // 0 = chủ nhật ... 6 = thứ 7
}

export const TÊN_THỨ = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

export const SỐ_LÔ_MỖI_TỈNH = 18

// 22 lượt quay, sắp từ chủ nhật đến thứ 7
export const DANH_SÁCH_TỈNH: Tỉnh_Xổ_Số[] = [
  { tên: 'Tiền Giang', thứ: 0 },
  { tên: 'Kiên Giang', thứ: 0 },
  { tên: 'Đà Lạt', thứ: 0 },
  { tên: 'TP.HCM', thứ: 1 },
  { tên: 'Đồng Tháp', thứ: 1 },
  { tên: 'Cà Mau', thứ: 1 },
  { tên: 'Bến Tre', thứ: 2 },
  { tên: 'Vũng Tàu', thứ: 2 },
  { tên: 'Bạc Liêu', thứ: 2 },
  { tên: 'Đồng Nai', thứ: 3 },
  { tên: 'Cần Thơ', thứ: 3 },
  { tên: 'Sóc Trăng', thứ: 3 },
  { tên: 'Tây Ninh', thứ: 4 },
  { tên: 'An Giang', thứ: 4 },
  { tên: 'Bình Thuận', thứ: 4 },
  { tên: 'Vĩnh Long', thứ: 5 },
  { tên: 'Bình Dương', thứ: 5 },
  { tên: 'Trà Vinh', thứ: 5 },
  { tên: 'TP.HCM', thứ: 6 },
  { tên: 'Long An', thứ: 6 },
  { tên: 'Bình Phước', thứ: 6 },
  { tên: 'Hậu Giang', thứ: 6 },
]
