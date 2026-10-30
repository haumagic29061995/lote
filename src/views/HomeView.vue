<script setup lang="ts">
import { ref, h, type Ref } from 'vue'
import moment from 'moment'

import { lấy_dữ_liệu_xổ_số_45, lấy_dữ_liệu_xổ_số_55, tạo_ds_xuất_hiện } from '@/composables/lote'

import { tạo_bộ_vé_phủ, tạo_seed_từ_chuỗi } from '@/composables/ticket-optimizer'
import {
  đánh_giá_bộ_vé,
  tạo_bộ_vị_trí_cố_định,
  tạo_vé_từ_danh_sách,
} from '@/composables/position-ticket'
import {
  CÁC_CHIẾN_LƯỢC,
  SỐ_VÉ_MỤC_TIÊU,
  tạo_bộ_sinh_ngẫu_nhiên,
  tạo_danh_sách_vé,
  thống_kê_số,
  xác_suất_một_vé,
} from '@/composables/ticket-portfolio'
import {
  đọc_bộ_nhớ_đệm,
  ghi_bộ_nhớ_đệm,
  xóa_toàn_bộ_bộ_nhớ_đệm,
  TIỀN_TỐ_DS_DỰ_ĐOÁN,
  liệt_kê_bộ_nhớ_đệm_theo_tiền_tố,
  tạo_dấu_vân_tay,
  TIỀN_TỐ_BỘ_VÉ_PHỦ,
  TIỀN_TỐ_VÉ_MỤC_TIÊU,
  TIỀN_TỐ_VÉ_TỪ_DANH_SÁCH,
  type Bộ_Vé_Phủ_Đã_Lưu,
  type Dự_Đoán_Đã_Lưu,
  type Vé_Mục_Tiêu_Đã_Lưu,
  type Vé_Từ_Danh_Sách_Đã_Lưu,
} from '@/composables/prediction-cache'
import { dịch_vụ_indexeddb, type Vị_Trí_Lặp_Lại } from '@/composables/indexeddb-service'

import { Đối_Tượng_Xổ_Số, type Loại_Dữ_Liệu_Xuât_Hiện } from '@/types/lote'

import { lấy_dấu_thời_gian_của_kỳ_sau, tạo_tùy_chọn_để_hiển_thị } from '@/utils'
import _ from 'lodash'

const màu_kết_quả_dự_đoán = ref<boolean>(true)
const màu_kết_quả_hiện_tại = ref<boolean>(true)

const LOTE_45_HẰNG_SỐ = 'lote_45'
const LOTE_55_HẰNG_SỐ = 'lote_55'

// số lượng số xuất hiện để một danh sách dự đoán được chấp nhận (xem tạo_ds_xuất_hiện)
const SỐ_XUẤT_HIỆN_45 = 40
const SỐ_XUẤT_HIỆN_55 = 46
// tăng số này khi đổi thuật toán tạo danh sách dự đoán để bỏ cache cũ trong IndexedDB
const PHIÊN_BẢN_BỘ_NHỚ_ĐỆM = 1

// Xoá cả danh sách dự đoán lẫn các bộ vé đã lưu để đối chiếu
async function xóa_hết_bộ_nhớ_đệm() {
  if (!window.confirm('Xoá hết bộ nhớ đệm (gồm cả các bộ vé đã lưu để đối chiếu)?')) return
  const thành_công = await xóa_toàn_bộ_bộ_nhớ_đệm()
  window.alert(thành_công ? 'Đã xoá hết bộ nhớ đệm' : 'Không xoá được bộ nhớ đệm')
}

function lấy_tên_lưu_trữ(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>): string {
  return danh_sách_dữ_liệu[0].loại_xổ_số === 45 ? LOTE_45_HẰNG_SỐ : LOTE_55_HẰNG_SỐ
}

//
// các biến không dùng ràng buộc hiển thị
//

const dữ_liệu_xổ_số_45: Array<Đối_Tượng_Xổ_Số> = lấy_dữ_liệu_xổ_số_45()
const dữ_liệu_xổ_số_55: Array<Đối_Tượng_Xổ_Số> = lấy_dữ_liệu_xổ_số_55()

const ngày_cuối_cùng_mở_xổ_số_45 = moment(dữ_liệu_xổ_số_45[0].ngày_xổ_số, 'DD/MM/YYYY')
const ngày_cuối_cùng_mở_xổ_số_55 = moment(dữ_liệu_xổ_số_55[0].ngày_xổ_số, 'DD/MM/YYYY')

const số_lượng_dữ_liệu_tối_đa_có_thể_hiển_thị = dữ_liệu_xổ_số_45.length
const mở_xổ_số_loại_tiếp_theo: number =
  ngày_cuối_cùng_mở_xổ_số_45 > ngày_cuối_cùng_mở_xổ_số_55 ? 55 : 45

const bù_trừ_cho_loại_xổ_số_45: number = mở_xổ_số_loại_tiếp_theo === 45 ? 0 : -1
const bù_trừ_cho_loại_xổ_số_55: number = mở_xổ_số_loại_tiếp_theo === 55 ? 0 : -1

//
// các biến dùng ràng buộc để hiển thị
//

const các_tùy_chọn_để_hiển_thị_dữ_liệu = ref<number[]>([])
const số_dữ_liệu_sẽ_được_hiển_thị = ref<number>(7)
const đơn_vị = ref<number>(1)
const đơn_vị_được_dự_đoán = ref<number>(0)
const có_hiển_thị_chi_tiết = ref<boolean>(false)

// bộ lọc bộ vị trí khi xem dự đoán; -1 là không lọc, hai điều kiện đặt cùng lúc thì chỉ cần thỏa một (or)
const SỐ_VỊ_TRÍ_MỖI_HÀNG = 6
const lọc_số_trùng_trong_cột = ref<number>(1)
const lọc_số_cùng_hàng = ref<number>(2)

// số vị trí nằm trong từng nhóm (cột hoặc hàng) có ít nhất 1 vị trí
function đếm_vị_trí_mỗi_nhóm(ds_vị_trí: number[], lấy_nhóm: (vị_trí: number) => number): number[] {
  const số_vị_trí_mỗi_nhóm = new Map<number, number>()
  ds_vị_trí.forEach((vị_trí) => {
    const nhóm = lấy_nhóm(vị_trí)
    số_vị_trí_mỗi_nhóm.set(nhóm, (số_vị_trí_mỗi_nhóm.get(nhóm) ?? 0) + 1)
  })
  return [...số_vị_trí_mỗi_nhóm.values()]
}

function qua_bộ_lọc_vị_trí(ds_vị_trí: number[]): boolean {
  const số_trùng_cột = Number(lọc_số_trùng_trong_cột.value)
  const số_cùng_hàng = Number(lọc_số_cùng_hàng.value)
  if (số_trùng_cột === -1 && số_cùng_hàng === -1) return true

  const đếm_theo_cột = đếm_vị_trí_mỗi_nhóm(ds_vị_trí, (vị_trí) => vị_trí % SỐ_VỊ_TRÍ_MỖI_HÀNG)
  const đếm_theo_hàng = đếm_vị_trí_mỗi_nhóm(ds_vị_trí, (vị_trí) =>
    Math.floor(vị_trí / SỐ_VỊ_TRÍ_MỖI_HÀNG),
  )

  return (
    // cột: ít nhất N cột có từ 2 số trở lên (3, 4 số trên cùng cột cũng tính), N tối đa 3 vì chỉ có 6 số
    (số_trùng_cột !== -1 && đếm_theo_cột.filter((số) => số >= 2).length >= số_trùng_cột) ||
    // hàng: mọi hàng đều có tối đa N số (nhỏ hơn hoặc bằng N)
    (số_cùng_hàng !== -1 && Math.max(...đếm_theo_hàng) <= số_cùng_hàng)
  )
}

const vị_trí_kỳ_tạo_vé = ref<number>(0)
const chỉ_số_ds_tạo_vé = ref<number>(0)
const số_vé_từ_danh_sách = ref<number>(3000)
const chiến_lược_vé = ref<string>('ngẫu_nhiên')
const kích_thước_nhóm_số = ref<number>(12)
const mức_đảm_bảo_trúng = ref<number>(3)
const vị_trí_kỳ_bộ_vé_phủ = ref<number>(0)
const số_vé_bộ_vé_phủ = ref<number>(15)
// '' là đối chiếu tất cả; các ngày dự đoán lấy từ những bộ vé phủ đã lưu trong IndexedDB
const ngày_dự_đoán_đối_chiếu = ref<string>('')
const các_ngày_dự_đoán_đã_lưu = ref<string[]>([])
// như trên nhưng cho các vé tạo từ danh sách xuất hiện
const ngày_đối_chiếu_vé_danh_sách = ref<string>('')
const các_ngày_vé_danh_sách_đã_lưu = ref<string[]>([])
// và cho vé mục tiêu (vé kỳ tới)
const ngày_đối_chiếu_vé_mục_tiêu = ref<string>('')
const các_ngày_vé_mục_tiêu_đã_lưu = ref<string[]>([])

const vị_trí_phân_tích = ref<number>(1)
const vị_trí_dự_đoán = ref<number>(2)
const danh_sách_dự_đoán = ref<number>(0)

const vị_trí_xem_số_lần_xuất_hiện = ref<number>(0)
const số_xuất_hiện_nhiều_lần = ref<number>(4)
const từ_vị_trí_số_xuất_hiện_nhiều_lần = ref<number>(1)
const chu_kỳ_số_xuất_hiện_nhiều_lần = ref<number>(10)

const danh_sách_dữ_liệu_hiển_thị_45 = ref<Array<Đối_Tượng_Xổ_Số>>()
const danh_sách_dữ_liệu_hiển_thị_55 = ref<Array<Đối_Tượng_Xổ_Số>>()

//
// chạy các hàm
//

chạy_chức_năng_chính(dữ_liệu_xổ_số_45, bù_trừ_cho_loại_xổ_số_45)
chạy_chức_năng_chính(dữ_liệu_xổ_số_55, bù_trừ_cho_loại_xổ_số_55)

async function chạy_chức_năng_chính(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>, offset: number = 0) {
  const danh_sách_dữ_liệu_45_hoặc_55 =
    danh_sách_dữ_liệu[0].loại_xổ_số === 45 ? dữ_liệu_xổ_số_55 : dữ_liệu_xổ_số_45

  for (let vị_trí_dữ_liệu = 0; vị_trí_dữ_liệu < danh_sách_dữ_liệu.length; vị_trí_dữ_liệu++) {
    const dữ_liệu_1 = danh_sách_dữ_liệu[vị_trí_dữ_liệu]
    const dữ_liệu_2 = danh_sách_dữ_liệu_45_hoặc_55?.[vị_trí_dữ_liệu + offset]

    // xữ lý dữ liệu xuất hiện
    xữ_lý_dữ_liệu_xuất_hiện(danh_sách_dữ_liệu, dữ_liệu_1, dữ_liệu_2, vị_trí_dữ_liệu)
  }
}

// danh sách dự đoán chỉ phụ thuộc vào dữ liệu CSV nên lưu vào IndexedDB, lần sau khỏi tính lại
async function chuẩn_bị_ds_dự_đoán() {
  const tham_số = `v${PHIÊN_BẢN_BỘ_NHỚ_ĐỆM}|45:${SỐ_XUẤT_HIỆN_45}|55:${SỐ_XUẤT_HIỆN_55}`

  for (const [danh_sách_dữ_liệu, danh_sách_dữ_liệu_khác] of [
    [dữ_liệu_xổ_số_45, dữ_liệu_xổ_số_55],
    [dữ_liệu_xổ_số_55, dữ_liệu_xổ_số_45],
  ]) {
    const loại_xổ_số = danh_sách_dữ_liệu[0].loại_xổ_số
    const khóa = `${TIỀN_TỐ_DS_DỰ_ĐOÁN}${loại_xổ_số}`
    const dấu_vân_tay = tạo_dấu_vân_tay(danh_sách_dữ_liệu, danh_sách_dữ_liệu_khác, tham_số)

    const đã_lưu = await đọc_bộ_nhớ_đệm<Dự_Đoán_Đã_Lưu>(khóa)
    if (
      đã_lưu?.dấu_vân_tay === dấu_vân_tay &&
      đã_lưu.dự_đoán_ds_xuất_hiện.length === danh_sách_dữ_liệu.length &&
      đã_lưu.vị_trí_ds_xuất_hiện.length === danh_sách_dữ_liệu.length
    ) {
      danh_sách_dữ_liệu.forEach((dữ_liệu, vị_trí) => {
        dữ_liệu.dự_đoán_ds_xuất_hiện = đã_lưu.dự_đoán_ds_xuất_hiện[vị_trí]
        dữ_liệu.vị_trí_ds_xuất_hiện = đã_lưu.vị_trí_ds_xuất_hiện[vị_trí]
      })
      console.log(`đã tải danh sách dự đoán ${loại_xổ_số} từ bộ nhớ đệm`)
      continue
    }

    danh_sách_dữ_liệu.forEach((dữ_liệu, vị_trí) => {
      tạo_ds_xuất_hiện_tại_vị_trí_chỉ_định(
        danh_sách_dữ_liệu,
        danh_sách_dữ_liệu_khác,
        dữ_liệu,
        vị_trí,
      )
    })
    await ghi_bộ_nhớ_đệm<Dự_Đoán_Đã_Lưu>(khóa, {
      dấu_vân_tay,
      dự_đoán_ds_xuất_hiện: danh_sách_dữ_liệu.map((dữ_liệu) => dữ_liệu.dự_đoán_ds_xuất_hiện),
      vị_trí_ds_xuất_hiện: danh_sách_dữ_liệu.map((dữ_liệu) => dữ_liệu.vị_trí_ds_xuất_hiện),
    })
    console.log(`đã tạo và lưu danh sách dự đoán ${loại_xổ_số} vào bộ nhớ đệm`)
  }
}

function xữ_lý_dữ_liệu_xuất_hiện(
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  dữ_liệu_1: Đối_Tượng_Xổ_Số,
  dữ_liệu_2: Đối_Tượng_Xổ_Số | undefined,
  vị_trí_dữ_liệu: number,
) {
  // xữ lý dữ liệu 1
  dữ_liệu_1.kết_quả_xổ_số.forEach((số: string) => {
    const vị_trí_từ_số_và_vị_trí_dữ_liệu: number = Number(số) + vị_trí_dữ_liệu
    const dữ_liệu_từ_vị_trí_mới: Đối_Tượng_Xổ_Số = danh_sách_dữ_liệu[vị_trí_từ_số_và_vị_trí_dữ_liệu]
    if (dữ_liệu_từ_vị_trí_mới) {
      dữ_liệu_1.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số)
      dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số.forEach((số2: string) => {
        dữ_liệu_1.tập_các_số_đã_xuất_hiện.add(số2)
        const dữ_liệu_tìm_thấy = dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(
          (mục) => mục.số_xuất_hiện === số2,
        )
        if (dữ_liệu_tìm_thấy) {
          dữ_liệu_tìm_thấy.tổng_xuất_hiện++
        } else {
          const dữ_liệu_xuất_hiện: Loại_Dữ_Liệu_Xuât_Hiện = {
            số_xuất_hiện: số2,
            tổng_xuất_hiện: 1,
            là_số_kết_quả: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.includes(số2) || false,
            là_số_jackpot_2: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.số_jacpot_2 === số2,
            là_số_trùng: dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(số2),
          }
          dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(dữ_liệu_xuất_hiện)
        }
      })
    }
  })

  // xữ lý dữ liệu 2
  if (dữ_liệu_2) {
    dữ_liệu_2.kết_quả_xổ_số
      .filter((số0) => !dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(số0))
      .forEach((số1: string) => {
        const vị_trí_từ_số_và_vị_trí_dữ_liệu: number = Number(số1) + vị_trí_dữ_liệu
        const dữ_liệu_từ_vị_trí_mới: Đối_Tượng_Xổ_Số =
          danh_sách_dữ_liệu[vị_trí_từ_số_và_vị_trí_dữ_liệu]
        if (dữ_liệu_từ_vị_trí_mới) {
          dữ_liệu_1.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(
            dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số,
          )
          dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số.forEach((số2: string) => {
            dữ_liệu_1.tập_các_số_đã_xuất_hiện.add(số2)
            const dữ_liệu_tìm_thấy = dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(
              (mục) => mục.số_xuất_hiện === số2,
            )
            if (dữ_liệu_tìm_thấy) {
              dữ_liệu_tìm_thấy.tổng_xuất_hiện++
            } else {
              const dữ_liệu_xuất_hiện: Loại_Dữ_Liệu_Xuât_Hiện = {
                số_xuất_hiện: số2,
                tổng_xuất_hiện: 1,
                là_số_kết_quả: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.includes(số2) || false,
                là_số_jackpot_2: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.số_jacpot_2 === số2,
                là_số_trùng: dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(số2),
              }
              dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(dữ_liệu_xuất_hiện)
            }
          })
        }
      })
  }

  // Số kết quả
  dữ_liệu_1.số_kết_quả_trong_các_số_đã_xuất_hiện =
    dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((num) =>
      dữ_liệu_1.tập_các_số_đã_xuất_hiện.has(num),
    ).length || 0
}

chuẩn_bị_ds_dự_đoán().then(() => {
  khởi_tạo_hiển_thị()
  khởi_tạo_in_nhật_ký()
})

function khởi_tạo_hiển_thị() {
  các_tùy_chọn_để_hiển_thị_dữ_liệu.value = tạo_tùy_chọn_để_hiển_thị(
    số_lượng_dữ_liệu_tối_đa_có_thể_hiển_thị,
  )
  danh_sách_dữ_liệu_hiển_thị_45.value = dữ_liệu_xổ_số_45
  danh_sách_dữ_liệu_hiển_thị_55.value = dữ_liệu_xổ_số_55
}

function khởi_tạo_in_nhật_ký() {
  console.log('danh sách dữ liệu 45 đã qua xữ lý: ', dữ_liệu_xổ_số_45)
  console.log('danh sách dữ liệu 55 đã qua xữ lý: ', dữ_liệu_xổ_số_55)
}

function hiển_thị_danh_sách_xuất_hiện(dữ_liệu: Đối_Tượng_Xổ_Số, vị_trí: number) {
  return h(
    'div',
    { style: { width: '220px', display: 'flex', flexWrap: 'wrap' } },
    dữ_liệu.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.map((dữ_liệu_xuất_hiện, vị_trí_xuất_hiện) =>
      h(
        'div',
        { key: `row-dữ_liệu_1${vị_trí}${vị_trí_xuất_hiện}`, style: { width: '34px' } },
        h(
          'span',
          {
            style: {
              opacity: dữ_liệu_xuất_hiện.tổng_xuất_hiện <= 3 ? 1 : 0.3,
              border:
                màu_kết_quả_hiện_tại.value &&
                dữ_liệu.kết_quả_xổ_số.includes(dữ_liệu_xuất_hiện.số_xuất_hiện)
                  ? '1px solid blue'
                  : null,
              color: dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.includes(
                dữ_liệu_xuất_hiện.số_xuất_hiện,
              )
                ? 'red'
                : null,
            },
          },
          `${dữ_liệu_xuất_hiện.số_xuất_hiện}:${dữ_liệu_xuất_hiện.tổng_xuất_hiện}`,
        ),
      ),
    ),
  )
}

function hiển_thị_ds_dự_đoán_xuất_hiện(danh_sách: string[], dữ_liệu: Đối_Tượng_Xổ_Số) {
  const kết_quả_sau_đó = dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số || []
  const kết_quả_hiện_tại = dữ_liệu.kết_quả_xổ_số || []
  return h(
    'div',
    { style: { width: '220px', display: 'flex', flexWrap: 'wrap' } },
    danh_sách.map((số_dự_đoán, vị_trí) =>
      h(
        'div',
        { key: `row-dự_đoán${vị_trí}`, style: { width: '34px' } },
        h(
          'span',
          {
            style: {
              color: kết_quả_sau_đó.includes(số_dự_đoán) ? 'red' : null,
              border: kết_quả_hiện_tại.includes(số_dự_đoán) ? '1px solid blue' : null,
            },
          },
          `${số_dự_đoán}`,
        ),
      ),
    ),
  )
}

function tạo_ds_xuất_hiện_tại_vị_trí_chỉ_định(
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  danh_sách_dữ_liệu_khác: Array<Đối_Tượng_Xổ_Số>,
  dữ_liệu: Đối_Tượng_Xổ_Số,
  vị_trí_dữ_liệu: number,
) {
  dữ_liệu.dự_đoán_ds_xuất_hiện = tạo_ds_xuất_hiện(
    danh_sách_dữ_liệu,
    danh_sách_dữ_liệu_khác,
    dữ_liệu,
    vị_trí_dữ_liệu,
    dữ_liệu.loại_xổ_số === 55 ? SỐ_XUẤT_HIỆN_55 : SỐ_XUẤT_HIỆN_45,
  )

  if (vị_trí_dữ_liệu > 0) {
    const kết_quả_sau_đó = danh_sách_dữ_liệu[vị_trí_dữ_liệu - 1]?.kết_quả_xổ_số || []

    dữ_liệu.dự_đoán_ds_xuất_hiện.forEach((danh_sách) => {
      const ds_vị_trí: number[] = []
      const ds_không_tìm_thấy: string[] = []
      kết_quả_sau_đó.forEach((số) => {
        {
          const vị_Trí = danh_sách.indexOf(số)
          if (vị_Trí >= 0) {
            ds_vị_trí.push(vị_Trí)
          } else {
            ds_không_tìm_thấy.push(số)
          }
        }
      })
      ds_không_tìm_thấy.forEach((số) => {
        for (let i = 0; i < dữ_liệu.dự_đoán_ds_xuất_hiện.length; i++) {
          const vị_trí_tìm_thấy = dữ_liệu.dự_đoán_ds_xuất_hiện[i].indexOf(số)
          if (vị_trí_tìm_thấy >= 0 && !ds_vị_trí.includes(vị_trí_tìm_thấy)) {
            ds_vị_trí.push(vị_trí_tìm_thấy)
            break
          }
        }
      })
      if (ds_vị_trí.length === 6) {
        dữ_liệu.vị_trí_ds_xuất_hiện.push(ds_vị_trí)
      }
    })
  }
}

function xem_dự_đoán_cho_tất_cả(
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  dữ_liệu: Đối_Tượng_Xổ_Số,
  vị_trí_xem: number = -1,
) {
  console.group('Dự Đoán')
  if (vị_trí_xem === -1) {
    console.log('dự đoán cho tất cả')
  } else {
    console.log(`dự đoán cho vị trí ${vị_trí_xem}`)
  }

  const kết_quả_xổ_số = dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số || []
  const dự_đoán_ds_xuất_hiện = dữ_liệu.dự_đoán_ds_xuất_hiện
  const tất_cả_ds_vị_trí_dự_đoán: number[][] = []

  // lấy tất cả vị trí dự đoán
  for (let k = dữ_liệu.vị_trí_dữ_liệu + 1; k < danh_sách_dữ_liệu.length; k++) {
    const dữ_liệu_tiếp_theo = danh_sách_dữ_liệu[k]
    tất_cả_ds_vị_trí_dự_đoán.push(
      ...dữ_liệu_tiếp_theo.vị_trí_ds_xuất_hiện.filter(qua_bộ_lọc_vị_trí),
    )
  }

  console.log('tất cả vị trí dự đoán: ', tất_cả_ds_vị_trí_dự_đoán.length)
  console.log(
    `bộ lọc: số trùng trong cột = ${lọc_số_trùng_trong_cột.value}, số cùng hàng = ${lọc_số_cùng_hàng.value} (-1 là không lọc)`,
  )

  let tong_3 = 0
  let tong_4 = 0
  let tong_5 = 0
  let tong5_5 = 0
  let tong_6 = 0
  let tổng_ds = 0
  for (let i = 0; i < dự_đoán_ds_xuất_hiện.length; i++) {
    if (vị_trí_xem === i || vị_trí_xem === -1) {
      const danh_sách = dự_đoán_ds_xuất_hiện[i]
      for (let j = 0; j < tất_cả_ds_vị_trí_dự_đoán.length; j++) {
        const ds_dự_đoán: string[] = []
        const ds_vị_trí = tất_cả_ds_vị_trí_dự_đoán[j]
        ds_vị_trí.forEach((vị_trí) => {
          ds_dự_đoán.push(danh_sách[vị_trí])
        })
        const tổng = ds_dự_đoán.filter((số) => kết_quả_xổ_số.includes(số)).length
        tổng_ds++
        if (tổng === 3) {
          tong_3++
        }
        if (tổng === 4) {
          tong_4++
        }
        if (tổng === 5) {
          if (ds_dự_đoán.includes(dữ_liệu.số_jacpot_2)) {
            console.log('trúng jackpot 2 tại: ', `ds ${i} vị trí ${j}`)
            tong5_5++
          } else {
            console.log('trúng 5 tại: ', `ds ${i} vị trí ${j}`)
            tong_5++
          }
        }
        if (tổng === 6) {
          console.log('trúng jackpot 1 tại: ', `ds ${i} vị trí ${j}`)
          tong_6++
        }
      }
    }
  }

  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })

  console.log(kết_quả_xổ_số.join(', '))
  console.log(
    `tiền: ${formatter.format(tổng_ds * 10000)}, tổng: ${tổng_ds}, tong_3: ${tong_3}, tong_4: ${tong_4}, tong_5: ${tong_5}, jackpot_2: ${tong5_5}, jackpot_1: ${tong_6}`,
  )
  console.groupEnd()
}

async function thống_kê_dự_đoán(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  const tập_vị_trí: Vị_Trí_Lặp_Lại[] = []
  const tất_cả_ds_vị_trí_dự_đoán: number[][] = []

  // tra cứu theo (mức trùng, tập vị trí đã sắp xếp) thay vì find + sort trên toàn bộ tập_vị_trí
  const chỉ_mục_vị_trí = new Map<string, Vị_Trí_Lặp_Lại>()
  // "vị trí j" ghi theo đúng cách xem_dự_đoán_cho_tất_cả đánh số: các bộ vị trí của kỳ k+1, k+2, ... nối nhau
  // (kỳ gần k nhất trước). Vòng lặp dưới đi từ kỳ cũ đến mới nên cần đổi từ chỉ số trong danh sách đang tích lũy.
  const tổng_bộ_trước_kỳ: number[] = [0]
  danh_sách_dữ_liệu.forEach((dữ_liệu) =>
    tổng_bộ_trước_kỳ.push(tổng_bộ_trước_kỳ[tổng_bộ_trước_kỳ.length - 1] + dữ_liệu.vị_trí_ds_xuất_hiện.length),
  )
  const nguồn_bộ_vị_trí: Array<{ kỳ: number; thứ_tự: number }> = []

  const ghi_nhận_vị_trí_lặp_lại = (
    trùng: number,
    ds_vị_trí: number[],
    k: number,
    i: number,
    j: number,
  ) => {
    // đổi j (chỉ số trong danh sách tích lũy cũ đến mới) sang chỉ số mà xem dự đoán in ra cho kỳ k
    const { kỳ: kỳ_gốc, thứ_tự } = nguồn_bộ_vị_trí[j]
    const vị_trí_j = tổng_bộ_trước_kỳ[kỳ_gốc] - tổng_bộ_trước_kỳ[k + 1] + thứ_tự

    const ds_đã_sắp_xếp = [...ds_vị_trí].sort((a, b) => a - b)
    const khóa = `${trùng}|${ds_đã_sắp_xếp.join(',')}`
    const vị_trí_tồn_tại = chỉ_mục_vị_trí.get(khóa)
    if (vị_trí_tồn_tại) {
      vị_trí_tồn_tại.tổng_xuất_hiện += 1
      vị_trí_tồn_tại.xuất_hiện.push(k)
      vị_trí_tồn_tại.danh_sách.push(i)
      vị_trí_tồn_tại.vị_trí?.push(vị_trí_j)
    } else {
      const vị_trí_mới: Vị_Trí_Lặp_Lại = {
        ds_vị_trí: ds_đã_sắp_xếp,
        tổng_xuất_hiện: 1,
        trùng,
        xuất_hiện: [k],
        danh_sách: [i],
        vị_trí: [vị_trí_j],
      }
      tập_vị_trí.push(vị_trí_mới)
      chỉ_mục_vị_trí.set(khóa, vị_trí_mới)
    }
  }

  for (let k = danh_sách_dữ_liệu.length - 1; k >= 0; k--) {
    const dữ_liệu = danh_sách_dữ_liệu[k]
    const kết_quả_xổ_số = dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số || []
    const dự_đoán_ds_xuất_hiện = dữ_liệu.dự_đoán_ds_xuất_hiện

    for (let i = 0; i < dự_đoán_ds_xuất_hiện.length; i++) {
      const danh_sách = dự_đoán_ds_xuất_hiện[i]

      // vòng j chạy hàng trăm triệu lần nên tính trước vị trí nào của danh sách có trong kết quả
      const vị_trí_trúng = new Uint8Array(danh_sách.length)
      danh_sách.forEach((số, vị_trí) => {
        if (kết_quả_xổ_số.includes(số)) vị_trí_trúng[vị_trí] = 1
      })

      for (let j = 0; j < tất_cả_ds_vị_trí_dự_đoán.length; j++) {
        const ds_vị_trí = tất_cả_ds_vị_trí_dự_đoán[j]
        let tổng = 0
        for (let m = 0; m < ds_vị_trí.length; m++) {
          tổng += vị_trí_trúng[ds_vị_trí[m]] | 0
        }
        if (tổng === 5) {
          // 6/45 không có jackpot 2 nên chỉ loại 55 mới có mức 5.5
          ghi_nhận_vị_trí_lặp_lại(
            dữ_liệu.loại_xổ_số === 55 && ds_vị_trí.includes(Number(dữ_liệu.số_jacpot_2)) ? 5.5 : 5,
            ds_vị_trí,
            k,
            i,
            j,
          )
        }
        if (tổng === 6) {
          ghi_nhận_vị_trí_lặp_lại(6, ds_vị_trí, k, i, j)
        }
      }
    }

    tất_cả_ds_vị_trí_dự_đoán.push(...dữ_liệu.vị_trí_ds_xuất_hiện)
    dữ_liệu.vị_trí_ds_xuất_hiện.forEach((_, thứ_tự) => nguồn_bộ_vị_trí.push({ kỳ: k, thứ_tự }))
  }
  const tên_lưu_trữ = lấy_tên_lưu_trữ(danh_sách_dữ_liệu)
  await dịch_vụ_indexeddb.khởi_tạo()
  const dữ_liệu_đã_lưu = await dịch_vụ_indexeddb.lấy_dữ_liệu_theo_tên(tên_lưu_trữ)
  if (dữ_liệu_đã_lưu.length > 0) {
    await dịch_vụ_indexeddb.cập_nhật_dữ_liệu(dữ_liệu_đã_lưu[0].id, tập_vị_trí)
  } else {
    await dịch_vụ_indexeddb.lưu_dữ_liệu(tên_lưu_trữ, tập_vị_trí)
  }

  const kết_quả = _.orderBy(
    tập_vị_trí,
    [(item: Vị_Trí_Lặp_Lại) => Math.min(...item.xuất_hiện), (item: Vị_Trí_Lặp_Lại) => item.trùng],
    ['asc', 'desc'],
  ).map((item: Vị_Trí_Lặp_Lại) => ({
    ds_vị_trí: item.ds_vị_trí,
    tổng_xuất_hiện: item.tổng_xuất_hiện,
    trùng: item.trùng,
    xuất_hiện: item.xuất_hiện.join(', '),
    danh_sách: item.danh_sách.join(', '),
    vị_trí: (item.vị_trí ?? []).join(', '),
  }))
  console.log('kết quả thống kê dự đoán: ', kết_quả)
}

async function phân_tích_và_dự_đoán(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  await dịch_vụ_indexeddb.khởi_tạo()
  const dữ_liệu_lưu_trữ = await dịch_vụ_indexeddb.lấy_dữ_liệu_theo_tên(
    lấy_tên_lưu_trữ(danh_sách_dữ_liệu),
  )
  const dữ_liệu = dữ_liệu_lưu_trữ[0]?.dữ_liệu || []
  const dữ_liệu_nhóm: Vị_Trí_Lặp_Lại[] = []

  dữ_liệu.forEach((item: Vị_Trí_Lặp_Lại) => {
    const vị_trí_tồn_tại = dữ_liệu_nhóm.find(
      (vị_trí) => vị_trí.ds_vị_trí.sort().toString() === item.ds_vị_trí.sort().toString(),
    )
    if (vị_trí_tồn_tại) {
      vị_trí_tồn_tại.tổng_xuất_hiện += item.tổng_xuất_hiện
      vị_trí_tồn_tại.xuất_hiện.push(...item.xuất_hiện)
      vị_trí_tồn_tại.danh_sách.push(...item.danh_sách)
      vị_trí_tồn_tại.vị_trí?.push(...(item.vị_trí ?? []))
    } else {
      dữ_liệu_nhóm.push({
        ds_vị_trí: item.ds_vị_trí,
        tổng_xuất_hiện: item.tổng_xuất_hiện,
        trùng: item.trùng,
        xuất_hiện: [...item.xuất_hiện],
        danh_sách: [...item.danh_sách],
        vị_trí: [...(item.vị_trí ?? [])],
      })
    }
  })

  const kết_quả = _.orderBy(
    dữ_liệu_nhóm,
    [(item: Vị_Trí_Lặp_Lại) => Math.min(...item.xuất_hiện), (item: Vị_Trí_Lặp_Lại) => item.trùng],
    ['asc', 'desc'],
  ).map((item: Vị_Trí_Lặp_Lại) => ({
    ds_vị_trí: item.ds_vị_trí.sort().join(', '),
    tổng_xuất_hiện: item.tổng_xuất_hiện,
    trùng: item.trùng,
    xuất_hiện: item.xuất_hiện.join(', '),
    danh_sách: item.danh_sách.join(', '),
    vị_trí: (item.vị_trí ?? []).join(', '),
  }))
  console.group('Phân tích và dự đoán')
  console.log('tổng danh sách: ', dữ_liệu.length)
  console.log('sau khi nhóm: ', dữ_liệu_nhóm.length)
  console.log('sau khi nhóm: ', kết_quả)
  console.groupEnd()
  const dữ_liệu2: Đối_Tượng_Xổ_Số = danh_sách_dữ_liệu[Number(vị_trí_phân_tích.value)]
  const dự_đoán_ds_xuất_hiện = dữ_liệu2.dự_đoán_ds_xuất_hiện
  const ds_đầu_tiên = dự_đoán_ds_xuất_hiện[Number(vị_trí_dự_đoán.value)] || []
  let tổng_dự_đoán = 0
  if (Number(vị_trí_phân_tích.value) === 0) {
    // dự đoán
    console.group('dự đoán')
    const tất_cả_dự_đoán: string[][] = []
    dữ_liệu_nhóm.forEach((item) => {
      if (item.danh_sách.includes(Number(danh_sách_dự_đoán.value))) {
        const ds_dự_đoán: string[] = []
        item.ds_vị_trí.forEach((vị_trí) => {
          ds_dự_đoán.push(ds_đầu_tiên[vị_trí])
        })
        tất_cả_dự_đoán.push(ds_dự_đoán)
      }
    })
    console.log(tất_cả_dự_đoán)
    console.groupEnd()
  } else {
    // phân tích
    console.group('phân tích')
    dữ_liệu_nhóm.forEach((item, j) => {
      if (Number(j) > Number(vị_trí_phân_tích.value)) {
        const ds_dự_đoán: string[] = []
        item.ds_vị_trí.forEach((vị_trí) => {
          ds_dự_đoán.push(ds_đầu_tiên[vị_trí])
        })
        const tổng = ds_dự_đoán.filter((số) => dữ_liệu2.kết_quả_xổ_số.includes(số)).length
        if (tổng === 3) {
          console.log('trúng 3 tại: ', `${Number(vị_trí_phân_tích.value)} vị trí ${j}`)
        }
        if (tổng === 4) {
          console.log('trúng 4 tại: ', `${Number(vị_trí_phân_tích.value)} vị trí ${j}`)
        }
        if (tổng === 5) {
          if (ds_dự_đoán.includes(dữ_liệu2.số_jacpot_2)) {
            console.log('trúng jackpot 2 tại: ', `${vị_trí_phân_tích.value} vị trí ${j}`)
          } else {
            console.log('trúng 5 tại: ', `${vị_trí_phân_tích.value} vị trí ${j}`)
          }
        }
        if (tổng === 6) {
          console.log('trúng jackpot 1 tại: ', `${vị_trí_phân_tích.value} vị trí ${j}`)
        }
        tổng_dự_đoán++
      }
    })
    console.log('tổng số dự đoán :', tổng_dự_đoán)
    console.groupEnd()
  }
}

// ngày kỳ mà vé dự đoán: kỳ cũ lấy ngày thật của kỳ ngay sau nó, kỳ mới nhất thì tính theo lịch quay
function lấy_ngày_dự_đoán(kỳ_cơ_sở: Đối_Tượng_Xổ_Số): string {
  return kỳ_cơ_sở.dữ_liệu_kỳ_sau_đó?.ngày_xổ_số ?? tính_ngày_dự_đoán(kỳ_cơ_sở)
}

// đối chiếu một bộ vé với kết quả thật của kỳ đã có và in ra console
function in_đánh_giá_vé(vé: string[][], kỳ_sau: Đối_Tượng_Xổ_Số) {
  const đánh_giá = đánh_giá_bộ_vé(vé, kỳ_sau)
  const định_dạng_tiền = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

  console.group(`Đánh giá ${vé.length} vé với kết quả kỳ sau (${kỳ_sau.ngày_xổ_số})`)
  console.log(
    `kết quả: ${kỳ_sau.kết_quả_xổ_số.join(' ')}${kỳ_sau.số_jacpot_2 ? ` | số phụ: ${kỳ_sau.số_jacpot_2}` : ''}`,
  )
  console.table(đánh_giá.dòng_theo_mức)
  console.log(
    `chi phí (đã gồm phí 3%): ${định_dạng_tiền.format(đánh_giá.chi_phí)}, tiền thắng (đã trừ thuế): ${định_dạng_tiền.format(đánh_giá.tiền_thắng)}, lãi/lỗ: ${định_dạng_tiền.format(đánh_giá.lãi_lỗ)}`,
  )
  if (đánh_giá.vé_trúng_từ_4.length > 0) {
    console.log(
      'vé trúng từ 4 số:\n' +
        đánh_giá.vé_trúng_từ_4
          .map((vé_trúng) => `${vé_trúng.vé.join(' ')} → ${vé_trúng.số_trúng} số (${vé_trúng.mức})`)
          .join('\n'),
    )
  }
  console.groupEnd()
}

// công thức cố định: cùng một bộ vị trí áp lên danh sách xuất hiện của kỳ đã chọn (0 là kỳ mới nhất)
function tạo_và_in_vé_từ_danh_sách(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  const vị_trí_kỳ = Number(vị_trí_kỳ_tạo_vé.value)
  const dữ_liệu = danh_sách_dữ_liệu[vị_trí_kỳ]
  if (!dữ_liệu) {
    console.warn(`Không có kỳ ở vị trí ${vị_trí_kỳ} (có ${danh_sách_dữ_liệu.length} kỳ, từ 0)`)
    return
  }
  const chỉ_số = Number(chỉ_số_ds_tạo_vé.value)
  const danh_sách = dữ_liệu.dự_đoán_ds_xuất_hiện[chỉ_số]
  if (!danh_sách) {
    console.warn(
      `Không có danh sách số ${chỉ_số}: kỳ ở vị trí ${vị_trí_kỳ} của ${dữ_liệu.loại_xổ_số} có ${dữ_liệu.dự_đoán_ds_xuất_hiện.length} danh sách (chỉ số từ 0)`,
    )
    return
  }

  const số_vé = Number(số_vé_từ_danh_sách.value)
  const bộ_vị_trí = tạo_bộ_vị_trí_cố_định(danh_sách.length, số_vé)
  const vé = tạo_vé_từ_danh_sách(danh_sách, bộ_vị_trí)

  // lưu mọi kỳ (kể cả kỳ cũ) để xem lại và đối chiếu sau bằng nút đối chiếu vé đã lưu
  const ngày_dự_đoán = lấy_ngày_dự_đoán(dữ_liệu)
  ghi_bộ_nhớ_đệm<Vé_Từ_Danh_Sách_Đã_Lưu>(
    `${TIỀN_TỐ_VÉ_TỪ_DANH_SÁCH}${dữ_liệu.loại_xổ_số}|${ngày_dự_đoán}|${chỉ_số}|${vé.length}`,
    {
      loại_xổ_số: dữ_liệu.loại_xổ_số,
      ngày_cơ_sở: dữ_liệu.ngày_xổ_số,
      ngày_dự_đoán,
      thời_điểm_tạo: Date.now(),
      chỉ_số_danh_sách: chỉ_số,
      vé,
    },
  ).then(() => tải_ngày_dự_đoán_đã_lưu('danh sách', ngày_dự_đoán))

  const kỳ_sau = dữ_liệu.dữ_liệu_kỳ_sau_đó
  console.group(
    `Vé từ danh sách ${chỉ_số} của kỳ ${vị_trí_kỳ} (${dữ_liệu.ngày_xổ_số}) ${dữ_liệu.loại_xổ_số} (${danh_sách.length} số), dự đoán cho kỳ ${ngày_dự_đoán}${kỳ_sau ? ' (đã có kết quả)' : ''}, đã lưu để đối chiếu`,
  )
  console.log(`${vé.length}/${số_vé} vé, mỗi vé có ít nhất 1 cột từ 2 số, mỗi hàng tối đa 3 số`)
  if (vé.length < số_vé) console.warn('Không tạo đủ số vé với điều kiện này')

  if (kỳ_sau) in_đánh_giá_vé(vé, kỳ_sau)
  else console.log('kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá')
  console.log(vé.map((một_vé) => một_vé.join(' ')).join('\n'))
  console.groupEnd()
}

function tạo_và_in_vé_kỳ_tới(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  const loại_xổ_số = danh_sách_dữ_liệu[0].loại_xổ_số
  const chiến_lược = CÁC_CHIẾN_LƯỢC[chiến_lược_vé.value]
  if (!chiến_lược) {
    console.warn('Chọn một chiến lược cụ thể để tạo vé')
    return
  }
  const số_vé = SỐ_VÉ_MỤC_TIÊU[loại_xổ_số]
  const kỳ_mới_nhất = danh_sách_dữ_liệu[0]
  // seed theo loại, ngày kỳ mới nhất và chiến lược: bấm lại ra cùng bộ vé, có kết quả mới thì bộ vé mới
  const vé = tạo_danh_sách_vé(
    loại_xổ_số,
    số_vé,
    chiến_lược(danh_sách_dữ_liệu, loại_xổ_số),
    tạo_bộ_sinh_ngẫu_nhiên(
      tạo_seed_từ_chuỗi(`${loại_xổ_số}|${kỳ_mới_nhất.ngày_xổ_số}|${chiến_lược_vé.value}`),
    ),
  )
  const vé_dạng_chuỗi = vé.map((một_vé) => một_vé.map((số) => String(số).padStart(2, '0')))

  // lưu để đối chiếu khi có kết quả kỳ tới
  const ngày_dự_đoán = lấy_ngày_dự_đoán(kỳ_mới_nhất)
  ghi_bộ_nhớ_đệm<Vé_Mục_Tiêu_Đã_Lưu>(
    `${TIỀN_TỐ_VÉ_MỤC_TIÊU}${loại_xổ_số}|${ngày_dự_đoán}|${chiến_lược_vé.value}|${vé.length}`,
    {
      loại_xổ_số,
      ngày_cơ_sở: kỳ_mới_nhất.ngày_xổ_số,
      ngày_dự_đoán,
      thời_điểm_tạo: Date.now(),
      chiến_lược: chiến_lược_vé.value,
      vé: vé_dạng_chuỗi,
    },
  ).then(() => tải_ngày_dự_đoán_đã_lưu('vé mục tiêu', ngày_dự_đoán))

  const thống_kê = thống_kê_số(danh_sách_dữ_liệu, loại_xổ_số)
  console.group(
    `Vé kỳ tới ${loại_xổ_số} (${chiến_lược_vé.value}), dự đoán cho kỳ ${ngày_dự_đoán}, đã lưu để đối chiếu`,
  )
  console.log(`số vừa ra (kỳ mới nhất ${danh_sách_dữ_liệu[0].ngày_xổ_số}): ${thống_kê.vừa_ra.join(' ')}`)
  console.log(
    `số nóng (nhiều nhất trong 50 kỳ gần nhất): ${thống_kê.nóng.map((mục) => `${mục.số} (${mục.lần} lần)`).join(', ')}`,
  )
  console.log(
    `số lạnh (ít nhất trong 50 kỳ gần nhất): ${thống_kê.lạnh.map((mục) => `${mục.số} (${mục.lần} lần)`).join(', ')}`,
  )
  console.log(
    `số lâu chưa ra (số kỳ kể từ lần ra gần nhất): ${thống_kê.lâu_chưa_ra.map((mục) => `${mục.số} (${mục.số_kỳ} kỳ)`).join(', ')}`,
  )
  console.log(
    `${vé.length}/${số_vé} vé, xác suất có vé trúng từ 5 số: ${(vé.length * xác_suất_một_vé(loại_xổ_số).từ_5 * 100).toFixed(3)}%`,
  )
  console.log(vé_dạng_chuỗi.map((một_vé) => một_vé.join(' ')).join('\n'))
  console.groupEnd()
}

// đối chiếu các bộ vé phủ đã lưu với kết quả thật của kỳ ngay sau kỳ cơ sở, nếu kỳ đó đã có trong dữ liệu
// ngày quay kế tiếp của loại xổ số này, tính theo lịch quay trong code (có thể lệch nếu dời lịch)
function tính_ngày_dự_đoán(kỳ_mới_nhất: Đối_Tượng_Xổ_Số): string {
  return moment(
    lấy_dấu_thời_gian_của_kỳ_sau(
      kỳ_mới_nhất.dấu_thời_gian_của_ngày,
      kỳ_mới_nhất.loại_xổ_số === 55 ? 55 : 45,
    ),
  ).format('DD/MM/YYYY')
}

type Loại_Nguồn_Vé = 'vé phủ' | 'danh sách' | 'vé mục tiêu'

type Vé_Đã_Lưu_Chung = {
  loại_nguồn: Loại_Nguồn_Vé
  nguồn: string
  loại_xổ_số: number
  ngày_cơ_sở: string
  ngày_dự_đoán: string
  thời_điểm_tạo: number
  vé: string[][]
}

// gộp mọi vé đã lưu (bộ vé phủ và vé từ danh sách xuất hiện), mới tạo nhất trước
async function đọc_tất_cả_vé_đã_lưu(): Promise<Vé_Đã_Lưu_Chung[]> {
  const [bộ_vé_phủ, vé_từ_danh_sách, vé_mục_tiêu] = await Promise.all([
    liệt_kê_bộ_nhớ_đệm_theo_tiền_tố<Bộ_Vé_Phủ_Đã_Lưu>(TIỀN_TỐ_BỘ_VÉ_PHỦ),
    liệt_kê_bộ_nhớ_đệm_theo_tiền_tố<Vé_Từ_Danh_Sách_Đã_Lưu>(TIỀN_TỐ_VÉ_TỪ_DANH_SÁCH),
    liệt_kê_bộ_nhớ_đệm_theo_tiền_tố<Vé_Mục_Tiêu_Đã_Lưu>(TIỀN_TỐ_VÉ_MỤC_TIÊU),
  ])
  return [
    ...bộ_vé_phủ.map(({ giá_trị: bộ }) => ({
      loại_nguồn: 'vé phủ' as const,
      nguồn: 'vé phủ',
      loại_xổ_số: bộ.loại_xổ_số,
      ngày_cơ_sở: bộ.ngày_cơ_sở,
      ngày_dự_đoán: bộ.ngày_dự_đoán,
      thời_điểm_tạo: bộ.thời_điểm_tạo,
      vé: bộ.vé.map((vé) => vé.map((số) => String(số).padStart(2, '0'))),
    })),
    ...vé_từ_danh_sách.map(({ giá_trị: bộ }) => ({
      loại_nguồn: 'danh sách' as const,
      nguồn: `danh sách ${bộ.chỉ_số_danh_sách}`,
      loại_xổ_số: bộ.loại_xổ_số,
      ngày_cơ_sở: bộ.ngày_cơ_sở,
      ngày_dự_đoán: bộ.ngày_dự_đoán,
      thời_điểm_tạo: bộ.thời_điểm_tạo,
      vé: bộ.vé,
    })),
    ...vé_mục_tiêu.map(({ giá_trị: bộ }) => ({
      loại_nguồn: 'vé mục tiêu' as const,
      nguồn: `mục tiêu ${bộ.chiến_lược}`,
      loại_xổ_số: bộ.loại_xổ_số,
      ngày_cơ_sở: bộ.ngày_cơ_sở,
      ngày_dự_đoán: bộ.ngày_dự_đoán,
      thời_điểm_tạo: bộ.thời_điểm_tạo,
      vé: bộ.vé,
    })),
  ].sort((a, b) => b.thời_điểm_tạo - a.thời_điểm_tạo)
}

// ô chọn ngày và danh sách ngày của từng loại vé đã lưu
const ngày_đã_chọn_theo_nguồn: Record<Loại_Nguồn_Vé, Ref<string>> = {
  'vé phủ': ngày_dự_đoán_đối_chiếu,
  'danh sách': ngày_đối_chiếu_vé_danh_sách,
  'vé mục tiêu': ngày_đối_chiếu_vé_mục_tiêu,
}
const các_ngày_theo_nguồn: Record<Loại_Nguồn_Vé, Ref<string[]>> = {
  'vé phủ': các_ngày_dự_đoán_đã_lưu,
  'danh sách': các_ngày_vé_danh_sách_đã_lưu,
  'vé mục tiêu': các_ngày_vé_mục_tiêu_đã_lưu,
}

// đọc các ngày dự đoán đang có trong IndexedDB cho một loại vé (mới nhất trước) để làm danh sách chọn
async function tải_ngày_dự_đoán_đã_lưu(loại_nguồn: Loại_Nguồn_Vé, ngày_cần_chọn?: string) {
  const các_ngày = [
    ...new Set(
      (await đọc_tất_cả_vé_đã_lưu())
        .filter((bộ) => bộ.loại_nguồn === loại_nguồn)
        .map((bộ) => bộ.ngày_dự_đoán),
    ),
  ].sort((a, b) => moment(b, 'DD/MM/YYYY').valueOf() - moment(a, 'DD/MM/YYYY').valueOf())
  các_ngày_theo_nguồn[loại_nguồn].value = các_ngày

  const ngày_đã_chọn = ngày_đã_chọn_theo_nguồn[loại_nguồn]
  if (ngày_cần_chọn && các_ngày.includes(ngày_cần_chọn)) {
    ngày_đã_chọn.value = ngày_cần_chọn
  } else if (!các_ngày.includes(ngày_đã_chọn.value)) {
    // ngày đang chọn không còn (đã xóa trong IndexedDB) hoặc chưa chọn: lấy ngày mới nhất
    ngày_đã_chọn.value = các_ngày[0] ?? ''
  }
}

tải_ngày_dự_đoán_đã_lưu('vé phủ')
tải_ngày_dự_đoán_đã_lưu('danh sách')
tải_ngày_dự_đoán_đã_lưu('vé mục tiêu')

// đối chiếu các vé đã lưu với kết quả thật của kỳ ngay sau kỳ cơ sở, nếu kỳ đó đã có trong dữ liệu
async function đối_chiếu_vé_đã_lưu(loại_nguồn: Loại_Nguồn_Vé) {
  const tên_loại_vé = {
    'vé phủ': 'bộ vé phủ',
    'danh sách': 'vé từ danh sách xuất hiện',
    'vé mục tiêu': 'vé mục tiêu',
  }[loại_nguồn]
  const tất_cả_bộ = (await đọc_tất_cả_vé_đã_lưu()).filter((bộ) => bộ.loại_nguồn === loại_nguồn)
  if (tất_cả_bộ.length === 0) {
    console.log(`Chưa có ${tên_loại_vé} nào được lưu`)
    return
  }

  // chỉ đối chiếu các bộ của ngày dự đoán đã chọn ('' là tất cả)
  const ngày_chọn = ngày_đã_chọn_theo_nguồn[loại_nguồn].value
  const các_bộ = ngày_chọn ? tất_cả_bộ.filter((bộ) => bộ.ngày_dự_đoán === ngày_chọn) : tất_cả_bộ
  if (các_bộ.length === 0) {
    console.log(`Không có ${tên_loại_vé} nào cho ngày dự đoán ${ngày_chọn}`)
    return
  }

  const định_dạng_tiền = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
  const các_dòng = các_bộ.map((bộ) => {
    const danh_sách = bộ.loại_xổ_số === 55 ? dữ_liệu_xổ_số_55 : dữ_liệu_xổ_số_45
    // danh sách xếp mới nhất trước, nên kỳ ngay sau kỳ cơ sở nằm ở vị trí liền trước
    const vị_trí_cơ_sở = danh_sách.findIndex((dữ_liệu) => dữ_liệu.ngày_xổ_số === bộ.ngày_cơ_sở)
    const kỳ_sau = vị_trí_cơ_sở > 0 ? danh_sách[vị_trí_cơ_sở - 1] : undefined
    const thông_tin_chung = {
      nguồn: bộ.nguồn,
      loại: bộ.loại_xổ_số,
      ngày_lưu: moment(bộ.thời_điểm_tạo).format('DD/MM/YYYY HH:mm'),
      ngày_dự_đoán: bộ.ngày_dự_đoán,
      số_vé: bộ.vé.length,
    }
    if (!kỳ_sau) return { ...thông_tin_chung, kết_quả: 'chưa có kết quả' }

    const đánh_giá = đánh_giá_bộ_vé(bộ.vé, kỳ_sau)
    const số_vé_theo_mức = (mức: string) =>
      đánh_giá.dòng_theo_mức.find((dòng) => dòng.mức_trúng === mức)?.số_vé ?? 0
    return {
      ...thông_tin_chung,
      kết_quả: `${kỳ_sau.ngày_xổ_số}: ${kỳ_sau.kết_quả_xổ_số.join(' ')}`,
      trúng_3: số_vé_theo_mức('trúng_3'),
      trúng_4: số_vé_theo_mức('trúng_4'),
      trúng_5: số_vé_theo_mức('trúng_5') + số_vé_theo_mức('jackpot_2'),
      trúng_6: số_vé_theo_mức('jackpot_1'),
      lãi_lỗ: định_dạng_tiền.format(đánh_giá.lãi_lỗ),
    }
  })

  console.group(`Đối chiếu ${tên_loại_vé} đã lưu (${ngày_chọn || 'tất cả ngày dự đoán'})`)
  console.table(các_dòng)
  console.groupEnd()
}

function tạo_và_in_bộ_vé(loại_xổ_số: number) {
  try {
    const danh_sách_kỳ = loại_xổ_số === 55 ? dữ_liệu_xổ_số_55 : dữ_liệu_xổ_số_45
    const vị_trí_kỳ = Number(vị_trí_kỳ_bộ_vé_phủ.value)
    const kỳ_cơ_sở = danh_sách_kỳ[vị_trí_kỳ]
    if (!kỳ_cơ_sở) {
      console.warn(`Không có kỳ ở vị trí ${vị_trí_kỳ} (có ${danh_sách_kỳ.length} kỳ, từ 0)`)
      return
    }

    // seed theo loại và ngày của kỳ cơ sở: bấm lại ra cùng bộ vé, kỳ khác thì bộ vé khác
    const bộ_vé = tạo_bộ_vé_phủ(
      loại_xổ_số,
      Number(kích_thước_nhóm_số.value),
      Number(mức_đảm_bảo_trúng.value),
      Number(số_vé_bộ_vé_phủ.value),
      undefined,
      tạo_seed_từ_chuỗi(`${loại_xổ_số}|${kỳ_cơ_sở.ngày_xổ_số}`),
    )
    // bộ vé dành cho kỳ ngay sau kỳ cơ sở: kỳ cũ thì là kỳ thật, kỳ mới nhất thì tính theo lịch quay
    const ngày_dự_đoán = lấy_ngày_dự_đoán(kỳ_cơ_sở)
    const kỳ_sau = kỳ_cơ_sở.dữ_liệu_kỳ_sau_đó
    // mỗi tổ hợp tham số lưu một bản ghi riêng, tạo lại cùng tham số thì ghi đè đúng bản đó
    const khóa_lưu = `${TIỀN_TỐ_BỘ_VÉ_PHỦ}${loại_xổ_số}|${ngày_dự_đoán}|${bộ_vé.nhóm_số.length}|${bộ_vé.mức_đảm_bảo}|${bộ_vé.vé.length}`
    ghi_bộ_nhớ_đệm<Bộ_Vé_Phủ_Đã_Lưu>(khóa_lưu, {
      loại_xổ_số,
      ngày_cơ_sở: kỳ_cơ_sở.ngày_xổ_số,
      ngày_dự_đoán,
      thời_điểm_tạo: Date.now(),
      nhóm_số: bộ_vé.nhóm_số,
      mức_đảm_bảo: bộ_vé.mức_đảm_bảo,
      số_vé_tối_thiểu: bộ_vé.số_vé_tối_thiểu,
      vé: bộ_vé.vé,
    }).then(() => tải_ngày_dự_đoán_đã_lưu('vé phủ', ngày_dự_đoán))
    const định_dạng_tiền = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

    console.group(
      `Bộ vé phủ ${loại_xổ_số} của kỳ ${vị_trí_kỳ} (${kỳ_cơ_sở.ngày_xổ_số}), dự đoán cho kỳ ${ngày_dự_đoán}${kỳ_sau ? ' (đã có kết quả)' : ''}, đã lưu để đối chiếu`,
    )
    console.log('nhóm số: ', bộ_vé.nhóm_số.join(', '))
    if (Number(số_vé_bộ_vé_phủ.value) < bộ_vé.số_vé_tối_thiểu) {
      console.warn(
        `cần tối thiểu ${bộ_vé.số_vé_tối_thiểu} vé để đảm bảo, nên đã dùng ${bộ_vé.số_vé_tối_thiểu} vé thay vì ${Number(số_vé_bộ_vé_phủ.value)}`,
      )
    } else if (bộ_vé.vé.length > bộ_vé.số_vé_tối_thiểu) {
      console.log(
        `${bộ_vé.số_vé_tối_thiểu} vé đầu bảo đảm mức trúng, ${bộ_vé.vé.length - bộ_vé.số_vé_tối_thiểu} vé thêm giúp tăng cơ hội trúng mức cao hơn`,
      )
    }
    console.log(
      `số vé: ${bộ_vé.vé.length}, chi phí: ${định_dạng_tiền.format(bộ_vé.chi_phí)}, đảm bảo trúng ít nhất ${bộ_vé.mức_đảm_bảo} số khi có từ ${bộ_vé.mức_đảm_bảo} số trúng nằm trong nhóm (xác suất ${(bộ_vé.xác_suất_đạt_đảm_bảo * 100).toFixed(2)}%)`,
    )
    console.log(
      `điểm phổ biến trung bình: ${bộ_vé.điểm_phổ_biến_trung_bình} (vé ngẫu nhiên: ${bộ_vé.điểm_phổ_biến_vé_ngẫu_nhiên}, càng thấp càng ít người trùng)`,
    )
    if (kỳ_sau) {
      in_đánh_giá_vé(
        bộ_vé.vé.map((vé) => vé.map((số) => String(số).padStart(2, '0'))),
        kỳ_sau,
      )
    } else {
      console.log('kỳ mới nhất, chưa có kết quả kỳ sau để đánh giá')
    }
    console.log(bộ_vé.vé.map((vé) => vé.join(' ')).join('\n'))
    console.groupEnd()
  } catch (lỗi) {
    console.warn((lỗi as Error).message)
  }
}

function lọc_dữ_liệu_theo_số_lần_xuất_hiện() {
  const vị_trí_xem = Number(vị_trí_xem_số_lần_xuất_hiện.value)
  const số_lần_xuất_hiện = Number(số_xuất_hiện_nhiều_lần.value)
  const từ_vị_trí = Number(từ_vị_trí_số_xuất_hiện_nhiều_lần.value)
  const chu_kỳ = Number(chu_kỳ_số_xuất_hiện_nhiều_lần.value)
  let tổng_số = 0
  console.group('Số xuất hiện nhiều lần')
  for (let i = từ_vị_trí; i < 3000; i++) {
    const danh_sách_số_lần_xuất_hiện = new Set<string>()
    dữ_liệu_xổ_số_55.slice(i, i + chu_kỳ).forEach((dữ_liệu) => {
      dữ_liệu.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.forEach((mục) => {
        const tổng_số_xuất_hiện = mục.tổng_xuất_hiện
        if (tổng_số_xuất_hiện >= số_lần_xuất_hiện && danh_sách_số_lần_xuất_hiện.size < 6) {
          danh_sách_số_lần_xuất_hiện.add(mục.số_xuất_hiện)
        }
      })
    })
    const tổng = dữ_liệu_xổ_số_55[vị_trí_xem].kết_quả_xổ_số.filter((số) =>
      danh_sách_số_lần_xuất_hiện.has(số),
    ).length
    if (danh_sách_số_lần_xuất_hiện.size >= 6) {
      tổng_số++
      if (tổng >= 3) {
        console.log([...danh_sách_số_lần_xuất_hiện.values()].join(', '))
        console.log(`tổng số trùng với kết quả xổ số tại vị trí ${vị_trí_xem}: ${tổng}`)
      }
    }
  }
  console.log('tổng số dự đoán: ', tổng_số)

  console.groupEnd()
}

function dự_đoán_bằng_cách_tăng(loại: number) {
  const giá_trị_đơn_vị = Number(đơn_vị.value)
  const giá_trị_được_dự_đoán = Number(đơn_vị_được_dự_đoán.value)
  const danh_sách_dữ_liệu = loại === 55 ? dữ_liệu_xổ_số_55 : dữ_liệu_xổ_số_45
  const số_giống_kết_quả = new Set<number>()
  const tổng_số_dự_đoán = new Set<number>()

  if (giá_trị_được_dự_đoán < 0) {
    for (let i = giá_trị_được_dự_đoán + 1; i < giá_trị_được_dự_đoán + 11; i++) {
      const dữ_liệu_dự_đoán2 = danh_sách_dữ_liệu[i]
      const danh_sách_dự_đoán = dữ_liệu_dự_đoán2.kết_quả_xổ_số.map((số) => {
        let số_mới = (Number(số) + giá_trị_đơn_vị) % loại
        số_mới = số_mới === 0 ? loại : số_mới
        tổng_số_dự_đoán.add(số_mới)
        return số_mới
      })
      console.log(`dự đoán kỳ ${dữ_liệu_dự_đoán2.ngày_xổ_số}: ${danh_sách_dự_đoán.join(', ')}`)
    }
  } else {
    const dữ_liệu_dự_đoán = danh_sách_dữ_liệu[giá_trị_được_dự_đoán]
    const danh_sách_đánh_giá = dữ_liệu_dự_đoán.kết_quả_xổ_số
    for (let i = giá_trị_được_dự_đoán + 1; i < danh_sách_dữ_liệu.length; i++) {
      const dữ_liệu_dự_đoán2 = danh_sách_dữ_liệu[i]
      const danh_sách_dự_đoán = dữ_liệu_dự_đoán2.kết_quả_xổ_số.map((số) => {
        let số_mới = (Number(số) + giá_trị_đơn_vị) % loại
        số_mới = số_mới === 0 ? loại : số_mới
        tổng_số_dự_đoán.add(số_mới)
        return số_mới
      })
      const tổng = danh_sách_đánh_giá.filter((số) => {
        const có = danh_sách_dự_đoán.includes(Number(số))
        if (có) {
          số_giống_kết_quả.add(Number(số))
        }
        return có
      }).length
      console.log(
        `dự đoán kỳ ${dữ_liệu_dự_đoán2.ngày_xổ_số}: ${danh_sách_dự_đoán.join(', ')} → trùng ${tổng} số`,
      )
    }
    console.log('các số được dự đoán:', [...số_giống_kết_quả.values()].join(', '))
    console.log(
      'các số được dự đoán:',
      [...tổng_số_dự_đoán.values()].join(', '),
      tổng_số_dự_đoán.size,
    )
  }
}
</script>

<template>
  <div
    :style="{
      'padding-left': '20px',
      display: 'flex',
      'flex-direction': 'column',
      gap: '20px',
      position: 'relative',
      'z-index': '1',
    }"
  >
    <div
      :style="{
        position: 'sticky',
        top: '0px',
        background: '#0a0a1a',
        padding: '4px',
        zIndex: 1,
        display: 'flex',
        'flex-direction': 'row',
        gap: '12px',
      }"
    >
      <div>
        <div :style="{ display: 'flex', gap: '20px', 'align-items': 'center' }">
          <div>
            <select v-model="số_dữ_liệu_sẽ_được_hiển_thị">
              <option
                v-for="giá_trị in các_tùy_chọn_để_hiển_thị_dữ_liệu"
                :key="giá_trị"
                :value="giá_trị"
              >
                {{ giá_trị }}
              </option>
            </select>
          </div>
        </div>
        <div>
          Hôm nay dự đoán cho:
          <span :style="{ color: 'greenyellow', fontSize: '18px' }">{{
            mở_xổ_số_loại_tiếp_theo
          }}</span>
        </div>
        <div>
          <div :style="{ display: 'flex', 'align-items': 'center' }">
            <div :style="{ background: 'red', width: '10px', height: '10px' }"></div>
            Kết quả dự đoán
            <input v-model="màu_kết_quả_dự_đoán" type="checkbox" />
          </div>
          <div :style="{ display: 'flex', 'align-items': 'center' }">
            <div :style="{ background: 'blue', width: '10px', height: '10px' }"></div>
            Kết quả hiện tại
            <input v-model="màu_kết_quả_hiện_tại" type="checkbox" />
          </div>
        </div>
        <div>
          <button @click="dự_đoán_bằng_cách_tăng(55)">Dự đoán bằng tăng 55</button>
          <button @click="dự_đoán_bằng_cách_tăng(45)">Dự đoán bằng tăng 45</button>
          dự đoán cho:
          <input v-model="đơn_vị_được_dự_đoán" type="text" :style="{ width: '20px' }" /> đơn vị:
          <input v-model="đơn_vị" type="text" :style="{ width: '20px' }" />
        </div>
        <div>Hiển thị chi tiết: <input v-model="có_hiển_thị_chi_tiết" type="checkbox" /></div>
        <template v-if="có_hiển_thị_chi_tiết">
          <div :style="{ color: '#7dd3fc' }">
            *1* Cho: Xem dự đoán
            <div>
              - Lọc ít nhất
              <select v-model="lọc_số_trùng_trong_cột">
                <option v-for="giá_trị in [-1, 1, 2, 3]" :key="giá_trị" :value="giá_trị">
                  {{ giá_trị }}
                </option>
              </select>
              cột có từ 2 số trở lên
            </div>
            <div>
              - Lọc mỗi hàng tối đa
              <select v-model="lọc_số_cùng_hàng">
                <option v-for="giá_trị in [-1, 2, 3, 4]" :key="giá_trị" :value="giá_trị">
                  {{ giá_trị }}
                </option>
              </select>
              số (điều kiện or, -1 là không lọc) *1*
            </div>
          </div>
        </template>
      </div>

      <div>
        <div>
          <div>
            <button @click="xóa_hết_bộ_nhớ_đệm">Xoá hết bộ nhớ đệm</button>
          </div>
          <div :style="{ color: '#7dd3fc' }">
            <div>
              *1*
              <button @click="thống_kê_dự_đoán(dữ_liệu_xổ_số_55)">thống kê dự đoán 55</button>
              <button @click="thống_kê_dự_đoán(dữ_liệu_xổ_số_45)">thống kê dự đoán 45</button>
              để lưu vào indexed DB
            </div>
            <div>
              từ Indexed DB<button @click="phân_tích_và_dự_đoán(dữ_liệu_xổ_số_55)">
                phân tích và dự đoán 55</button
              ><button @click="phân_tích_và_dự_đoán(dữ_liệu_xổ_số_45)">
                phân tích và dự đoán 45
              </button>
              chỉ mục
              <input
                type="text"
                v-model="vị_trí_phân_tích"
                placeholder="Nhập vị trí phân tích"
                :style="{ width: '20px' }"
              />
              danh sách dự đoán
              <input
                type="text"
                v-model="vị_trí_dự_đoán"
                placeholder="Nhập vị trí dự đoán"
                :style="{ width: '20px' }"
              />
              <div>
                lọc nhóm từng trúng ở danh sách số
                <input type="text" v-model="danh_sách_dự_đoán" :style="{ width: '20px' }" />
                (khi chọn chỉ mục = 0) *1*
              </div>
            </div>
          </div>
        </div>
        <div :style="{ color: '#fcd34d' }">
          *2* Số Xuất hiện nhiều lần: vị trí dự đoán:
          <input v-model="vị_trí_xem_số_lần_xuất_hiện" type="text" :style="{ width: '20px' }" />
          bao nhiêu lần:
          <input v-model="số_xuất_hiện_nhiều_lần" type="text" :style="{ width: '20px' }" />
          từ vị trí:
          <input
            v-model="từ_vị_trí_số_xuất_hiện_nhiều_lần"
            type="text"
            :style="{ width: '20px' }"
          />
          xem bao nhiêu:
          <input v-model="chu_kỳ_số_xuất_hiện_nhiều_lần" type="text" :style="{ width: '20px' }" />
          <button @click="lọc_dữ_liệu_theo_số_lần_xuất_hiện()">Lọc</button> *2*
        </div>
        <div :style="{ color: '#86efac' }">
          *3* Bộ vé phủ: kỳ
          <input v-model="vị_trí_kỳ_bộ_vé_phủ" type="text" :style="{ width: '30px' }" />
          nhóm
          <input v-model="kích_thước_nhóm_số" type="text" :style="{ width: '20px' }" />
          số, đảm bảo trúng
          <input v-model="mức_đảm_bảo_trúng" type="text" :style="{ width: '20px' }" />
          số, số vé
          <input v-model="số_vé_bộ_vé_phủ" type="text" :style="{ width: '30px' }" />
          <button @click="tạo_và_in_bộ_vé(55)">tạo vé 55</button>
          <button @click="tạo_và_in_bộ_vé(45)">tạo vé 45</button>
          ngày dự đoán
          <select v-model="ngày_dự_đoán_đối_chiếu">
            <option value="">tất cả</option>
            <option v-for="ngày in các_ngày_dự_đoán_đã_lưu" :key="ngày" :value="ngày">
              {{ ngày }}
            </option>
          </select>
          <button @click="đối_chiếu_vé_đã_lưu('vé phủ')">đối chiếu vé đã lưu</button> *3*
        </div>
        <div :style="{ color: '#f9a8d4' }">
          *4* Vé mục tiêu (55: {{ SỐ_VÉ_MỤC_TIÊU[55] }}, 45: {{ SỐ_VÉ_MỤC_TIÊU[45] }}) chiến lược
          <select v-model="chiến_lược_vé">
            <option v-for="tên in Object.keys(CÁC_CHIẾN_LƯỢC)" :key="tên" :value="tên">
              {{ tên }}
            </option>
          </select>
          <button @click="tạo_và_in_vé_kỳ_tới(dữ_liệu_xổ_số_55)">vé kỳ tới 55</button>
          <button @click="tạo_và_in_vé_kỳ_tới(dữ_liệu_xổ_số_45)">vé kỳ tới 45</button>
          ngày đối chiếu
          <select v-model="ngày_đối_chiếu_vé_mục_tiêu">
            <option value="">tất cả</option>
            <option v-for="ngày in các_ngày_vé_mục_tiêu_đã_lưu" :key="ngày" :value="ngày">
              {{ ngày }}
            </option>
          </select>
          <button @click="đối_chiếu_vé_đã_lưu('vé mục tiêu')">đối chiếu vé đã lưu</button> *4*
        </div>
        <div :style="{ color: '#c4b5fd' }">
          *5* Vé từ danh sách xuất hiện (công thức cố định, ít nhất 1 cột 2 số, mỗi hàng tối đa 3 số):
          kỳ
          <input v-model="vị_trí_kỳ_tạo_vé" type="text" :style="{ width: '30px' }" />
          danh sách
          <input v-model="chỉ_số_ds_tạo_vé" type="text" :style="{ width: '20px' }" />
          số vé
          <input v-model="số_vé_từ_danh_sách" type="text" :style="{ width: '40px' }" />
          <button @click="tạo_và_in_vé_từ_danh_sách(dữ_liệu_xổ_số_55)">tạo 55</button>
          <button @click="tạo_và_in_vé_từ_danh_sách(dữ_liệu_xổ_số_45)">tạo 45</button>
          ngày đối chiếu
          <select v-model="ngày_đối_chiếu_vé_danh_sách">
            <option value="">tất cả</option>
            <option v-for="ngày in các_ngày_vé_danh_sách_đã_lưu" :key="ngày" :value="ngày">
              {{ ngày }}
            </option>
          </select>
          <button @click="đối_chiếu_vé_đã_lưu('danh sách')">đối chiếu vé đã lưu</button> *5*
        </div>
      </div>
    </div>

    <div :style="{ display: 'flex', gap: '40px' }">
      <div :style="{ width: '700px' }">
        Tổng số dữ liệu 55: {{ danh_sách_dữ_liệu_hiển_thị_55?.length }}
      </div>
      <div :style="{ width: '700px' }">
        Tổng số dữ liệu 45: {{ danh_sách_dữ_liệu_hiển_thị_45?.length }}
      </div>
    </div>

    <div :style="{ display: 'flex', gap: '40px' }">
      <!--
        dành cho 55
      -->

      <div :style="{ width: '700px', display: 'flex', 'flex-direction': 'column', gap: '12px' }">
        <div
          v-for="(dữ_liệu, vị_trí) in danh_sách_dữ_liệu_hiển_thị_55?.slice(
            0,
            số_dữ_liệu_sẽ_được_hiển_thị,
          )"
          :key="`danh_sách_dữ_liệu-${vị_trí}`"
          :style="{ height: 'auto' }"
        >
          <div :style="{ display: 'flex' }">
            <div>{{ dữ_liệu.ngày_xổ_số }}::{{ dữ_liệu.tuần_xổ_số }}::{{ vị_trí }}::</div>
            <div :style="{ color: 'cyan' }">{{ dữ_liệu.kết_quả_xổ_số }}</div>
          </div>
          <template v-if="có_hiển_thị_chi_tiết">
            <div>Số kết quả có: {{ dữ_liệu.số_kết_quả_trong_các_số_đã_xuất_hiện }}</div>
            <div>Số lượng xuất hiện: {{ dữ_liệu.tập_các_số_đã_xuất_hiện.size }}</div>
            <div>Danh sách xuất hiện:</div>
            <component :is="() => hiển_thị_danh_sách_xuất_hiện(dữ_liệu, vị_trí)" />
            <div>tổng danh sách: {{ dữ_liệu.dự_đoán_ds_xuất_hiện.length }}</div>
            <div>
              <button @click="xem_dự_đoán_cho_tất_cả(dữ_liệu_xổ_số_55, dữ_liệu)">
                xem dự đoán
              </button>

              <button
                @click="
                  dữ_liệu.hiển_thị_dự_đoán_ds_xuất_hiện = !dữ_liệu.hiển_thị_dự_đoán_ds_xuất_hiện
                "
              >
                xem danh sách
              </button>
            </div>
            <div
              v-if="
                dữ_liệu.dự_đoán_ds_xuất_hiện.length > 0 && dữ_liệu.hiển_thị_dự_đoán_ds_xuất_hiện
              "
              :style="{ display: 'flex', flexDirection: 'column', gap: '12px' }"
            >
              <div v-for="(ds, vị_trí_xh) in dữ_liệu.dự_đoán_ds_xuất_hiện" :key="`${vị_trí_xh}ds`">
                <div>
                  {{ vị_trí_xh
                  }}<component :is="() => hiển_thị_ds_dự_đoán_xuất_hiện(ds, dữ_liệu)" />
                </div>
                <button @click="xem_dự_đoán_cho_tất_cả(dữ_liệu_xổ_số_55, dữ_liệu, vị_trí_xh)">
                  xem dự đoán
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--
        dành cho 45
      -->

      <div :style="{ width: '700px', display: 'flex', 'flex-direction': 'column', gap: '12px' }">
        <div
          v-for="(dữ_liệu, vị_trí) in danh_sách_dữ_liệu_hiển_thị_45?.slice(
            0,
            số_dữ_liệu_sẽ_được_hiển_thị,
          )"
          :key="`danh_sách_dữ_liệu-${vị_trí}`"
          :style="{ height: 'auto' }"
        >
          <div :style="{ display: 'flex' }">
            <div>{{ dữ_liệu.ngày_xổ_số }}::{{ dữ_liệu.tuần_xổ_số }}::{{ vị_trí }}::</div>
            <div :style="{ color: 'cyan' }">{{ dữ_liệu.kết_quả_xổ_số }}</div>
          </div>
          <template v-if="có_hiển_thị_chi_tiết">
            <div>Số kết quả có: {{ dữ_liệu.số_kết_quả_trong_các_số_đã_xuất_hiện }}</div>
            <div>Số lượng xuất hiện: {{ dữ_liệu.tập_các_số_đã_xuất_hiện.size }}</div>
            <div>Danh sách xuất hiện:</div>
            <component :is="() => hiển_thị_danh_sách_xuất_hiện(dữ_liệu, vị_trí)" />
            <div>tổng danh sách: {{ dữ_liệu.dự_đoán_ds_xuất_hiện.length }}</div>
            <div>
              <button @click="xem_dự_đoán_cho_tất_cả(dữ_liệu_xổ_số_45, dữ_liệu)">
                xem dự đoán
              </button>
              <button
                @click="
                  dữ_liệu.hiển_thị_dự_đoán_ds_xuất_hiện = !dữ_liệu.hiển_thị_dự_đoán_ds_xuất_hiện
                "
              >
                xem danh sách
              </button>
            </div>
            <div
              v-if="
                dữ_liệu.dự_đoán_ds_xuất_hiện.length > 0 && dữ_liệu.hiển_thị_dự_đoán_ds_xuất_hiện
              "
              :style="{ display: 'flex', flexDirection: 'column', gap: '12px' }"
            >
              <div v-for="(ds, vị_trí_xh) in dữ_liệu.dự_đoán_ds_xuất_hiện" :key="`${vị_trí_xh}ds`">
                <div>
                  {{ vị_trí_xh
                  }}<component :is="() => hiển_thị_ds_dự_đoán_xuất_hiện(ds, dữ_liệu)" />
                </div>
                <button @click="xem_dự_đoán_cho_tất_cả(dữ_liệu_xổ_số_45, dữ_liệu, vị_trí_xh)">
                  xem dự đoán
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
body {
  background: radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%);
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
