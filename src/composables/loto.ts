const SỐ_LẦN_THỬ_TỐI_ĐA = 3
const THỜI_GIAN_CHỜ_MỖI_LẦN = 8000

export type Kết_Quả_Loto = 'có' | 'không' | ''

export type Dòng_Loto = {
  ngày: string // DD/MM/YYYY
  thời_điểm: number // dùng để sắp xếp
  số: string // 2 chữ số, ví dụ "07"
  kết_quả: Kết_Quả_Loto
}

/**
 * Đổi link Google Sheet thành link CSV tải được từ trình duyệt.
 * - Link "Publish to web" (có output=csv) giữ nguyên.
 * - Link xuất bản dạng /pub khác thì thêm output=csv.
 * - Link chia sẻ thường (.../d/ID/edit?gid=...) đổi sang gviz CSV, headers=0 vì sheet không có dòng tiêu đề.
 */
export function chuyển_link_sheet_thành_csv(link: string): string {
  const url = link.trim()
  if (/output=csv|format=csv|tqx=out:csv/.test(url)) return url

  const gid = /[#&?]gid=(\d+)/.exec(url)?.[1]
  const khóa_xuất_bản = /\/spreadsheets\/d\/e\/([\w-]+)/.exec(url)?.[1]
  if (khóa_xuất_bản) {
    return `https://docs.google.com/spreadsheets/d/e/${khóa_xuất_bản}/pub?output=csv${gid ? `&gid=${gid}&single=true` : ''}`
  }

  const mã_sheet = /\/spreadsheets\/d\/([\w-]+)/.exec(url)?.[1]
  if (!mã_sheet) throw new Error('không nhận ra link Google Sheet')
  return `https://docs.google.com/spreadsheets/d/${mã_sheet}/gviz/tq?tqx=out:csv&headers=0${gid ? `&gid=${gid}` : ''}`
}

/** Tách CSV có hỗ trợ ô trong dấu nháy kép (gviz bọc mọi ô trong nháy kép). */
export function tách_csv(văn_bản: string): string[][] {
  const các_hàng: string[][] = []
  let hàng: string[] = []
  let ô = ''
  let trong_nháy = false

  for (let i = 0; i < văn_bản.length; i++) {
    const ký_tự = văn_bản[i]
    if (trong_nháy) {
      if (ký_tự === '"') {
        if (văn_bản[i + 1] === '"') {
          ô += '"'
          i++
        } else {
          trong_nháy = false
        }
      } else {
        ô += ký_tự
      }
    } else if (ký_tự === '"') {
      trong_nháy = true
    } else if (ký_tự === ',') {
      hàng.push(ô)
      ô = ''
    } else if (ký_tự === '\n' || ký_tự === '\r') {
      if (ký_tự === '\r' && văn_bản[i + 1] === '\n') i++
      hàng.push(ô)
      các_hàng.push(hàng)
      hàng = []
      ô = ''
    } else {
      ô += ký_tự
    }
  }
  if (ô !== '' || hàng.length > 0) {
    hàng.push(ô)
    các_hàng.push(hàng)
  }
  return các_hàng
}

/**
 * Đọc CSV 3 cột (ngày, số, kết quả có/không). Dòng không đúng định dạng (tiêu đề, dòng trống) bị bỏ qua.
 * Kết quả xếp mới nhất trước. Nếu nhận về trang HTML (sheet chưa chia sẻ) hoặc không có dòng nào hợp lệ thì ném Error.
 */
export function đọc_danh_sách_loto(csv: string): Dòng_Loto[] {
  if (/^\s*</.test(csv)) throw new Error('nhận về trang web thay vì CSV, kiểm tra sheet đã chia sẻ/xuất bản chưa')

  const kết_quả: Dòng_Loto[] = []
  for (const hàng of tách_csv(csv)) {
    const ngày_khớp = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((hàng[0] ?? '').trim())
    const số_gốc = (hàng[1] ?? '').trim()
    if (!ngày_khớp || !/^\d{1,2}$/.test(số_gốc)) continue

    const [, ngày, tháng, năm] = ngày_khớp
    const chữ = (hàng[2] ?? '').trim().normalize('NFC').toLowerCase()
    kết_quả.push({
      ngày: `${ngày.padStart(2, '0')}/${tháng.padStart(2, '0')}/${năm}`,
      thời_điểm: Date.UTC(Number(năm), Number(tháng) - 1, Number(ngày)),
      số: số_gốc.padStart(2, '0'),
      kết_quả: chữ === 'có' ? 'có' : chữ === 'không' ? 'không' : '',
    })
  }
  if (kết_quả.length === 0) throw new Error('không có dòng hợp lệ (ngày, số, kết quả)')
  return kết_quả.sort((a, b) => b.thời_điểm - a.thời_điểm)
}

const chờ = (mili_giây: number) => new Promise((giải_quyết) => setTimeout(giải_quyết, mili_giây))

/** Tải danh sách loto từ link Google Sheet, thử lại khi lỗi mạng. */
export async function tải_danh_sách_loto(link: string): Promise<Dòng_Loto[]> {
  const link_csv = chuyển_link_sheet_thành_csv(link)
  let lỗi_cuối: unknown
  for (let lần_thử = 1; lần_thử <= SỐ_LẦN_THỬ_TỐI_ĐA; lần_thử++) {
    const bộ_hủy = new AbortController()
    const hẹn_giờ = setTimeout(() => bộ_hủy.abort(), THỜI_GIAN_CHỜ_MỖI_LẦN)
    try {
      const phản_hồi = await fetch(link_csv, { cache: 'no-store', signal: bộ_hủy.signal })
      if (!phản_hồi.ok) throw new Error(`HTTP ${phản_hồi.status}`)
      return đọc_danh_sách_loto(await phản_hồi.text())
    } catch (lỗi) {
      lỗi_cuối = lỗi
      if (lần_thử < SỐ_LẦN_THỬ_TỐI_ĐA) await chờ(500 * lần_thử)
    } finally {
      clearTimeout(hẹn_giờ)
    }
  }
  throw lỗi_cuối
}
