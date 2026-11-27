<script setup lang="ts">
import { ref, h } from 'vue'
import moment from 'moment'

import {
  lấy_dữ_liệu_xổ_số_45,
  lấy_dữ_liệu_xổ_số_55,
  tạo_ds_xuất_hiện_kèm_số_lần,
  xữ_lý_dữ_liệu_xuất_hiện,
} from '@/composables/lote'

import {
  đọc_bộ_nhớ_đệm,
  ghi_bộ_nhớ_đệm,
  TIỀN_TỐ_DS_DỰ_ĐOÁN,
  tạo_dấu_vân_tay,
  type Dự_Đoán_Đã_Lưu,
} from '@/composables/prediction-cache'

import { Đối_Tượng_Xổ_Số } from '@/types/lote'

import { tạo_tùy_chọn_để_hiển_thị } from '@/utils'

// số lượng số xuất hiện để một danh sách dự đoán được chấp nhận (xem tạo_ds_xuất_hiện)
const SỐ_XUẤT_HIỆN_45 = 40
const SỐ_XUẤT_HIỆN_55 = 46
// tăng số này khi đổi thuật toán tạo danh sách dự đoán để bỏ cache cũ trong IndexedDB
const PHIÊN_BẢN_BỘ_NHỚ_ĐỆM = 2

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

// đóng/mở phần đầu trang (các nút dính ở trên cùng) để có thêm chỗ xem
const đang_mở_đầu_trang = ref<boolean>(true)

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
      đã_lưu.số_lần_xuất_hiện_ds?.length === danh_sách_dữ_liệu.length &&
      đã_lưu.vị_trí_ds_xuất_hiện.length === danh_sách_dữ_liệu.length
    ) {
      danh_sách_dữ_liệu.forEach((dữ_liệu, vị_trí) => {
        dữ_liệu.dự_đoán_ds_xuất_hiện = đã_lưu.dự_đoán_ds_xuất_hiện[vị_trí]
        dữ_liệu.số_lần_xuất_hiện_ds = đã_lưu.số_lần_xuất_hiện_ds[vị_trí]
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
      số_lần_xuất_hiện_ds: danh_sách_dữ_liệu.map((dữ_liệu) => dữ_liệu.số_lần_xuất_hiện_ds),
      vị_trí_ds_xuất_hiện: danh_sách_dữ_liệu.map((dữ_liệu) => dữ_liệu.vị_trí_ds_xuất_hiện),
    })
    console.log(`đã tạo và lưu danh sách dự đoán ${loại_xổ_số} vào bộ nhớ đệm`)
  }
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

function hiển_thị_ds_dự_đoán_xuất_hiện(
  danh_sách: string[],
  dữ_liệu: Đối_Tượng_Xổ_Số,
  vị_trí_danh_sách: number,
) {
  const số_lần = dữ_liệu.số_lần_xuất_hiện_ds[vị_trí_danh_sách] || []
  const kết_quả_sau_đó = dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số || []
  const kết_quả_hiện_tại = dữ_liệu.kết_quả_xổ_số || []
  return h(
    'div',
    { style: { width: '240px', display: 'flex', flexWrap: 'wrap' } },
    danh_sách.map((số_dự_đoán, vị_trí) =>
      h(
        'div',
        { key: `row-dự_đoán${vị_trí}`, style: { width: '40px' } },
        h(
          'span',
          {
            style: {
              color: kết_quả_sau_đó.includes(số_dự_đoán) ? 'red' : null,
              border: kết_quả_hiện_tại.includes(số_dự_đoán) ? '1px solid blue' : null,
            },
          },
          // số kèm số lần xuất hiện, ví dụ "07:3"
          số_lần[vị_trí] === undefined ? `${số_dự_đoán}` : `${số_dự_đoán}:${số_lần[vị_trí]}`,
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
  const ds_xuất_hiện = tạo_ds_xuất_hiện_kèm_số_lần(
    danh_sách_dữ_liệu,
    danh_sách_dữ_liệu_khác,
    dữ_liệu,
    vị_trí_dữ_liệu,
    dữ_liệu.loại_xổ_số === 55 ? SỐ_XUẤT_HIỆN_55 : SỐ_XUẤT_HIỆN_45,
  )
  dữ_liệu.dự_đoán_ds_xuất_hiện = ds_xuất_hiện.danh_sách
  dữ_liệu.số_lần_xuất_hiện_ds = ds_xuất_hiện.số_lần

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
      ...dữ_liệu_tiếp_theo.vị_trí_ds_xuất_hiện)
  }

  console.log('tất cả vị trí dự đoán: ', tất_cả_ds_vị_trí_dự_đoán.length)

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
        'flex-direction': 'column',
        gap: '4px',
      }"
    >
      <div
        v-show="đang_mở_đầu_trang"
        :style="{ display: 'flex', 'flex-direction': 'row', gap: '12px' }"
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
          <div>Hiển thị chi tiết: <input v-model="có_hiển_thị_chi_tiết" type="checkbox" /></div>
        </div>
      </div>
      <div :style="{ textAlign: 'center' }">
        <button
          :style="{ width: '120px' }"
          :title="đang_mở_đầu_trang ? 'đóng phần đầu trang' : 'mở phần đầu trang'"
          @click="đang_mở_đầu_trang = !đang_mở_đầu_trang"
        >
          {{ đang_mở_đầu_trang ? '▲' : '▼' }}
        </button>
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
                  }}<component :is="() => hiển_thị_ds_dự_đoán_xuất_hiện(ds, dữ_liệu, vị_trí_xh)" />
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
                  }}<component :is="() => hiển_thị_ds_dự_đoán_xuất_hiện(ds, dữ_liệu, vị_trí_xh)" />
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
