import csv_dữ_liệu_loto from '@/assets/csv/loto.csv?raw'

import { DANH_SÁCH_TỈNH, SỐ_LÔ_MỖI_TỈNH } from '@/constants/loto'

export type Kết_Quả_Loto_Tỉnh = {
  tên: string
  thứ: number
  ngày: string
  hai_số_cuối: string[] // 2 chữ số cuối của từng lô, dùng để lọc; rỗng nếu chưa có dữ liệu
}

export type Tuần_Loto = {
  nhãn: string // ngày chủ nhật đầu tuần, DD/MM/YYYY
  các_tỉnh: Kết_Quả_Loto_Tỉnh[] // đúng 22 phần tử theo DANH_SÁCH_TỈNH
}

const định_dạng_ngày = (ngày: Date): string =>
  [ngày.getDate(), ngày.getMonth() + 1, ngày.getFullYear()]
    .map((số, i) => String(số).padStart(i === 2 ? 4 : 2, '0'))
    .join('/')

const phân_tích_ngày = (ngày: string): Date => {
  const [d, m, y] = ngày.split('/').map(Number)
  return new Date(y, m - 1, d)
}

// tuần chạy từ chủ nhật đến thứ 7
const lấy_chủ_nhật_đầu_tuần = (ngày: Date): Date =>
  new Date(ngày.getFullYear(), ngày.getMonth(), ngày.getDate() - ngày.getDay())

// gom theo tuần (mới nhất trước), mỗi tuần 22 tỉnh
export function lấy_dữ_liệu_loto(): Tuần_Loto[] {
  const các_tuần = new Map<number, Map<string, { ngày: string; các_lô: string[] }>>()
  for (const dòng of csv_dữ_liệu_loto.split('\n')) {
    if (!dòng.trim() || dòng.startsWith('#')) continue
    const [tên, ngày, kết_quả = ''] = dòng.split('\t').map((mục) => mục.trim())
    const các_lô = kết_quả.split(/\s+/).filter((lô) => lô !== '')
    if (các_lô.length !== SỐ_LÔ_MỖI_TỈNH) continue
    const ngày_xổ = phân_tích_ngày(ngày)
    const mã_tuần = lấy_chủ_nhật_đầu_tuần(ngày_xổ).getTime()
    if (!các_tuần.has(mã_tuần)) các_tuần.set(mã_tuần, new Map())
    // khóa theo tên + thứ vì TP.HCM quay cả thứ 2 và thứ 7
    các_tuần.get(mã_tuần)!.set(`${tên}|${ngày_xổ.getDay()}`, { ngày, các_lô })
  }
  return [...các_tuần.entries()]
    .sort(([a], [b]) => b - a)
    .map(([mã_tuần, bản_ghi]) => ({
      nhãn: định_dạng_ngày(new Date(mã_tuần)),
      các_tỉnh: DANH_SÁCH_TỈNH.map(({ tên, thứ }) => {
        const kết_quả = bản_ghi.get(`${tên}|${thứ}`)
        return {
          tên,
          thứ,
          ngày: kết_quả?.ngày ?? '',
          hai_số_cuối: kết_quả ? kết_quả.các_lô.map((lô) => lô.slice(-2)) : [],
        }
      }),
    }))
}
