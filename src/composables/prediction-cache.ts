import type { Đối_Tượng_Xổ_Số } from '@/types/lote'

// Dùng database riêng, không đụng đến 'DữLiệuLặpLại' của indexeddb-service
const TÊN_CƠ_SỞ_DỮ_LIỆU = 'BộNhớĐệmDựĐoán'
const TÊN_KHO_DỮ_LIỆU = 'bộ_nhớ_đệm'

export type Dự_Đoán_Đã_Lưu = {
  dấu_vân_tay: string
  dự_đoán_ds_xuất_hiện: string[][][]
  vị_trí_ds_xuất_hiện: number[][][]
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
