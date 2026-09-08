<script setup lang="ts">
import { ref, h } from 'vue'
import moment from 'moment'

import { lấy_dữ_liệu_xổ_số_45, lấy_dữ_liệu_xổ_số_55, tạo_ds_xuất_hiện } from '@/composables/lote'

import { Đối_Tượng_Xổ_Số, type Loại_Dữ_Liệu_Xuât_Hiện } from '@/types/lote'

import { tạo_tùy_chọn_để_hiển_thị } from '@/utils'
import _ from 'lodash'

const màu_kết_quả_dự_đoán = ref<boolean>(true)
const màu_kết_quả_hiện_tại = ref<boolean>(true)

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

async function chạy_chức_năng_chính(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>, offset: number = 0) {
  const danh_sách_dữ_liệu_45_hoặc_55 =
    danh_sách_dữ_liệu[0].loại_xổ_số === 45 ? dữ_liệu_xổ_số_55 : dữ_liệu_xổ_số_45

  for (let vị_trí_dữ_liệu = 0; vị_trí_dữ_liệu < danh_sách_dữ_liệu.length; vị_trí_dữ_liệu++) {
    const dữ_liệu_1 = danh_sách_dữ_liệu[vị_trí_dữ_liệu]
    const dữ_liệu_2 = danh_sách_dữ_liệu_45_hoặc_55?.[vị_trí_dữ_liệu + offset]

    // xữ lý dữ liệu xuất hiện
    xữ_lý_dữ_liệu_xuất_hiện(danh_sách_dữ_liệu, dữ_liệu_1, dữ_liệu_2, vị_trí_dữ_liệu)

    tạo_ds_xuất_hiện_tại_vị_trí_chỉ_định(
      danh_sách_dữ_liệu,
      danh_sách_dữ_liệu_45_hoặc_55,
      dữ_liệu_1,
      vị_trí_dữ_liệu,
    )
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
    dữ_liệu.loại_xổ_số === 55 ? 46 : 40,
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
  for (let i = dữ_liệu.vị_trí_dữ_liệu + 1; i < danh_sách_dữ_liệu.length; i++) {
    const dữ_liệu_tiếp_theo = danh_sách_dữ_liệu[i]
    tất_cả_ds_vị_trí_dự_đoán.push(...dữ_liệu_tiếp_theo.vị_trí_ds_xuất_hiện)
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

function xem_dự_đoán_cho_tất_cả_vị_trí(
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
  const tất_cả_ds_vị_trí_dự_đoán: number[][] = []

  // lấy tất cả vị trí dự đoán
  for (let i = dữ_liệu.vị_trí_dữ_liệu + 1; i < danh_sách_dữ_liệu.length; i++) {
    const dữ_liệu_tiếp_theo = danh_sách_dữ_liệu[i]
    tất_cả_ds_vị_trí_dự_đoán.push(...dữ_liệu_tiếp_theo.vị_trí_ds_xuất_hiện)
  }

  console.log('tất cả vị trí dự đoán: ', tất_cả_ds_vị_trí_dự_đoán.length)

  let tong_3 = 0
  let tong_4 = 0
  let tong_5 = 0
  let tong5_5 = 0
  let tong_6 = 0
  let tổng_ds = 0

  for (let j = 0; j < tất_cả_ds_vị_trí_dự_đoán.length; j++) {
    const ds_vị_trí = tất_cả_ds_vị_trí_dự_đoán[j].map((n) => n + 1)
    const tổng = kết_quả_xổ_số.filter((số) => ds_vị_trí.includes(Number(số))).length
    tổng_ds++
    if (tổng === 3) {
      tong_3++
    }
    if (tổng === 4) {
      tong_4++
    }
    if (tổng === 5) {
      if (ds_vị_trí.includes(Number(dữ_liệu.số_jacpot_2))) {
        console.log('trúng jackpot 2 tại: ', `vị trí ${j}`)
        tong5_5++
      } else {
        console.log('trúng 5 tại: ', `vị trí ${j}`)
        tong_5++
      }
    }
    if (tổng === 6) {
      console.log('trúng jackpot 1 tại: ', `vị trí ${j}`)
      tong_6++
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

function thống_kê_dự_đoán(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>) {
  type Vị_Trí_Lặp_Lại = {
    vị_trí: number
    tổng_xuất_hiện: number
    trùng: number
    xuất_hiện: number[]
  }
  const tập_vị_trí: Vị_Trí_Lặp_Lại[] = []
  const tất_cả_ds_vị_trí_dự_đoán: number[][] = []
  for (let k = danh_sách_dữ_liệu.length - 1; k >= 0; k--) {
    const dữ_liệu = danh_sách_dữ_liệu[k]
    tất_cả_ds_vị_trí_dự_đoán.push(...dữ_liệu.vị_trí_ds_xuất_hiện)
    const kết_quả_xổ_số = dữ_liệu.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số || []
    const dự_đoán_ds_xuất_hiện = dữ_liệu.dự_đoán_ds_xuất_hiện
    for (let i = 0; i < dự_đoán_ds_xuất_hiện.length; i++) {
      const danh_sách = dự_đoán_ds_xuất_hiện[i]
      for (let j = 0; j < tất_cả_ds_vị_trí_dự_đoán.length; j++) {
        const ds_dự_đoán: string[] = []
        const ds_vị_trí = tất_cả_ds_vị_trí_dự_đoán[j]
        ds_vị_trí.forEach((vị_trí) => {
          ds_dự_đoán.push(danh_sách[vị_trí])
        })
        const tổng = ds_dự_đoán.filter((số) => kết_quả_xổ_số.includes(số)).length
        if (tổng === 5) {
          if (ds_vị_trí.includes(Number(dữ_liệu.số_jacpot_2))) {
            const vị_trí_tồn_tại = tập_vị_trí.find((vị_trí) => vị_trí.vị_trí === j)
            if (vị_trí_tồn_tại) {
              vị_trí_tồn_tại.tổng_xuất_hiện += 1
              vị_trí_tồn_tại.xuất_hiện.push(k)
            } else {
              tập_vị_trí.push({ vị_trí: j, tổng_xuất_hiện: 1, trùng: 5.5, xuất_hiện: [k] })
            }
          } else {
            const vị_trí_tồn_tại = tập_vị_trí.find((vị_trí) => vị_trí.vị_trí === j)
            if (vị_trí_tồn_tại) {
              vị_trí_tồn_tại.tổng_xuất_hiện += 1
              vị_trí_tồn_tại.xuất_hiện.push(k)
            } else {
              tập_vị_trí.push({ vị_trí: j, tổng_xuất_hiện: 1, trùng: 5, xuất_hiện: [k] })
            }
          }
        }
        if (tổng === 6) {
          const vị_trí_tồn_tại = tập_vị_trí.find((vị_trí) => vị_trí.vị_trí === j)
          if (vị_trí_tồn_tại) {
            vị_trí_tồn_tại.tổng_xuất_hiện += 1
            vị_trí_tồn_tại.xuất_hiện.push(k)
          } else {
            tập_vị_trí.push({ vị_trí: j, tổng_xuất_hiện: 1, trùng: 6, xuất_hiện: [k] })
          }
        }
      }
    }
  }
  // console.log(tập_vị_trí)
  const kết_quả = _.orderBy(
    tập_vị_trí,
    [(item) => Math.min(...item.xuất_hiện), (item) => item.trùng],
    ['asc', 'desc'],
  )
  console.log('kết quả thống kê dự đoán: ', kết_quả)
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
      :style="{ position: 'sticky', top: '0px', background: '#0a0a1a', padding: '4px', zIndex: 1 }"
    >
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
        <button @click="thống_kê_dự_đoán(dữ_liệu_xổ_số_55)">thống kê dự đoán</button>
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
              <button @click="xem_dự_đoán_cho_tất_cả_vị_trí(dữ_liệu_xổ_số_55, dữ_liệu)">
                Dự đoán vị trí
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
