import moment from 'moment'

const ĐỊNH_DẠNG_NGÀY = 'DD/MM/YYYY'

// bản ghi cũ lưu ngày dạng số mili giây, bản ghi mới lưu dạng chuỗi DD/MM/YYYY
function chuẩn_hóa_ngày(giá_trị: number | string): string {
  return typeof giá_trị === 'number' ? moment(giá_trị).format(ĐỊNH_DẠNG_NGÀY) : giá_trị
}

export type Vị_Trí_Lặp_Lại = {
  ds_vị_trí: number[]
  tổng_xuất_hiện: number
  trùng: number
  danh_sách: number[]
  xuất_hiện: number[]
}

export type Bộ_Lưu_Trữ = {
  id: string
  tên: string
  ngày_tạo: string // DD/MM/YYYY
  ngày_cập_nhật: string // DD/MM/YYYY
  dữ_liệu: Vị_Trí_Lặp_Lại[]
  kích_thước: number
}

class DịchVụIndexedDB {
  private tên_cơ_sở_dữ_liệu = 'DữLiệuLặpLại'
  private phiên_bản = 1
  private tên_kho_dữ_liệu = 'bộ_lưu_trữ'
  private cơ_sở_dữ_liệu: IDBDatabase | null = null
  private đã_chuyển_định_dạng_ngày = false

  /**
   * Khởi tạo IndexedDB
   */
  async khởi_tạo(): Promise<void> {
    return new Promise((giải_quyết, từ_chối) => {
      const yêu_cầu = indexedDB.open(this.tên_cơ_sở_dữ_liệu, this.phiên_bản)

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => {
        this.cơ_sở_dữ_liệu = yêu_cầu.result
        this.chuyển_định_dạng_ngày_bản_ghi_cũ().then(giải_quyết, từ_chối)
      }

      yêu_cầu.onupgradeneeded = (sự_kiện) => {
        const cơ_sở = (sự_kiện.target as IDBOpenDBRequest).result
        if (!cơ_sở.objectStoreNames.contains(this.tên_kho_dữ_liệu)) {
          const kho = cơ_sở.createObjectStore(this.tên_kho_dữ_liệu, { keyPath: 'id' })
          kho.createIndex('tên', 'tên', { unique: false })
          kho.createIndex('ngày_cập_nhật', 'ngày_cập_nhật', { unique: false })
        }
      }
    })
  }

  /**
   * Đổi các bản ghi cũ có ngày dạng số sang DD/MM/YYYY (chỉ chạy một lần mỗi lần tải trang)
   */
  private async chuyển_định_dạng_ngày_bản_ghi_cũ(): Promise<void> {
    if (this.đã_chuyển_định_dạng_ngày || !this.cơ_sở_dữ_liệu) return
    this.đã_chuyển_định_dạng_ngày = true

    await new Promise<void>((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readwrite')
      const yêu_cầu = giao_dịch.objectStore(this.tên_kho_dữ_liệu).openCursor()

      yêu_cầu.onsuccess = () => {
        const con_trỏ = yêu_cầu.result
        if (!con_trỏ) return
        const bộ_lưu_trữ = con_trỏ.value
        if (typeof bộ_lưu_trữ.ngày_tạo === 'number' || typeof bộ_lưu_trữ.ngày_cập_nhật === 'number') {
          bộ_lưu_trữ.ngày_tạo = chuẩn_hóa_ngày(bộ_lưu_trữ.ngày_tạo)
          bộ_lưu_trữ.ngày_cập_nhật = chuẩn_hóa_ngày(bộ_lưu_trữ.ngày_cập_nhật)
          con_trỏ.update(bộ_lưu_trữ)
        }
        con_trỏ.continue()
      }
      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      giao_dịch.oncomplete = () => giải_quyết()
      giao_dịch.onerror = () => từ_chối(giao_dịch.error)
    })
  }

  /**
   * Lưu dữ liệu lặp lại
   */
  async lưu_dữ_liệu(tên: string, dữ_liệu: Vị_Trí_Lặp_Lại[]): Promise<string> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    const id = `${tên}_${Date.now()}`
    const bộ_lưu_trữ: Bộ_Lưu_Trữ = {
      id,
      tên,
      ngày_tạo: moment().format(ĐỊNH_DẠNG_NGÀY),
      ngày_cập_nhật: moment().format(ĐỊNH_DẠNG_NGÀY),
      dữ_liệu,
      kích_thước: JSON.stringify(dữ_liệu).length,
    }

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readwrite')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const yêu_cầu = kho.add(bộ_lưu_trữ)

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => giải_quyết(id)
    })
  }

  /**
   * Lấy dữ liệu theo ID
   */
  async lấy_dữ_liệu_theo_id(id: string): Promise<Vị_Trí_Lặp_Lại[] | null> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readonly')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const yêu_cầu = kho.get(id)

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => {
        const kết_quả = yêu_cầu.result
        giải_quyết(kết_quả ? kết_quả.dữ_liệu : null)
      }
    })
  }

  /**
   * Lấy tất cả dữ liệu lưu trữ
   */
  async lấy_tất_cả(): Promise<Bộ_Lưu_Trữ[]> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readonly')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const yêu_cầu = kho.getAll()

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => giải_quyết(yêu_cầu.result)
    })
  }

  /**
   * Lấy dữ liệu theo tên
   */
  async lấy_dữ_liệu_theo_tên(tên: string): Promise<Bộ_Lưu_Trữ[]> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readonly')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const chỉ_số = kho.index('tên')
      const yêu_cầu = chỉ_số.getAll(tên)

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => giải_quyết(yêu_cầu.result)
    })
  }

  /**
   * Cập nhật dữ liệu
   */
  async cập_nhật_dữ_liệu(id: string, dữ_liệu: Vị_Trí_Lặp_Lại[]): Promise<void> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readwrite')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const yêu_cầu = kho.get(id)

      yêu_cầu.onsuccess = () => {
        const bộ_lưu_trữ = yêu_cầu.result
        if (bộ_lưu_trữ) {
          bộ_lưu_trữ.dữ_liệu = dữ_liệu
          bộ_lưu_trữ.ngày_cập_nhật = moment().format(ĐỊNH_DẠNG_NGÀY)
          bộ_lưu_trữ.kích_thước = JSON.stringify(dữ_liệu).length

          const cập_nhật = kho.put(bộ_lưu_trữ)
          cập_nhật.onsuccess = () => giải_quyết()
          cập_nhật.onerror = () => từ_chối(cập_nhật.error)
        } else {
          từ_chối(new Error('Không tìm thấy dữ liệu'))
        }
      }
      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
    })
  }

  /**
   * Xóa dữ liệu
   */
  async xóa_dữ_liệu(id: string): Promise<void> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readwrite')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const yêu_cầu = kho.delete(id)

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => giải_quyết()
    })
  }

  /**
   * Xóa tất cả dữ liệu
   */
  async xóa_tất_cả(): Promise<void> {
    if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

    return new Promise((giải_quyết, từ_chối) => {
      const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readwrite')
      const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
      const yêu_cầu = kho.clear()

      yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
      yêu_cầu.onsuccess = () => giải_quyết()
    })
  }

  /**
   * Tìm kiếm theo ngày cập nhật, `từ_ngày` và `đến_ngày` dạng DD/MM/YYYY (gồm cả hai đầu)
   * Chuỗi DD/MM/YYYY không sắp xếp đúng theo thời gian nên không dùng được khoảng khóa của IndexedDB.
   */
  async tìm_kiếm_theo_ngày(từ_ngày: string, đến_ngày: string): Promise<Bộ_Lưu_Trữ[]> {
    const tất_cả = await this.lấy_tất_cả()
    const từ = moment(từ_ngày, ĐỊNH_DẠNG_NGÀY)
    const đến = moment(đến_ngày, ĐỊNH_DẠNG_NGÀY)
    return tất_cả.filter((bộ_lưu_trữ) =>
      moment(chuẩn_hóa_ngày(bộ_lưu_trữ.ngày_cập_nhật), ĐỊNH_DẠNG_NGÀY).isBetween(từ, đến, 'day', '[]'),
    )
  }

  /**
   * Lấy thống kê lưu trữ
   */
  async lấy_thống_kê(): Promise<{
    tổng_bộ_lưu_trữ: number
    tổng_kích_thước: number
    lớn_nhất: Bộ_Lưu_Trữ | null
  }> {
    const tất_cả = await this.lấy_tất_cả()
    const tổng_kích_thước = tất_cả.reduce((sum, item) => sum + item.kích_thước, 0)
    const lớn_nhất = tất_cả.reduce(
      (max, item) => (item.kích_thước > (max?.kích_thước || 0) ? item : max),
      null as Bộ_Lưu_Trữ | null,
    )

    return {
      tổng_bộ_lưu_trữ: tất_cả.length,
      tổng_kích_thước,
      lớn_nhất,
    }
  }

  /**
   * Xuất dữ liệu (Backup)
   */
  async xuất_dữ_liệu(): Promise<string> {
    const tất_cả = await this.lấy_tất_cả()
    return JSON.stringify(tất_cả, null, 2)
  }

  /**
   * Nhập dữ liệu (Restore)
   */
  async nhập_dữ_liệu(chuỗi_json: string): Promise<number> {
    const dữ_liệu: Bộ_Lưu_Trữ[] = JSON.parse(chuỗi_json)
    let đếm = 0

    for (const bộ_lưu_trữ of dữ_liệu) {
      try {
        if (!this.cơ_sở_dữ_liệu) throw new Error('IndexedDB chưa khởi tạo')

        await new Promise<void>((giải_quyết, từ_chối) => {
          const giao_dịch = this.cơ_sở_dữ_liệu!.transaction([this.tên_kho_dữ_liệu], 'readwrite')
          const kho = giao_dịch.objectStore(this.tên_kho_dữ_liệu)
          const yêu_cầu = kho.add({
            ...bộ_lưu_trữ,
            ngày_tạo: chuẩn_hóa_ngày(bộ_lưu_trữ.ngày_tạo),
            ngày_cập_nhật: chuẩn_hóa_ngày(bộ_lưu_trữ.ngày_cập_nhật),
          })

          yêu_cầu.onsuccess = () => {
            đếm++
            giải_quyết()
          }
          yêu_cầu.onerror = () => từ_chối(yêu_cầu.error)
        })
      } catch {
        console.warn(`Lỗi nhập dữ liệu: ${bộ_lưu_trữ.id}`)
      }
    }

    return đếm
  }
}

// Export singleton
const dịch_vụ_indexeddb = new DịchVụIndexedDB()

export { DịchVụIndexedDB, dịch_vụ_indexeddb }
