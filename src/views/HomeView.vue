<script setup lang="ts">
import { ref, h } from 'vue'
import moment from 'moment'

import { lấy_dữ_liệu_xổ_số_45, lấy_dữ_liệu_xổ_số_55, tạo_ds_xuất_hiện } from '@/composables/lote'

import { chạy_backtest } from '@/composables/backtest'
import { phân_tích_ghép_chéo } from '@/composables/cross-analysis'
import { tạo_bộ_vé_phủ } from '@/composables/ticket-optimizer'
import {
  backtest_bộ_vé,
  CÁC_CHIẾN_LƯỢC,
  SỐ_VÉ_MỤC_TIÊU,
  tạo_danh_sách_vé,
  xác_suất_một_vé,
} from '@/composables/ticket-portfolio'
import {
  đọc_bộ_nhớ_đệm,
  ghi_bộ_nhớ_đệm,
  tạo_dấu_vân_tay,
  type Dự_Đoán_Đã_Lưu,
} from '@/composables/prediction-cache'
import { dịch_vụ_indexeddb, type Vị_Trí_Lặp_Lại } from '@/composables/indexeddb-service'

import { Đối_Tượng_Xổ_Số, type Loại_Dữ_Liệu_Xuât_Hiện } from '@/types/lote'

import { tạo_tùy_chọn_để_hiển_thị } from '@/utils'
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

const có_hiển_thị_chi_tiết = ref<boolean>(false)

// bộ lọc bộ vị trí khi xem dự đoán; -1 là không lọc, hai điều kiện đặt cùng lúc thì chỉ cần thỏa một (or)
const SỐ_VỊ_TRÍ_MỖI_HÀNG = 6
const lọc_số_trùng_trong_cột = ref<number>(-1)
const lọc_số_cùng_hàng = ref<number>(-1)

// đếm số nhóm (cột hoặc hàng) chứa `số_lượng` vị trí: đúng số_lượng, hoặc từ số_lượng trở lên
function đếm_nhóm_chứa(
  ds_vị_trí: number[],
  số_lượng: number,
  lấy_nhóm: (vị_trí: number) => number,
  từ_số_lượng_trở_lên: boolean,
) {
  const số_vị_trí_mỗi_nhóm = new Map<number, number>()
  ds_vị_trí.forEach((vị_trí) => {
    const nhóm = lấy_nhóm(vị_trí)
    số_vị_trí_mỗi_nhóm.set(nhóm, (số_vị_trí_mỗi_nhóm.get(nhóm) ?? 0) + 1)
  })
  return [...số_vị_trí_mỗi_nhóm.values()].filter((số_vị_trí) =>
    từ_số_lượng_trở_lên ? số_vị_trí >= số_lượng : số_vị_trí === số_lượng,
  ).length
}

function qua_bộ_lọc_vị_trí(ds_vị_trí: number[]): boolean {
  const số_trùng_cột = Number(lọc_số_trùng_trong_cột.value)
  const số_cùng_hàng = Number(lọc_số_cùng_hàng.value)
  if (số_trùng_cột === -1 && số_cùng_hàng === -1) return true

  return (
    // cột: ít nhất N cột có từ 2 số trở lên (3, 4 số trên cùng cột cũng tính), N tối đa 3 vì chỉ có 6 số
    (số_trùng_cột !== -1 &&
      đếm_nhóm_chứa(ds_vị_trí, 2, (vị_trí) => vị_trí % SỐ_VỊ_TRÍ_MỖI_HÀNG, true) >= số_trùng_cột) ||
    // hàng: có hàng chứa đúng số lượng đã chọn
    (số_cùng_hàng !== -1 &&
      đếm_nhóm_chứa(
        ds_vị_trí,
        số_cùng_hàng,
        (vị_trí) => Math.floor(vị_trí / SỐ_VỊ_TRÍ_MỖI_HÀNG),
        false,
      ) >= 1)
  )
}

const chiến_lược_vé = ref<string>('ngẫu_nhiên')
const TẤT_CẢ_CHIẾN_LƯỢC = 'tất_cả'
const kích_thước_nhóm_số = ref<number>(12)
const mức_đảm_bảo_trúng = ref<number>(3)

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
    const khóa = `ds_dự_đoán_${loại_xổ_số}`
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
    tất_cả_ds_vị_trí_dự_đoán.push(...dữ_liệu_tiếp_theo.vị_trí_ds_xuất_hiện.filter(qua_bộ_lọc_vị_trí))
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
  const ghi_nhận_vị_trí_lặp_lại = (trùng: number, ds_vị_trí: number[], k: number, i: number) => {
    const ds_đã_sắp_xếp = [...ds_vị_trí].sort((a, b) => a - b)
    const khóa = `${trùng}|${ds_đã_sắp_xếp.join(',')}`
    const vị_trí_tồn_tại = chỉ_mục_vị_trí.get(khóa)
    if (vị_trí_tồn_tại) {
      vị_trí_tồn_tại.tổng_xuất_hiện += 1
      vị_trí_tồn_tại.xuất_hiện.push(k)
      vị_trí_tồn_tại.danh_sách.push(i)
    } else {
      const vị_trí_mới: Vị_Trí_Lặp_Lại = {
        ds_vị_trí: ds_đã_sắp_xếp,
        tổng_xuất_hiện: 1,
        trùng,
        xuất_hiện: [k],
        danh_sách: [i],
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
          )
        }
        if (tổng === 6) {
          ghi_nhận_vị_trí_lặp_lại(6, ds_vị_trí, k, i)
        }
      }
    }

    tất_cả_ds_vị_trí_dự_đoán.push(...dữ_liệu.vị_trí_ds_xuất_hiện)
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
    } else {
      dữ_liệu_nhóm.push({
        ds_vị_trí: item.ds_vị_trí,
        tổng_xuất_hiện: item.tổng_xuất_hiện,
        trùng: item.trùng,
        xuất_hiện: [...item.xuất_hiện],
        danh_sách: [...item.danh_sách],
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

function chạy_backtest_và_in_kết_quả(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  const kết_quả = chạy_backtest(danh_sách_dữ_liệu)
  const định_dạng_tiền = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

  console.group(`Backtest ${kết_quả.loại_xổ_số}`)
  console.log(`số kỳ đã thử: ${kết_quả.số_kỳ_đã_thử}, tổng vé: ${kết_quả.tổng_vé}`)
  console.log(
    `chi phí: ${định_dạng_tiền.format(kết_quả.chi_phí)}, tiền thắng: ${định_dạng_tiền.format(kết_quả.tiền_thắng)}, lãi/lỗ: ${định_dạng_tiền.format(kết_quả.lãi_lỗ)}`,
  )
  console.table(kết_quả.các_dòng)
  console.log('z > 3: hơn ngẫu nhiên đáng kể; z gần 0: không khác ngẫu nhiên')
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
  const vé = tạo_danh_sách_vé(loại_xổ_số, số_vé, chiến_lược(danh_sách_dữ_liệu, loại_xổ_số))

  console.group(`Vé kỳ tới ${loại_xổ_số} (${chiến_lược_vé.value})`)
  console.log(
    `${vé.length}/${số_vé} vé, xác suất có vé trúng từ 5 số: ${(vé.length * xác_suất_một_vé(loại_xổ_số).từ_5 * 100).toFixed(3)}%`,
  )
  console.log(vé.map((một_vé) => một_vé.map((số) => String(số).padStart(2, '0')).join(' ')).join('\n'))
  console.groupEnd()
}

async function chạy_backtest_vé(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  const loại_xổ_số = danh_sách_dữ_liệu[0].loại_xổ_số
  const danh_sách_chiến_lược =
    chiến_lược_vé.value === TẤT_CẢ_CHIẾN_LƯỢC ? Object.keys(CÁC_CHIẾN_LƯỢC) : [chiến_lược_vé.value]

  console.group(`Backtest vé ${loại_xổ_số}: ${SỐ_VÉ_MỤC_TIÊU[loại_xổ_số]} vé mỗi kỳ`)
  const các_dòng = []
  for (const chiến_lược of danh_sách_chiến_lược) {
    // nhường luồng giữa các chiến lược để trang không bị treo
    await new Promise((giải_quyết) => setTimeout(giải_quyết))
    các_dòng.push(backtest_bộ_vé(danh_sách_dữ_liệu, chiến_lược))
  }
  console.table(các_dòng)
  console.log('z dưới 2 là chưa kết luận được gì (kỳ vọng chỉ cỡ chục kỳ trúng)')
  console.groupEnd()
}

function tạo_và_in_bộ_vé(loại_xổ_số: number) {
  try {
    const bộ_vé = tạo_bộ_vé_phủ(
      loại_xổ_số,
      Number(kích_thước_nhóm_số.value),
      Number(mức_đảm_bảo_trúng.value),
    )
    const định_dạng_tiền = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

    console.group(`Bộ vé phủ ${loại_xổ_số}`)
    console.log('nhóm số: ', bộ_vé.nhóm_số.join(', '))
    console.log(
      `số vé: ${bộ_vé.vé.length}, chi phí: ${định_dạng_tiền.format(bộ_vé.chi_phí)}, đảm bảo trúng ít nhất ${bộ_vé.mức_đảm_bảo} số khi có từ ${bộ_vé.mức_đảm_bảo} số trúng nằm trong nhóm (xác suất ${(bộ_vé.xác_suất_đạt_đảm_bảo * 100).toFixed(2)}%)`,
    )
    console.log(
      `điểm phổ biến trung bình: ${bộ_vé.điểm_phổ_biến_trung_bình} (vé ngẫu nhiên: ${bộ_vé.điểm_phổ_biến_vé_ngẫu_nhiên}, càng thấp càng ít người trùng)`,
    )
    console.log(bộ_vé.vé.map((vé) => vé.join(' ')).join('\n'))
    console.groupEnd()
  } catch (lỗi) {
    console.warn((lỗi as Error).message)
  }
}

function chạy_phân_tích_ghép_chéo() {
  console.group('Ghép chéo 45 và 55')
  phân_tích_ghép_chéo(dữ_liệu_xổ_số_45, dữ_liệu_xổ_số_55).forEach((kết_quả) => {
    console.log(`loại ${kết_quả.loại_xổ_số}: ${kết_quả.số_bộ_ba_kỳ} bộ ba kỳ (A, B, C)`)
    console.table(kết_quả.các_dòng)
  })
  console.log('A: kỳ trước cùng loại; B: kỳ khác loại nằm giữa; C: kỳ cần dự đoán. z > 3: có tín hiệu')
  console.groupEnd()
}

function lọc_dữ_liệu_theo_số_lần_xuất_hiện() {
  const vị_trí_xem = Number(vị_trí_xem_số_lần_xuất_hiện.value)
  const số_lần_xuất_hiện = Number(số_xuất_hiện_nhiều_lần.value)
  const từ_vị_trí = Number(từ_vị_trí_số_xuất_hiện_nhiều_lần.value)
  const chu_kỳ = Number(chu_kỳ_số_xuất_hiện_nhiều_lần.value)
  for (let i = từ_vị_trí; i < 100; i++) {
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
    if (danh_sách_số_lần_xuất_hiện.size >= 6 && tổng >= 2) {
      console.group('Số xuất hiện nhiều lần')
      console.log([...danh_sách_số_lần_xuất_hiện.values()].join(', '))
      console.log(`tổng số trùng với kết quả xổ số tại vị trí ${vị_trí_xem}: ${tổng}`)
      console.groupEnd()
    }
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
        <div>Hiển thị chi tiết: <input v-model="có_hiển_thị_chi_tiết" type="checkbox" /></div>
        <template v-if="có_hiển_thị_chi_tiết">
          <div>
            Lọc ít nhất
            <select v-model="lọc_số_trùng_trong_cột">
              <option v-for="giá_trị in [-1, 1, 2, 3]" :key="giá_trị" :value="giá_trị">
                {{ giá_trị }}
              </option>
            </select>
            cột có từ 2 số trở lên
          </div>
          <div>
            Lọc có hàng chứa đúng
            <select v-model="lọc_số_cùng_hàng">
              <option v-for="giá_trị in [-1, 2, 3, 4]" :key="giá_trị" :value="giá_trị">
                {{ giá_trị }}
              </option>
            </select>
            số (điều kiện or, -1 là không lọc)
          </div>
        </template>
      </div>

      <div>
        <div>
          <div>
            <button @click="thống_kê_dự_đoán(dữ_liệu_xổ_số_55)">thống kê dự đoán 55</button>
            <button @click="thống_kê_dự_đoán(dữ_liệu_xổ_số_45)">thống kê dự đoán 45</button>
            để lưu vào indexed DB
          </div>
          <div>
            <button @click="chạy_backtest_và_in_kết_quả(dữ_liệu_xổ_số_55)">backtest 55</button>
            <button @click="chạy_backtest_và_in_kết_quả(dữ_liệu_xổ_số_45)">backtest 45</button>
            <button @click="chạy_phân_tích_ghép_chéo()">ghép chéo 45/55</button>
          </div>
          <div>
            từ Indexed DB<button @click="phân_tích_và_dự_đoán(dữ_liệu_xổ_số_55)">
              phân tích và dự đoán 55</button
            ><button @click="phân_tích_và_dự_đoán(dữ_liệu_xổ_số_45)">phân tích và dự đoán 45</button>
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
              danh sách dự đoán với (chỉ mục = 0)
              <input type="text" v-model="danh_sách_dự_đoán" :style="{ width: '20px' }" />
            </div>
          </div>
        </div>
        <div>
          Số Xuất hiện nhiều lần:
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
          <button @click="lọc_dữ_liệu_theo_số_lần_xuất_hiện()">Lọc</button>
        </div>
        <div>
          bộ vé phủ: nhóm
          <input v-model="kích_thước_nhóm_số" type="text" :style="{ width: '20px' }" />
          số, đảm bảo trúng
          <input v-model="mức_đảm_bảo_trúng" type="text" :style="{ width: '20px' }" />
          số
          <button @click="tạo_và_in_bộ_vé(55)">tạo vé 55</button>
          <button @click="tạo_và_in_bộ_vé(45)">tạo vé 45</button>
        </div>
        <div>
          vé mục tiêu (55: {{ SỐ_VÉ_MỤC_TIÊU[55] }}, 45: {{ SỐ_VÉ_MỤC_TIÊU[45] }}) chiến lược
          <select v-model="chiến_lược_vé">
            <option v-for="tên in Object.keys(CÁC_CHIẾN_LƯỢC)" :key="tên" :value="tên">
              {{ tên }}
            </option>
            <option :value="TẤT_CẢ_CHIẾN_LƯỢC">{{ TẤT_CẢ_CHIẾN_LƯỢC }} (chỉ backtest)</option>
          </select>
          <button @click="tạo_và_in_vé_kỳ_tới(dữ_liệu_xổ_số_55)">vé kỳ tới 55</button>
          <button @click="tạo_và_in_vé_kỳ_tới(dữ_liệu_xổ_số_45)">vé kỳ tới 45</button>
          <button @click="chạy_backtest_vé(dữ_liệu_xổ_số_55)">backtest vé 55</button>
          <button @click="chạy_backtest_vé(dữ_liệu_xổ_số_45)">backtest vé 45</button>
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
