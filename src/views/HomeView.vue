<script setup lang="ts">
import _ from 'lodash'
import { ref } from 'vue'
import moment from 'moment'

import { lấy_dữ_liệu_xổ_số_45, lấy_dữ_liệu_xổ_số_55 } from '@/composables/lote'

import { Đối_Tượng_Xổ_Số, type Loại_Dữ_Liệu_Xuât_Hiện } from '@/types/lote'

import { tạo_tùy_chọn_để_hiển_thị } from '@/utils'

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

const danh_sách_dữ_liệu_hiển_thị_45 = ref<Array<Đối_Tượng_Xổ_Số>>()
const danh_sách_dữ_liệu_hiển_thị_55 = ref<Array<Đối_Tượng_Xổ_Số>>()

//
// chạy các hàm
//

chạy_chức_năng_chính(dữ_liệu_xổ_số_45, bù_trừ_cho_loại_xổ_số_45)
chạy_chức_năng_chính(dữ_liệu_xổ_số_55, bù_trừ_cho_loại_xổ_số_55)

function chạy_chức_năng_chính(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>, offset: number = 0) {
  const danh_sách_dữ_liệu_45_hoặc_55 =
    danh_sách_dữ_liệu[0].loại_xổ_số === 45 ? dữ_liệu_xổ_số_55 : dữ_liệu_xổ_số_45

  for (let vị_trí_dữ_liệu = 0; vị_trí_dữ_liệu < danh_sách_dữ_liệu.length; vị_trí_dữ_liệu++) {
    const dữ_liệu_1 = danh_sách_dữ_liệu[vị_trí_dữ_liệu]
    const dữ_liệu_2 = danh_sách_dữ_liệu_45_hoặc_55?.[vị_trí_dữ_liệu + offset]

    // dự đoán bằng ngày xổ số
    dữ_đoán_bằng_ngày_xổ_số(dữ_liệu_1, danh_sách_dữ_liệu, vị_trí_dữ_liệu)

    // dự đoán bằng tổng ngày
    dự_đoán_bằng_tổng_ngày(dữ_liệu_1, danh_sách_dữ_liệu, vị_trí_dữ_liệu)

    // dự đoán bằng tổng ngày tháng
    dự_đoán_bằng_tổng_ngày_tháng(dữ_liệu_1, danh_sách_dữ_liệu, vị_trí_dữ_liệu)

    // dự đoán bằng tổng trong ngày tháng
    dự_đoán_bằng_tổng_trong_ngày_tháng(dữ_liệu_1, danh_sách_dữ_liệu, vị_trí_dữ_liệu)

    // dự đoán bằng tổng trong ngày tháng năm
    dự_đoán_kết_quả_bằng_tổng_ngày_tháng_năm(dữ_liệu_1, danh_sách_dữ_liệu, vị_trí_dữ_liệu)

    // dự đoán bàng các số trùng
    dự_đoán_bằng_vị_trí_của_các_số_trùng(dữ_liệu_1, dữ_liệu_2, danh_sách_dữ_liệu, vị_trí_dữ_liệu)

    // xữ lý dữ liệu xuất hiện
    xữ_lý_dữ_liệu_xuất_hiện(danh_sách_dữ_liệu, dữ_liệu_1, dữ_liệu_2, vị_trí_dữ_liệu)
    dữ_liệu_1.số_kết_quả_trong_các_số_đã_xuất_hiện =
      dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((num) =>
        dữ_liệu_1.tập_các_số_đã_xuất_hiện.has(num),
      ).length || 0
  }
}

function dữ_đoán_bằng_ngày_xổ_số(
  dữ_liệu: Đối_Tượng_Xổ_Số,
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  vị_trí_dữ_liệu: number,
) {
  const ngày_xổ_số_tiếp_theo = new Date(dữ_liệu.dấu_thời_gian_kỳ_sau_đó)
  const ngày_xổ_số = ngày_xổ_số_tiếp_theo.getDate()
  const danh_sách_dự_đoán = danh_sách_dữ_liệu[ngày_xổ_số + vị_trí_dữ_liệu - 1]?.kết_quả_xổ_số || []
  const kết_quả_dư_đoán =
    dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((số_dự_đoán) =>
      danh_sách_dự_đoán.includes(số_dự_đoán),
    ).length || 0

  dữ_liệu.danh_sách_dự_đoán_bằng_ngày_xổ_số = danh_sách_dự_đoán
  dữ_liệu.kết_quả_dự_đoán_bằng_ngày_xổ_số = kết_quả_dư_đoán
}

function dự_đoán_bằng_tổng_ngày(
  dữ_liệu: Đối_Tượng_Xổ_Số,
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  vị_trí_dữ_liệu: number,
) {
  const ngày_xổ_số_tiếp_theo = new Date(dữ_liệu.dấu_thời_gian_kỳ_sau_đó)
  const tổng_ngày = ngày_xổ_số_tiếp_theo
    .getDate()
    .toString()
    .split('')
    .reduce((tổng, số) => tổng + Number(số), 0)
  const danh_sách_dự_đoán = danh_sách_dữ_liệu[tổng_ngày + vị_trí_dữ_liệu - 1]?.kết_quả_xổ_số || []
  const kết_quả_dư_đoán =
    dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((số_dự_đoán) =>
      danh_sách_dự_đoán.includes(số_dự_đoán),
    ).length || 0

  dữ_liệu.tổng_trong_ngày = tổng_ngày
  dữ_liệu.danh_sách_dự_đoán_bẳng_tổng_trong_ngày = danh_sách_dự_đoán
  dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày = kết_quả_dư_đoán
}

function dự_đoán_bằng_tổng_ngày_tháng(
  dữ_liệu: Đối_Tượng_Xổ_Số,
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  vị_trí_dữ_liệu: number,
) {
  const ngày_xổ_số_tiếp_theo = new Date(dữ_liệu.dấu_thời_gian_kỳ_sau_đó)
  const tổng_ngày_tháng = ngày_xổ_số_tiếp_theo.getDate() + (ngày_xổ_số_tiếp_theo.getMonth() + 1)
  const danh_sách_dự_đoán =
    danh_sách_dữ_liệu[tổng_ngày_tháng + vị_trí_dữ_liệu - 1]?.kết_quả_xổ_số || []
  const kết_quả_dư_đoán =
    dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((số_dự_đoán) =>
      danh_sách_dự_đoán.includes(số_dự_đoán),
    ).length || 0

  dữ_liệu.tổng_ngày_tháng = tổng_ngày_tháng
  dữ_liệu.danh_sách_dự_đoán_bằng_tổng_ngày_tháng = danh_sách_dự_đoán
  dữ_liệu.kết_quả_dự_đoán_bằng_tổng_ngày_tháng = kết_quả_dư_đoán
}

function dự_đoán_bằng_tổng_trong_ngày_tháng(
  dữ_liệu: Đối_Tượng_Xổ_Số,
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  vị_trí_dữ_liệu: number,
) {
  const ngày_xổ_số_tiếp_theo = new Date(dữ_liệu.dấu_thời_gian_kỳ_sau_đó)
  const tổng_trong_ngày_tháng =
    ngày_xổ_số_tiếp_theo
      .getDate()
      .toString()
      .split('')
      .reduce((tổng, số) => tổng + Number(số), 0) +
    (ngày_xổ_số_tiếp_theo.getMonth() + 1)
      .toString()
      .split('')
      .reduce((tổng, số) => tổng + Number(số), 0)
  const danh_sách_dự_đoán =
    danh_sách_dữ_liệu[tổng_trong_ngày_tháng + vị_trí_dữ_liệu - 1]?.kết_quả_xổ_số || []
  const kết_quả_dư_đoán =
    dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((số_dự_đoán) =>
      danh_sách_dự_đoán.includes(số_dự_đoán),
    ).length || 0

  dữ_liệu.tổng_trong_ngày_tháng = tổng_trong_ngày_tháng
  dữ_liệu.danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng = danh_sách_dự_đoán
  dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng = kết_quả_dư_đoán
}

function dự_đoán_kết_quả_bằng_tổng_ngày_tháng_năm(
  dữ_liệu: Đối_Tượng_Xổ_Số,
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  vị_trí_dữ_liệu: number,
) {
  const ngày_xổ_số_tiếp_theo = new Date(dữ_liệu.dấu_thời_gian_kỳ_sau_đó)
  const tổng_trong_ngày_tháng_năm =
    ngày_xổ_số_tiếp_theo
      .getDate()
      .toString()
      .split('')
      .reduce((tổng, số) => tổng + Number(số), 0) +
    (ngày_xổ_số_tiếp_theo.getMonth() + 1)
      .toString()
      .split('')
      .reduce((tổng, số) => tổng + Number(số), 0) +
    ngày_xổ_số_tiếp_theo
      .getFullYear()
      .toString()
      .split('')
      .reduce((tổng, số) => tổng + Number(số), 0)
  const danh_sách_dự_đoán =
    danh_sách_dữ_liệu[tổng_trong_ngày_tháng_năm + vị_trí_dữ_liệu - 1]?.kết_quả_xổ_số || []
  const kết_quả_dư_đoán =
    dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((số_dự_đoán) =>
      danh_sách_dự_đoán.includes(số_dự_đoán),
    ).length || 0

  dữ_liệu.tổng_trong_ngày_tháng_năm = tổng_trong_ngày_tháng_năm
  dữ_liệu.danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng_năm = danh_sách_dự_đoán
  dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng_năm = kết_quả_dư_đoán
}

function dự_đoán_bằng_vị_trí_của_các_số_trùng(
  dữ_liệu_1: Đối_Tượng_Xổ_Số,
  dữ_liệu_2: Đối_Tượng_Xổ_Số,
  dữ_liệu_xổ_số: Array<Đối_Tượng_Xổ_Số>,
  vị_trí_dữ_liệu: number,
) {
  const danh_sách_các_số_trùng: string[] = dữ_liệu_1.kết_quả_xổ_số.filter((số) =>
    dữ_liệu_2?.kết_quả_xổ_số.includes(số),
  )
  const tập_các_số_trùng: Set<string> = new Set()
  danh_sách_các_số_trùng.forEach((số) => {
    const số_từ_vị_trí = dữ_liệu_xổ_số[Number(số) + vị_trí_dữ_liệu]?.kết_quả_xổ_số
    if (số_từ_vị_trí) {
      số_từ_vị_trí.forEach((số2) => tập_các_số_trùng.add(số2))
    }
  })
  const danh_sách_dự_đoán = Array.from(tập_các_số_trùng)
  const kết_quả_dự_đoán = danh_sách_dự_đoán.filter((số) =>
    dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.includes(số),
  ).length

  dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau = danh_sách_các_số_trùng
  dữ_liệu_1.danh_sách_dự_đoán_các_số_trùng = danh_sách_dự_đoán
  dữ_liệu_1.kết_quả_dự_đoán_các_số_trùng = kết_quả_dự_đoán
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
}

khởi_tạo_hiển_thị()

function khởi_tạo_hiển_thị() {
  các_tùy_chọn_để_hiển_thị_dữ_liệu.value = tạo_tùy_chọn_để_hiển_thị(
    số_lượng_dữ_liệu_tối_đa_có_thể_hiển_thị,
  )
  danh_sách_dữ_liệu_hiển_thị_45.value = dữ_liệu_xổ_số_45
  danh_sách_dữ_liệu_hiển_thị_55.value = dữ_liệu_xổ_số_55
}

khởi_tạo_in_nhật_ký()

function khởi_tạo_in_nhật_ký() {
  console.log('danh sách dữ liệu 45 đã qua xữ lý: ', dữ_liệu_xổ_số_45)
  console.log('danh sách dữ liệu 55 đã qua xữ lý: ', dữ_liệu_xổ_số_55)
}
</script>

<template>
  <div
    :style="{ 'padding-left': '20px', display: 'flex', 'flex-direction': 'column', gap: '20px' }"
  >
    <div>
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
      <div>
        Hôm nay dự đoán cho:
        <span :style="{ color: 'greenyellow', fontSize: '18px' }">{{
          mở_xổ_số_loại_tiếp_theo
        }}</span>
      </div>
      <div>Hiển thị chi tiết: <input v-model="có_hiển_thị_chi_tiết" type="checkbox" /></div>
    </div>

    <div :style="{ display: 'flex', gap: '40px' }">
      <div :style="{ width: '500px' }">
        Tổng số dữ liệu 55: {{ danh_sách_dữ_liệu_hiển_thị_55?.length }}
      </div>
      <div :style="{ width: '500px' }">
        Tổng số dữ liệu 45: {{ danh_sách_dữ_liệu_hiển_thị_45?.length }}
      </div>
    </div>

    <div :style="{ display: 'flex', gap: '40px' }">
      <!--
        dành cho 55
      -->

      <div :style="{ width: '500px', display: 'flex', 'flex-direction': 'column', gap: '12px' }">
        <div
          v-for="(dữ_liệu, vị_trí) in danh_sách_dữ_liệu_hiển_thị_55?.slice(
            0,
            số_dữ_liệu_sẽ_được_hiển_thị,
          )"
          :key="`danh_sách_dữ_liệu-${vị_trí}`"
          :style="{ height: có_hiển_thị_chi_tiết ? '740px' : 'auto' }"
        >
          <div :style="{ display: 'flex' }">
            <div>{{ dữ_liệu.ngày_xổ_số }}::{{ dữ_liệu.tuần_xổ_số }}::{{ vị_trí }}::</div>
            <div :style="{ color: 'cyan' }">{{ dữ_liệu.kết_quả_xổ_số }}</div>
          </div>
          <template v-if="có_hiển_thị_chi_tiết">
            <div>---</div>
            <div>Dự đoán bằng ngày xổ số: {{ dữ_liệu.danh_sách_dự_đoán_bằng_ngày_xổ_số }}</div>
            <div>
              Kết quả dự đoán bằng ngày xổ số: {{ dữ_liệu.kết_quả_dự_đoán_bằng_ngày_xổ_số }}
            </div>

            <div>---</div>
            <div>Tổng trong ngày: {{ dữ_liệu.tổng_trong_ngày }}</div>
            <div>
              Dự đoán bằng tổng trong ngày: {{ dữ_liệu.danh_sách_dự_đoán_bẳng_tổng_trong_ngày }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng trong ngày:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày }}
            </div>

            <div>---</div>
            <div>Tổng ngày tháng: {{ dữ_liệu.tổng_ngày_tháng }}</div>
            <div>
              Dự đoán bằng tổng ngày tháng:
              {{ dữ_liệu.danh_sách_dự_đoán_bằng_tổng_ngày_tháng }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng ngày tháng:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_ngày_tháng }}
            </div>
            <div>---</div>
            <div>Tổng trong ngày tháng: {{ dữ_liệu.tổng_trong_ngày_tháng }}</div>
            <div>
              Dự đoán bằng tổng trong ngày tháng:
              {{ dữ_liệu.danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng trong ngày tháng:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng }}
            </div>
            <div>---</div>
            <div>Tổng trong ngày tháng năm: {{ dữ_liệu.tổng_trong_ngày_tháng_năm }}</div>
            <div>
              Dự đoán bằng tổng trong ngày tháng năm:
              {{ dữ_liệu.danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng_năm }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng trong ngày tháng năm:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng_năm }}
            </div>
            <div>---</div>
            <div>Kết quả trùng: {{ dữ_liệu.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau }}</div>
            <div>
              Dự đoán các số trùng:
              {{ dữ_liệu.danh_sách_dự_đoán_các_số_trùng }}
            </div>
            <div>Kết quả dự đoán các số trùng: {{ dữ_liệu.kết_quả_dự_đoán_các_số_trùng }}</div>
            <div>---</div>
            <div>Sô kết quả có: {{ dữ_liệu.số_kết_quả_trong_các_số_đã_xuất_hiện }}</div>
            <div>Số lượng xuất hiện: {{ dữ_liệu.tập_các_số_đã_xuất_hiện.size }}</div>
            <div>Danh sách xuất hiện:</div>
            <div :style="{ width: '220px', display: 'flex', 'flex-wrap': 'wrap' }">
              <div
                v-for="(
                  dữ_liệu_xuất_hiện, vị_trí_xuất_hiện
                ) in dữ_liệu.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện"
                :key="`row-dữ_liệu_1${vị_trí}${vị_trí_xuất_hiện}`"
                :style="{
                  width: '34px',
                }"
              >
                <span
                  >{{ dữ_liệu_xuất_hiện.số_xuất_hiện }}:{{ dữ_liệu_xuất_hiện.tổng_xuất_hiện }}</span
                >
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--
        dành cho 45
      -->

      <div :style="{ width: '500px', display: 'flex', 'flex-direction': 'column', gap: '12px' }">
        <div
          v-for="(dữ_liệu, vị_trí) in danh_sách_dữ_liệu_hiển_thị_45?.slice(
            0,
            số_dữ_liệu_sẽ_được_hiển_thị,
          )"
          :key="`danh_sách_dữ_liệu-${vị_trí}`"
          :style="{ height: có_hiển_thị_chi_tiết ? '740px' : 'auto' }"
        >
          <div :style="{ display: 'flex' }">
            <div>{{ dữ_liệu.ngày_xổ_số }}::{{ dữ_liệu.tuần_xổ_số }}::{{ vị_trí }}::</div>
            <div :style="{ color: 'cyan' }">{{ dữ_liệu.kết_quả_xổ_số }}</div>
          </div>
          <template v-if="có_hiển_thị_chi_tiết">
            <div>---</div>
            <div>Dự đoán bằng ngày xổ số: {{ dữ_liệu.danh_sách_dự_đoán_bằng_ngày_xổ_số }}</div>
            <div>
              Kết quả dự đoán bằng ngày xổ số: {{ dữ_liệu.kết_quả_dự_đoán_bằng_ngày_xổ_số }}
            </div>
            <div>---</div>
            <div>Tổng trong ngày: {{ dữ_liệu.tổng_trong_ngày }}</div>
            <div>
              Dự đoán bằng tổng trong ngày: {{ dữ_liệu.danh_sách_dự_đoán_bẳng_tổng_trong_ngày }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng trong ngày:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày }}
            </div>
            <div>---</div>
            <div>Tổng ngày tháng: {{ dữ_liệu.tổng_ngày_tháng }}</div>
            <div>
              Dự đoán bằng tổng ngày tháng:
              {{ dữ_liệu.danh_sách_dự_đoán_bằng_tổng_ngày_tháng }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng ngày tháng:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_ngày_tháng }}
            </div>
            <div>---</div>
            <div>Tổng trong ngày tháng: {{ dữ_liệu.tổng_trong_ngày_tháng }}</div>
            <div>
              Dự đoán bằng tổng trong ngày tháng:
              {{ dữ_liệu.danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng trong ngày tháng:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng }}
            </div>
            <div>---</div>
            <div>Tổng trong ngày tháng năm: {{ dữ_liệu.tổng_trong_ngày_tháng_năm }}</div>
            <div>
              Dự đoán bằng tổng trong ngày tháng năm:
              {{ dữ_liệu.danh_sách_dự_đoán_bằng_tổng_trong_ngày_tháng_năm }}
            </div>
            <div>
              Kết quả dự đoán bằng tổng trong ngày tháng năm:
              {{ dữ_liệu.kết_quả_dự_đoán_bằng_tổng_trong_ngày_tháng_năm }}
            </div>
            <div>---</div>
            <div>Kết quả trùng: {{ dữ_liệu.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau }}</div>
            <div>
              Dự đoán các số trùng:
              {{ dữ_liệu.danh_sách_dự_đoán_các_số_trùng }}
            </div>
            <div>Kết quả dự đoán các số trùng: {{ dữ_liệu.kết_quả_dự_đoán_các_số_trùng }}</div>
            <div>---</div>
            <div>Sô kết quả có: {{ dữ_liệu.số_kết_quả_trong_các_số_đã_xuất_hiện }}</div>
            <div>Số lượng xuất hiện: {{ dữ_liệu.tập_các_số_đã_xuất_hiện.size }}</div>
            <div>Danh sách xuất hiện:</div>
            <div :style="{ width: '220px', display: 'flex', 'flex-wrap': 'wrap' }">
              <div
                v-for="(
                  dữ_liệu_xuất_hiện, vị_trí_xuất_hiện
                ) in dữ_liệu.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện"
                :key="`row-dữ_liệu_1${vị_trí}${vị_trí_xuất_hiện}`"
                :style="{
                  width: '34px',
                }"
              >
                <span
                  >{{ dữ_liệu_xuất_hiện.số_xuất_hiện }}:{{ dữ_liệu_xuất_hiện.tổng_xuất_hiện }}</span
                >
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
  background: linear-gradient(to right, #1f1c18, #8e0e00);
  color: white;
}
</style>
