const SỐ_LẦN_THỬ_TỐI_ĐA = 3
const THỜI_GIAN_CHỜ_MỖI_LẦN = 8000
const SỐ_KỲ_TỐI_THIỂU = 100
const SỐ_CHỮ_SỐ_KẾT_QUẢ = 12 // 6 số, mỗi số 2 chữ số

export type Dữ_Liệu_Csv_Đã_Tải = {
  csv: string
  số_kỳ: number
  ngày_mới_nhất: string
  // bất thường không làm dữ liệu vô dụng nhưng nên sửa trong sheet (ngày gõ thiếu chữ số, sai thứ tự ngày)
  cảnh_báo: string[]
}

/**
 * Kiểm tra và chuẩn hóa nội dung CSV (cặp dòng: "ngày, mã kỳ" rồi "kết quả").
 * Google Sheets hay làm mất số 0 đầu của chuỗi kết quả (092026353638 thành 92026353638) nên thêm lại cho đủ 12 chữ số.
 * Lỗi (ví dụ trang HTML báo lỗi thay vì CSV, số ngoài phạm vi, kỳ trùng số) thì ném Error để dùng dữ liệu dự phòng.
 * Ngày sai định dạng nhẹ (thiếu số 0, không giảm dần) chỉ ghi vào `cảnh_báo`.
 */
export function chuẩn_hóa_và_kiểm_tra_csv(csv: string, tổng_số: number): Dữ_Liệu_Csv_Đã_Tải {
  const các_dòng = csv.split(/\r?\n/)
  while (các_dòng.length > 0 && các_dòng[các_dòng.length - 1].trim() === '') các_dòng.pop()

  if (các_dòng.length % 2 !== 0) throw new Error('số dòng lẻ, thiếu dòng kết quả')
  if (các_dòng.length / 2 < SỐ_KỲ_TỐI_THIỂU) {
    throw new Error(`chỉ có ${các_dòng.length / 2} kỳ, ít hơn ${SỐ_KỲ_TỐI_THIỂU}`)
  }

  const cảnh_báo: string[] = []
  let ngày_trước: number | undefined

  for (let i = 0; i < các_dòng.length; i += 2) {
    const ngày_khớp = các_dòng[i].trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/)
    if (!ngày_khớp) throw new Error(`dòng ${i + 1} không bắt đầu bằng ngày dạng DD/MM/YYYY`)

    const [ngày_chữ, ngày, tháng, năm] = ngày_khớp
    const mã_kỳ = các_dòng[i].split(/[\t,]/)[1]?.trim()
    if (ngày.length < 2 || tháng.length < 2) {
      cảnh_báo.push(`dòng ${i + 1} (kỳ ${mã_kỳ}): ngày "${ngày_chữ}" không đủ 2 chữ số, có thể gõ thiếu`)
    }
    const thời_điểm = Date.UTC(Number(năm), Number(tháng) - 1, Number(ngày))
    if (ngày_trước !== undefined && thời_điểm >= ngày_trước) {
      cảnh_báo.push(`dòng ${i + 1} (kỳ ${mã_kỳ}): ngày "${ngày_chữ}" không nhỏ hơn ngày của kỳ ngay trước đó`)
    }
    ngày_trước = thời_điểm

    const kết_quả_gốc = các_dòng[i + 1].trim().match(/^\d+/)?.[0]
    if (!kết_quả_gốc) throw new Error(`dòng ${i + 2} không có chuỗi kết quả`)
    const kết_quả = kết_quả_gốc.padStart(SỐ_CHỮ_SỐ_KẾT_QUẢ, '0')
    if (kết_quả.length !== SỐ_CHỮ_SỐ_KẾT_QUẢ) throw new Error(`dòng ${i + 2}: kết quả sai độ dài`)

    const các_số = kết_quả.match(/.{2}/g)!.map(Number)
    if (new Set(các_số).size !== 6 || các_số.some((số) => số < 1 || số > tổng_số)) {
      throw new Error(`dòng ${i + 2}: kết quả ${kết_quả} không hợp lệ cho 6/${tổng_số}`)
    }
    các_dòng[i + 1] = các_dòng[i + 1].trim().replace(/^\d+/, kết_quả)
  }

  return {
    csv: các_dòng.join('\n'),
    số_kỳ: các_dòng.length / 2,
    ngày_mới_nhất: các_dòng[0].trim().slice(0, 10),
    cảnh_báo,
  }
}

const chờ = (mili_giây: number) => new Promise((giải_quyết) => setTimeout(giải_quyết, mili_giây))

/**
 * Tải CSV từ link, thử lại khi lỗi mạng (Google thỉnh thoảng ngắt kết nối ở lần đầu).
 * Hết số lần thử vẫn lỗi thì ném lỗi cuối cùng.
 */
export async function tải_csv_từ_link(link: string, tổng_số: number): Promise<Dữ_Liệu_Csv_Đã_Tải> {
  let lỗi_cuối: unknown
  for (let lần_thử = 1; lần_thử <= SỐ_LẦN_THỬ_TỐI_ĐA; lần_thử++) {
    const bộ_hủy = new AbortController()
    const hẹn_giờ = setTimeout(() => bộ_hủy.abort(), THỜI_GIAN_CHỜ_MỖI_LẦN)
    try {
      const phản_hồi = await fetch(link, { cache: 'no-store', signal: bộ_hủy.signal })
      if (!phản_hồi.ok) throw new Error(`HTTP ${phản_hồi.status}`)
      return chuẩn_hóa_và_kiểm_tra_csv(await phản_hồi.text(), tổng_số)
    } catch (lỗi) {
      lỗi_cuối = lỗi
      if (lần_thử < SỐ_LẦN_THỬ_TỐI_ĐA) await chờ(500 * lần_thử)
    } finally {
      clearTimeout(hẹn_giờ)
    }
  }
  throw lỗi_cuối
}
