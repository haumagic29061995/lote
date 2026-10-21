import type { Đối_Tượng_Xổ_Số } from '@/types/lote'

// Dùng database riêng, không đụng đến 'DữLiệuLặpLại' của indexeddb-service
const TÊN_CƠ_SỞ_DỮ_LIỆU = 'BộNhớĐệmDựĐoán'
const TÊN_KHO_DỮ_LIỆU = 'bộ_nhớ_đệm'

export type Dự_Đoán_Đã_Lưu = {
  dấu_vân_tay: string
  dự_đoán_ds_xuất_hiện: string[][][]
  vị_trí_ds_xuất_hiện: number[][][]
}

// Bộ vé phủ đã tạo, lưu để sau này đối chiếu với kết quả thật khi có
export const TIỀN_TỐ_BỘ_VÉ_PHỦ = 'bộ_vé_phủ|'

export type Bộ_Vé_Phủ_Đã_Lưu = {
  loại_xổ_số: number
  ngày_cơ_sở: string // ngày kỳ mới nhất trong dữ liệu lúc tạo (DD/MM/YYYY), cũng là seed
  ngày_dự_đoán: string // ngày kỳ tiếp theo mà bộ vé dành cho (DD/MM/YYYY)
  thời_điểm_tạo: number
  nhóm_số: number[]
  mức_đảm_bảo: number
  số_vé_tối_thiểu: number
  vé: number[][]
}

// Vé tạo từ danh sách xuất hiện của kỳ mới nhất (công thức cố định), lưu để đối chiếu sau
export const TIỀN_TỐ_VÉ_TỪ_DANH_SÁCH = 'vé_từ_danh_sách|'

export type Vé_Từ_Danh_Sách_Đã_Lưu = {
  loại_xổ_số: number
  ngày_cơ_sở: string // ngày kỳ mới nhất trong dữ liệu lúc tạo (DD/MM/YYYY)
  ngày_dự_đoán: string // ngày kỳ tiếp theo mà bộ vé dành cho (DD/MM/YYYY)
  thời_điểm_tạo: number
  chỉ_số_danh_sách: number
  vé: string[][]
}

// Vé mục tiêu (vé kỳ tới theo chiến lược), lưu để đối chiếu sau
export const TIỀN_TỐ_VÉ_MỤC_TIÊU = 'vé_mục_tiêu|'

export type Vé_Mục_Tiêu_Đã_Lưu = {
  loại_xổ_số: number
  ngày_cơ_sở: string // ngày kỳ mới nhất trong dữ liệu lúc tạo (DD/MM/YYYY), cũng là seed
  ngày_dự_đoán: string // ngày kỳ tiếp theo mà bộ vé dành cho (DD/MM/YYYY)
  thời_điểm_tạo: number
  chiến_lược: string
  vé: string[][]
}

function mở_cơ_sở_dữ_liệu(): Promise<IDBDatabase> {
  return new Promise((giải_quyết, từ_chối) => {
    const yêu_cầu = indexedDB.open(TÊN_CƠ_SỞ_DỮ_LIỆU, 1)
    yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
    yêu_cầu.onsuccess = () => giải_quyết(yêu_cầu.result)
    yêu_cầu.onupgradeneeded = () => {
      if (!yêu_cầu.result.objectStoreNames.contains(TÊN_KHO_DỮ_LIỆU)) {
        yêu_cầu.result.createObjectStore(TÊN_KHO_DỮ_LIỆU)
      }
    }
  })
}

// Lỗi IndexedDB (bị chặn, hết dung lượng...) chỉ làm mất cache, không được làm hỏng trang
export async function đọc_bộ_nhớ_đệm<T>(khóa: string): Promise<T | undefined> {
  try {
    const cơ_sở = await mở_cơ_sở_dữ_liệu()
    try {
      return await new Promise<T | undefined>((giải_quyết, từ_chối) => {
        const yêu_cầu = cơ_sở.transaction(TÊN_KHO_DỮ_LIỆU, 'readonly').objectStore(TÊN_KHO_DỮ_LIỆU).get(khóa)
        yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
        yêu_cầu.onsuccess = () => giải_quyết(yêu_cầu.result)
      })
    } finally {
      cơ_sở.close()
    }
  } catch (lỗi) {
    console.warn('Không đọc được bộ nhớ đệm:', lỗi)
    return undefined
  }
}

// Lấy mọi bản ghi có khóa bắt đầu bằng `tiền_tố`
export async function liệt_kê_bộ_nhớ_đệm_theo_tiền_tố<T>(
  tiền_tố: string,
): Promise<Array<{ khóa: string; giá_trị: T }>> {
  try {
    const cơ_sở = await mở_cơ_sở_dữ_liệu()
    try {
      return await new Promise<Array<{ khóa: string; giá_trị: T }>>((giải_quyết, từ_chối) => {
        const kho = cơ_sở.transaction(TÊN_KHO_DỮ_LIỆU, 'readonly').objectStore(TÊN_KHO_DỮ_LIỆU)
        const phạm_vi = IDBKeyRange.bound(tiền_tố, tiền_tố + '\uffff')
        const kết_quả: Array<{ khóa: string; giá_trị: T }> = []
        const yêu_cầu = kho.openCursor(phạm_vi)
        yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
        yêu_cầu.onsuccess = () => {
          const con_trỏ = yêu_cầu.result
          if (!con_trỏ) return giải_quyết(kết_quả)
          kết_quả.push({ khóa: String(con_trỏ.key), giá_trị: con_trỏ.value })
          con_trỏ.continue()
        }
      })
    } finally {
      cơ_sở.close()
    }
  } catch (lỗi) {
    console.warn('Không đọc được bộ nhớ đệm:', lỗi)
    return []
  }
}

export async function ghi_bộ_nhớ_đệm<T>(khóa: string, giá_trị: T): Promise<void> {
  try {
    const cơ_sở = await mở_cơ_sở_dữ_liệu()
    try {
      await new Promise<void>((giải_quyết, từ_chối) => {
        const giao_dịch = cơ_sở.transaction(TÊN_KHO_DỮ_LIỆU, 'readwrite')
        giao_dịch.objectStore(TÊN_KHO_DỮ_LIỆU).put(giá_trị, khóa)
        giao_dịch.oncomplete = () => giải_quyết()
        giao_dịch.onerror = () => từ_chối(giao_dịch.error)
        giao_dịch.onabort = () => từ_chối(giao_dịch.error)
      })
    } finally {
      cơ_sở.close()
    }
  } catch (lỗi) {
    console.warn('Không ghi được bộ nhớ đệm:', lỗi)
  }
}

/**
 * Dấu vân tay của dữ liệu đầu vào: đổi bất kỳ kỳ nào trong 2 danh sách (hoặc tham số) là cache hết hạn.
 * Danh sách dự đoán của một kỳ phụ thuộc vào cả 2 danh sách nên phải băm cả hai.
 */
export function tạo_dấu_vân_tay(
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  danh_sách_dữ_liệu_khác: Array<Đối_Tượng_Xổ_Số>,
  tham_số: string,
): string {
  let băm = 5381
  const trộn = (chuỗi: string) => {
    for (let i = 0; i < chuỗi.length; i++) {
      băm = ((băm << 5) + băm + chuỗi.charCodeAt(i)) | 0
    }
  }
  trộn(tham_số)
  for (const danh_sách of [danh_sách_dữ_liệu, danh_sách_dữ_liệu_khác]) {
    trộn(`|${danh_sách.length}|`)
    for (const dữ_liệu of danh_sách) {
      trộn(`${dữ_liệu.ngày_xổ_số}:${dữ_liệu.kết_quả_xổ_số.join('')};`)
    }
  }
  return `${tham_số}#${băm >>> 0}`
}
