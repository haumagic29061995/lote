import csv_dữ_liệu_loto from '@/assets/csv/loto.csv?raw'

import { DANH_SÁCH_TỈNH, SỐ_LÔ_MỖI_TỈNH, URL_GOOGLE_SHEET_LOTO } from '@/constants/loto'

export type Kết_Quả_Loto_Tỉnh = {
  tên: string
  thứ: number
  ngày: string
  đặc_biệt: string // giải đặc biệt đầy đủ 6 chữ số, rỗng nếu chưa có dữ liệu
  giải_tám: string // giải 8 (2 chữ số), rỗng nếu chưa có dữ liệu
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

// gom theo tuần (mới nhất trước), mỗi tuần 22 tỉnh; nhận dòng phân cách bằng tab hoặc dấu phẩy
export function phân_tích_dữ_liệu_loto(nội_dung: string): {
  các_tuần: Tuần_Loto[]
  số_dòng: number
} {
  const các_tuần = new Map<number, Map<string, { ngày: string; các_lô: string[] }>>()
  let số_dòng = 0
  for (const dòng of nội_dung.split('\n')) {
    if (!dòng.trim() || dòng.startsWith('#')) continue
    const [tên, ngày, kết_quả = ''] = dòng.split(/[\t,]/).map((mục) => mục.trim())
    const các_lô = kết_quả.split(/\s+/).filter((lô) => lô !== '')
    if (các_lô.length !== SỐ_LÔ_MỖI_TỈNH || !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(ngày ?? '')) continue
    số_dòng++
    const ngày_xổ = phân_tích_ngày(ngày)
    const mã_tuần = lấy_chủ_nhật_đầu_tuần(ngày_xổ).getTime()
    if (!các_tuần.has(mã_tuần)) các_tuần.set(mã_tuần, new Map())
    // khóa theo tên + thứ vì TP.HCM quay cả thứ 2 và thứ 7
    các_tuần.get(mã_tuần)!.set(`${tên}|${ngày_xổ.getDay()}`, { ngày, các_lô })
  }
  const kết_quả = [...các_tuần.entries()]
    .sort(([a], [b]) => b - a)
    .map(([mã_tuần, bản_ghi]) => ({
      nhãn: định_dạng_ngày(new Date(mã_tuần)),
      các_tỉnh: DANH_SÁCH_TỈNH.map(({ tên, thứ }) => {
        const kết_quả = bản_ghi.get(`${tên}|${thứ}`)
        return {
          tên,
          thứ,
          ngày: kết_quả?.ngày ?? '',
          đặc_biệt: kết_quả?.các_lô[0] ?? '',
          giải_tám: kết_quả?.các_lô[SỐ_LÔ_MỖI_TỈNH - 1] ?? '',
          hai_số_cuối: kết_quả ? kết_quả.các_lô.map((lô) => lô.slice(-2)) : [],
        }
      }),
    }))
  return { các_tuần: kết_quả, số_dòng }
}

// dữ liệu có sẵn trong project, dùng làm dự phòng
export function lấy_dữ_liệu_loto(): Tuần_Loto[] {
  return phân_tích_dữ_liệu_loto(csv_dữ_liệu_loto).các_tuần
}

// tải dữ liệu mới nhất từ Google Sheet; ném lỗi nếu không tải được hoặc không có dòng hợp lệ
export async function tải_dữ_liệu_loto_từ_sheet(): Promise<Tuần_Loto[]> {
  // giới hạn thời gian chờ để chuyển sang dữ liệu có sẵn thay vì treo ở trạng thái đang tải
  const phản_hồi = await fetch(URL_GOOGLE_SHEET_LOTO, { signal: AbortSignal.timeout(10000) })
  if (!phản_hồi.ok) throw new Error(`Không tải được Google Sheet (${phản_hồi.status})`)
  const { các_tuần, số_dòng } = phân_tích_dữ_liệu_loto(await phản_hồi.text())
  if (số_dòng === 0) throw new Error('Google Sheet không có dòng dữ liệu hợp lệ')
  return các_tuần
}
