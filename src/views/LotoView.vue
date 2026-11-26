<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import { LINK_CSV_XSMN_THEO_NĂM } from '@/constants/lote'
import { tách_csv } from '@/composables/loto'

// Dữ liệu CSV: Tỉnh | Ngày (DD/MM/YYYY) | Kết quả (18 số cách nhau bằng dấu cách)
const tất_cả_hàng = ref<string[][]>([]) // dữ liệu của mọi năm gộp lại
const năm_lọc = ref('') // '' = tất cả các năm
const đang_tải = ref(true)
const lỗi = ref('')

type Lựa_Chọn =
  | 'chưa_ra'
  | 'dự_đoán_ngày'
  | 'thống_kê_quay_lại'
  | 'năm_trước'
  | 'ngày_hôm_sau'
  | 'theo_đài'
  | 'số_theo_tuần'
  | 'ngày_trước'
  | 'phần_chục'
  | 'dữ_liệu_gốc'
const lựa_chọn = ref<Lựa_Chọn>('năm_trước')
const sắp_xếp = ref<'số' | 'lâu_nhất'>('số')
// Số vừa ra (chưa ra = 0) mà lần ra trước cách ≥ ngưỡng này thì coi là "lâu mới ra" và dự đoán số + 1.
// Mặc định đặt ở số lớn nhất hiện có (chỉ hiện số quay lại sau lâu nhất); sửa tay được.

const lấy_năm = (hàng: string[]) => hàng[1].slice(-4) // ngày dạng DD/MM/YYYY
const các_năm = computed(() => [...new Set(tất_cả_hàng.value.map(lấy_năm))].sort().reverse())
// Chọn một năm thì dữ liệu tính đến hết năm đó (vẫn gồm các năm trước để số ngày chưa ra liên tục qua năm mới)
const các_hàng_đến_năm = computed(() =>
  năm_lọc.value
    ? tất_cả_hàng.value.filter((hàng) => lấy_năm(hàng) <= năm_lọc.value)
    : tất_cả_hàng.value,
)
// Chỉ các dòng của năm đang chọn (dùng cho bảng dữ liệu gốc và đếm số lô)
const các_hàng = computed(() =>
  năm_lọc.value
    ? tất_cả_hàng.value.filter((hàng) => lấy_năm(hàng) === năm_lọc.value)
    : tất_cả_hàng.value,
)

const MILI_GIÂY_MỖI_NGÀY = 86400000
const đổi_ngày_thành_số = (ngày: string) => {
  const [d, m, y] = ngày.split('/').map(Number)
  return Date.UTC(y, m - 1, d)
}

type Dòng_Chưa_Ra = {
  số: string
  ngày_cuối: string // '' nếu chưa từng ra
  số_ngày_chưa_ra: number | null // 0 = ra trong ngày mới nhất; null = chưa từng ra
  quay_lại_sau: number | null // chỉ có khi số_ngày_chưa_ra = 0: lần ra liền trước đó cách bao nhiêu ngày
  số_lần: number // tổng số lô đã ra
}

// Với mỗi số 00-99: lần cuối ra là ngày nào, tính đến ngày mới nhất trong dữ liệu thì bao nhiêu ngày chưa ra
const ngày_mới_nhất = computed(() =>
  Math.max(...các_hàng_đến_năm.value.map((hàng) => đổi_ngày_thành_số(hàng[1]))),
)
// Số dự đoán = số + 1 (99 + 1 = 00), chỉ có ở 2 số có "quay lại sau" lớn nhất (bằng nhau thì lấy số nhỏ trước)
const số_dự_đoán = (dòng: Dòng_Chưa_Ra) =>
  hai_số_quay_lại_lớn_nhất.value.has(dòng.số)
    ? String((Number(dòng.số) + 1) % 100).padStart(2, '0')
    : ''
const các_số_chưa_ra = computed<Dòng_Chưa_Ra[]>(() => {
  const ngày_ra = new Map<string, Map<number, string>>() // số -> (thời điểm -> ngày DD/MM/YYYY)
  const lần = new Map<string, number>()
  for (const hàng of các_hàng_đến_năm.value) {
    const thời_điểm = đổi_ngày_thành_số(hàng[1])
    const trong_năm = !năm_lọc.value || lấy_năm(hàng) === năm_lọc.value
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      const số = giải.slice(-2).padStart(2, '0')
      if (trong_năm) lần.set(số, (lần.get(số) ?? 0) + 1)
      const bản_đồ = ngày_ra.get(số)
      if (bản_đồ) bản_đồ.set(thời_điểm, hàng[1])
      else ngày_ra.set(số, new Map([[thời_điểm, hàng[1]]]))
    }
  }
  const danh_sách = Array.from({ length: 100 }, (_, i) => {
    const số = String(i).padStart(2, '0')
    const đã_sắp = [...(ngày_ra.get(số) ?? new Map<number, string>())].sort((a, b) => b[0] - a[0])
    const [gần_nhất, trước_đó] = đã_sắp
    const số_ngày_chưa_ra = gần_nhất
      ? Math.round((ngày_mới_nhất.value - gần_nhất[0]) / MILI_GIÂY_MỖI_NGÀY)
      : null
    return {
      số,
      ngày_cuối: gần_nhất?.[1] ?? '',
      số_ngày_chưa_ra,
      quay_lại_sau:
        số_ngày_chưa_ra === 0 && trước_đó
          ? Math.round((gần_nhất[0] - trước_đó[0]) / MILI_GIÂY_MỖI_NGÀY)
          : null,
      số_lần: lần.get(số) ?? 0,
    }
  })
  if (sắp_xếp.value === 'lâu_nhất') {
    danh_sách.sort(
      (a, b) =>
        (b.số_ngày_chưa_ra ?? Infinity) - (a.số_ngày_chưa_ra ?? Infinity) ||
        a.số.localeCompare(b.số),
    )
  }
  return danh_sách
})

const hai_số_quay_lại_lớn_nhất = computed(
  () =>
    new Set(
      các_số_chưa_ra.value
        .filter((dòng) => dòng.quay_lại_sau !== null)
        .sort((a, b) => b.quay_lại_sau! - a.quay_lại_sau! || a.số.localeCompare(b.số))
        .slice(0, 2)
        .map((dòng) => dòng.số),
    ),
)

const hai_chữ_số = (n: number) => String(n).padStart(2, '0')
const đổi_thời_điểm_thành_ngày = (thời_điểm: number) => {
  const d = new Date(thời_điểm)
  return `${hai_chữ_số(d.getUTCDate())}/${hai_chữ_số(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`
}

type Dòng_Dự_Đoán = {
  ngày: string
  thời_điểm: number
  số_đài: number // 3 đài, thứ 7 là 4 đài
  số: string // (thứ tự ngày trong năm) % 100
  ngược: string // (số ngày còn lại đến 31/12 của năm đó) % 100
  có_số: boolean | null // null = chưa có kết quả
  có_ngược: boolean | null
  lô_số: number // số lô của số đó trong ngày (cộng tất cả đài)
  lô_ngược: number
  // (số + tháng + ngày) % 100 và |số − tháng − ngày| % 100, với số = cột "Số"
  cộng_ngày: string
  trừ_ngày: string
  có_cộng_ngày: boolean | null
  có_trừ_ngày: boolean | null
  lô_cộng_ngày: number
  lô_trừ_ngày: number
  // số ngày "không" liên tiếp: dòng "có" = số lần không ngay trước đó, dòng "không" = đang là lần không thứ mấy,
  // dòng chưa có kết quả = đã không bao nhiêu lần tính đến hôm qua
  chuỗi_không_số: number
  chuỗi_không_ngược: number
  // (năm + tháng + ngày) % số, với số tới = cột "Số" và số lui = cột "Số ngược"; null khi số chia bằng 0
  chia_tới: number | null
  chia_lui: number | null
  có_chia_tới: boolean | null // null = chưa có kết quả hoặc không chia được
  có_chia_lui: boolean | null
  lô_chia_tới: number
  lô_chia_lui: number
  // (chia_tới + chia_lui) % 100; null khi 1 trong 2 không tính được
  tổng_chia: number | null
  có_tổng_chia: boolean | null
  lô_tổng_chia: number
}

// Dự đoán theo ngày trong năm: ngày thứ N trong năm (01/01 là 1), số = N % 100.
// Có = số đó xuất hiện (2 chữ số cuối của giải) ở bất kỳ đài nào trong ngày đó.
// Lọc theo thứ: '' = tất cả; 0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7. Áp dụng cho cả bảng ngày, thống kê tháng
// và chuỗi "không" (khi lọc, chuỗi đếm theo các lần của thứ đó)
const thứ_lọc_dự_đoán = ref<'' | number>('')
const đúng_thứ_dự_đoán = (thời_điểm: number) =>
  thứ_lọc_dự_đoán.value === '' || new Date(thời_điểm).getUTCDay() === thứ_lọc_dự_đoán.value
const các_dòng_dự_đoán = computed(() => {
  const theo_ngày = new Map<string, { số_đài: number; các_số: Map<string, number> }>()
  for (const hàng of các_hàng.value) {
    const nhóm = theo_ngày.get(hàng[1]) ?? { số_đài: 0, các_số: new Map<string, number>() }
    nhóm.số_đài++
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      const số = giải.slice(-2).padStart(2, '0')
      nhóm.các_số.set(số, (nhóm.các_số.get(số) ?? 0) + 1)
    }
    theo_ngày.set(hàng[1], nhóm)
  }

  const dựng = (
    ngày: string,
    nhóm?: { số_đài: number; các_số: Map<string, number> },
  ): Dòng_Dự_Đoán => {
    const thời_điểm = đổi_ngày_thành_số(ngày)
    const [ngày_trong_tháng, tháng, năm] = ngày.split('/').map(Number)
    const thứ_tự_trong_năm = Math.round((thời_điểm - Date.UTC(năm, 0, 1)) / MILI_GIÂY_MỖI_NGÀY) + 1
    const số = thứ_tự_trong_năm % 100
    // số ngày còn lại đến 31/12 (31/12 thì là 0, 01/01 năm thường là 364)
    const ngược = Math.round((Date.UTC(năm, 11, 31) - thời_điểm) / MILI_GIÂY_MỖI_NGÀY) % 100
    const số_lô = (n: number) => nhóm?.các_số.get(hai_chữ_số(n)) ?? 0
    const kiểm_tra = (n: number) => (nhóm ? số_lô(n) > 0 : null)
    // (năm + tháng + ngày) chia dư cho số tới / số lui; số chia bằng 0 thì không tính được
    const tổng_ngày = năm + tháng + ngày_trong_tháng
    const chia_tới = số === 0 ? null : tổng_ngày % số
    const chia_lui = ngược === 0 ? null : tổng_ngày % ngược
    const tổng_chia = chia_tới === null || chia_lui === null ? null : (chia_tới + chia_lui) % 100
    const cộng_ngày = (số + tháng + ngày_trong_tháng) % 100
    const trừ_ngày = Math.abs(số - tháng - ngày_trong_tháng) % 100
    return {
      ngày,
      thời_điểm,
      số_đài: nhóm?.số_đài ?? (new Date(thời_điểm).getUTCDay() === 6 ? 4 : 3),
      số: hai_chữ_số(số),
      ngược: hai_chữ_số(ngược),
      có_số: kiểm_tra(số),
      có_ngược: kiểm_tra(ngược),
      lô_số: số_lô(số),
      lô_ngược: số_lô(ngược),
      cộng_ngày: hai_chữ_số(cộng_ngày),
      trừ_ngày: hai_chữ_số(trừ_ngày),
      có_cộng_ngày: kiểm_tra(cộng_ngày),
      có_trừ_ngày: kiểm_tra(trừ_ngày),
      lô_cộng_ngày: số_lô(cộng_ngày),
      lô_trừ_ngày: số_lô(trừ_ngày),
      chuỗi_không_số: 0,
      chuỗi_không_ngược: 0,
      chia_tới,
      chia_lui,
      có_chia_tới: chia_tới === null ? null : kiểm_tra(chia_tới),
      có_chia_lui: chia_lui === null ? null : kiểm_tra(chia_lui),
      lô_chia_tới: chia_tới === null ? 0 : số_lô(chia_tới),
      lô_chia_lui: chia_lui === null ? 0 : số_lô(chia_lui),
      tổng_chia,
      có_tổng_chia: tổng_chia === null ? null : kiểm_tra(tổng_chia),
      lô_tổng_chia: tổng_chia === null ? 0 : số_lô(tổng_chia),
    }
  }

  const danh_sách = [...theo_ngày.entries()]
    .filter(([ngày]) => đúng_thứ_dự_đoán(đổi_ngày_thành_số(ngày)))
    .map(([ngày, nhóm]) => dựng(ngày, nhóm))
  danh_sách.sort((a, b) => b.thời_điểm - a.thời_điểm)

  // đếm số ngày "không" liên tiếp theo thứ tự thời gian (từ ngày cũ nhất đến mới nhất)
  let không_số = 0
  let không_ngược = 0
  for (let i = danh_sách.length - 1; i >= 0; i--) {
    const dòng = danh_sách[i]
    dòng.chuỗi_không_số = dòng.có_số ? không_số : không_số + 1
    dòng.chuỗi_không_ngược = dòng.có_ngược ? không_ngược : không_ngược + 1
    không_số = dòng.có_số ? 0 : không_số + 1
    không_ngược = dòng.có_ngược ? 0 : không_ngược + 1
  }

  // dòng dự đoán cho ngày kế tiếp (chưa có kết quả), chỉ khi đang xem năm mới nhất hoặc tất cả
  const đang_xem_mới_nhất = !năm_lọc.value || năm_lọc.value === các_năm.value[0]
  if (đang_xem_mới_nhất && danh_sách.length > 0) {
    // ngày kế tiếp sau dữ liệu mới nhất, khớp thứ đang lọc
    let thời_điểm_kế =
      Math.max(...[...theo_ngày.keys()].map(đổi_ngày_thành_số)) + MILI_GIÂY_MỖI_NGÀY
    while (!đúng_thứ_dự_đoán(thời_điểm_kế)) thời_điểm_kế += MILI_GIÂY_MỖI_NGÀY
    const dòng_kế = dựng(đổi_thời_điểm_thành_ngày(thời_điểm_kế))
    dòng_kế.chuỗi_không_số = không_số
    dòng_kế.chuỗi_không_ngược = không_ngược
    danh_sách.unshift(dòng_kế)
  }
  return danh_sách
})

// Số lần không liên tiếp lớn nhất trước khi có (kèm ngày có) và số lần không hiện tại, cho từng cột
const thống_kê_chuỗi_không = computed(() => {
  const tính = (
    có: (dòng: Dòng_Dự_Đoán) => boolean | null,
    chuỗi: (dòng: Dòng_Dự_Đoán) => number,
  ) => {
    let lớn_nhất = 0
    let ngày = ''
    let hiện_tại: number | null = null // null khi không có dòng xem trước (đang xem năm cũ)
    for (const dòng of các_dòng_dự_đoán.value) {
      if (có(dòng) === null) {
        hiện_tại = chuỗi(dòng) // dòng xem trước: đã không bao nhiêu lần
        continue
      }
      if (có(dòng) && (chuỗi(dòng) > lớn_nhất || !ngày)) {
        lớn_nhất = chuỗi(dòng)
        ngày = dòng.ngày
      }
    }
    return { lớn_nhất, ngày, hiện_tại }
  }
  return {
    số: tính(
      (dòng) => dòng.có_số,
      (dòng) => dòng.chuỗi_không_số,
    ),
    ngược: tính(
      (dòng) => dòng.có_ngược,
      (dòng) => dòng.chuỗi_không_ngược,
    ),
  }
})

// Tiền tính bằng nghìn đồng: mua 1 số ở 1 đài hết 15k, mỗi lô trúng thưởng 80k
const GIÁ_MỖI_ĐÀI = 15
const TIỀN_THƯỞNG_MỖI_LÔ = 80

type Thống_Kê_Giai_Đoạn = {
  nhãn: string
  số_ngày: number // số ngày đã có kết quả
  số_đài_ngày: number // tổng số đài của các ngày đó (mỗi ngày 3 đài, thứ 7 là 4 đài); vốn = số_đài_ngày x 15k
  có_số: number
  có_ngược: number
  lô_số: number // tổng số lô (cộng mọi ngày, mọi đài) của số dự đoán trong tháng
  lô_ngược: number
  // (năm + tháng + ngày) % số tới / % số lui: chỉ tính các ngày chia được (số chia khác 0), nên vốn tính riêng
  có_cộng_ngày: number // (số + tháng + ngày) % 100
  lô_cộng_ngày: number
  có_trừ_ngày: number // |số − tháng − ngày| % 100
  lô_trừ_ngày: number
  số_đài_chia_tới: number
  có_chia_tới: number
  lô_chia_tới: number
  số_đài_chia_lui: number
  có_chia_lui: number
  lô_chia_lui: number
  số_đài_tổng_chia: number // (chia tới + chia lui) % 100
  có_tổng_chia: number
  lô_tổng_chia: number
}

const tạo_nhóm_thống_kê = (nhãn: string): Thống_Kê_Giai_Đoạn => ({
  nhãn,
  số_ngày: 0,
  số_đài_ngày: 0,
  có_số: 0,
  có_ngược: 0,
  lô_số: 0,
  lô_ngược: 0,
  có_cộng_ngày: 0,
  lô_cộng_ngày: 0,
  có_trừ_ngày: 0,
  lô_trừ_ngày: 0,
  số_đài_chia_tới: 0,
  có_chia_tới: 0,
  lô_chia_tới: 0,
  số_đài_chia_lui: 0,
  có_chia_lui: 0,
  lô_chia_lui: 0,
  số_đài_tổng_chia: 0,
  có_tổng_chia: 0,
  lô_tổng_chia: 0,
})

// Thống kê số ngày "có" theo từng tháng (mỗi tháng của mỗi năm 1 dòng); dòng cuối là cả năm
const thống_kê_dự_đoán = computed<Thống_Kê_Giai_Đoạn[]>(() => {
  const nhóm_theo_tháng = new Map<string, Thống_Kê_Giai_Đoạn>() // khóa "năm-tháng"
  for (const dòng of các_dòng_dự_đoán.value) {
    if (dòng.có_số === null) continue
    const [, tháng, năm] = dòng.ngày.split('/')
    const khóa = `${năm}-${tháng}`
    const nhóm =
      nhóm_theo_tháng.get(khóa) ??
      tạo_nhóm_thống_kê(năm_lọc.value ? `Tháng ${Number(tháng)}` : `Tháng ${Number(tháng)}/${năm}`)
    nhóm_theo_tháng.set(khóa, nhóm)
    nhóm.số_ngày++
    nhóm.số_đài_ngày += dòng.số_đài
    if (dòng.có_số) nhóm.có_số++
    if (dòng.có_ngược) nhóm.có_ngược++
    nhóm.lô_số += dòng.lô_số
    nhóm.lô_ngược += dòng.lô_ngược
    if (dòng.có_cộng_ngày) nhóm.có_cộng_ngày++
    nhóm.lô_cộng_ngày += dòng.lô_cộng_ngày
    if (dòng.có_trừ_ngày) nhóm.có_trừ_ngày++
    nhóm.lô_trừ_ngày += dòng.lô_trừ_ngày
    if (dòng.chia_tới !== null) {
      nhóm.số_đài_chia_tới += dòng.số_đài
      if (dòng.có_chia_tới) nhóm.có_chia_tới++
      nhóm.lô_chia_tới += dòng.lô_chia_tới
    }
    if (dòng.chia_lui !== null) {
      nhóm.số_đài_chia_lui += dòng.số_đài
      if (dòng.có_chia_lui) nhóm.có_chia_lui++
      nhóm.lô_chia_lui += dòng.lô_chia_lui
    }
    if (dòng.tổng_chia !== null) {
      nhóm.số_đài_tổng_chia += dòng.số_đài
      if (dòng.có_tổng_chia) nhóm.có_tổng_chia++
      nhóm.lô_tổng_chia += dòng.lô_tổng_chia
    }
  }
  const các_nhóm = [...nhóm_theo_tháng.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, nhóm]) => nhóm)
  const cả_năm = các_nhóm.reduce(
    (tổng, nhóm) => ({
      nhãn: năm_lọc.value ? 'Cả năm' : 'Tất cả',
      số_ngày: tổng.số_ngày + nhóm.số_ngày,
      số_đài_ngày: tổng.số_đài_ngày + nhóm.số_đài_ngày,
      có_số: tổng.có_số + nhóm.có_số,
      có_ngược: tổng.có_ngược + nhóm.có_ngược,
      lô_số: tổng.lô_số + nhóm.lô_số,
      lô_ngược: tổng.lô_ngược + nhóm.lô_ngược,
      số_đài_chia_tới: tổng.số_đài_chia_tới + nhóm.số_đài_chia_tới,
      có_cộng_ngày: tổng.có_cộng_ngày + nhóm.có_cộng_ngày,
      lô_cộng_ngày: tổng.lô_cộng_ngày + nhóm.lô_cộng_ngày,
      có_trừ_ngày: tổng.có_trừ_ngày + nhóm.có_trừ_ngày,
      lô_trừ_ngày: tổng.lô_trừ_ngày + nhóm.lô_trừ_ngày,
      có_chia_tới: tổng.có_chia_tới + nhóm.có_chia_tới,
      lô_chia_tới: tổng.lô_chia_tới + nhóm.lô_chia_tới,
      số_đài_chia_lui: tổng.số_đài_chia_lui + nhóm.số_đài_chia_lui,
      có_chia_lui: tổng.có_chia_lui + nhóm.có_chia_lui,
      lô_chia_lui: tổng.lô_chia_lui + nhóm.lô_chia_lui,
      số_đài_tổng_chia: tổng.số_đài_tổng_chia + nhóm.số_đài_tổng_chia,
      có_tổng_chia: tổng.có_tổng_chia + nhóm.có_tổng_chia,
      lô_tổng_chia: tổng.lô_tổng_chia + nhóm.lô_tổng_chia,
    }),
    tạo_nhóm_thống_kê(năm_lọc.value ? 'Cả năm' : 'Tất cả'),
  )
  return [...các_nhóm, cả_năm]
})
const vốn = (nhóm: Thống_Kê_Giai_Đoạn) => nhóm.số_đài_ngày * GIÁ_MỖI_ĐÀI
const lời_lỗ_chia = (số_đài: number, số_lô: number) =>
  số_lô * TIỀN_THƯỞNG_MỖI_LÔ - số_đài * GIÁ_MỖI_ĐÀI
const lời_lỗ = (nhóm: Thống_Kê_Giai_Đoạn, số_lô: number) => số_lô * TIỀN_THƯỞNG_MỖI_LÔ - vốn(nhóm)
// Các cột của bảng thống kê theo tháng, cùng thứ tự và tên với các cột của bảng chi tiết từng ngày
const CÁC_CỘT_THỐNG_KÊ_DỰ_ĐOÁN: {
  nhãn: string
  có: (nhóm: Thống_Kê_Giai_Đoạn) => number
  lô: (nhóm: Thống_Kê_Giai_Đoạn) => number
  lời_lỗ: (nhóm: Thống_Kê_Giai_Đoạn) => number
}[] = [
  {
    nhãn: 'Số',
    có: (nhóm) => nhóm.có_số,
    lô: (nhóm) => nhóm.lô_số,
    lời_lỗ: (nhóm) => lời_lỗ(nhóm, nhóm.lô_số),
  },
  {
    nhãn: 'Số ngược',
    có: (nhóm) => nhóm.có_ngược,
    lô: (nhóm) => nhóm.lô_ngược,
    lời_lỗ: (nhóm) => lời_lỗ(nhóm, nhóm.lô_ngược),
  },
  {
    nhãn: '(Số + tháng + ngày) % 100',
    có: (nhóm) => nhóm.có_cộng_ngày,
    lô: (nhóm) => nhóm.lô_cộng_ngày,
    lời_lỗ: (nhóm) => lời_lỗ(nhóm, nhóm.lô_cộng_ngày),
  },
  {
    nhãn: '|Số − tháng − ngày| % 100',
    có: (nhóm) => nhóm.có_trừ_ngày,
    lô: (nhóm) => nhóm.lô_trừ_ngày,
    lời_lỗ: (nhóm) => lời_lỗ(nhóm, nhóm.lô_trừ_ngày),
  },
  {
    nhãn: '(Năm + tháng + ngày) % Số',
    có: (nhóm) => nhóm.có_chia_tới,
    lô: (nhóm) => nhóm.lô_chia_tới,
    lời_lỗ: (nhóm) => lời_lỗ_chia(nhóm.số_đài_chia_tới, nhóm.lô_chia_tới),
  },
  {
    nhãn: '(Năm + tháng + ngày) % Số ngược',
    có: (nhóm) => nhóm.có_chia_lui,
    lô: (nhóm) => nhóm.lô_chia_lui,
    lời_lỗ: (nhóm) => lời_lỗ_chia(nhóm.số_đài_chia_lui, nhóm.lô_chia_lui),
  },
  {
    nhãn: '(% Số + % Số ngược) % 100',
    có: (nhóm) => nhóm.có_tổng_chia,
    lô: (nhóm) => nhóm.lô_tổng_chia,
    lời_lỗ: (nhóm) => lời_lỗ_chia(nhóm.số_đài_tổng_chia, nhóm.lô_tổng_chia),
  },
]
const hiện_tiền = (nghìn: number) => `${nghìn > 0 ? '+' : ''}${nghìn.toLocaleString('vi-VN')}k`
const màu_tiền = (nghìn: number) => (nghìn > 0 ? '#16a34a' : nghìn < 0 ? '#dc2626' : 'inherit')

const màu_có = (có: boolean | null) => (có === null ? 'inherit' : có ? '#16a34a' : '#dc2626')
// 'có (2)' = số đó ra 2 lô trong ngày (cộng các đài)
const chữ_có = (có: boolean | null, số_lô: number) =>
  có === null ? '—' : có ? `có (${số_lô})` : 'không'
// Như chữ_có, thêm số lần không liên tiếp: "có (1) sau 3 không", "không (lần 2)", "— (đã không 4)"
const chữ_có_theo_chuỗi = (có: boolean | null, số_lô: number, chuỗi_không: number) =>
  có === null
    ? chuỗi_không > 0
      ? `— (đã không ${chuỗi_không})`
      : '—'
    : có
      ? `có (${số_lô}) sau ${chuỗi_không} không`
      : `không (lần ${chuỗi_không})`

type Lượt_Quay_Lại = {
  ngày: string // ngày số đó ra (sau một thời gian vắng)
  thời_điểm: number
  số: string
  quay_lại_sau: number // lần ra trước cách bao nhiêu ngày
  dự_đoán: string // số + 1
  ngày_kế: string
  có: boolean | null // null = ngày kế chưa có kết quả
  lô: number // số lô của số dự đoán trong ngày kế (cộng các đài)
  số_đài_kế: number // 3 đài, thứ 7 là 4 đài
  dự_đoán_2: string // số + 2
  có_2: boolean | null
  lô_2: number
  hạng: 1 | 2 // hạng 1 = quay lại sau lớn nhất trong ngày, hạng 2 = lớn thứ nhì
}
// Lọc theo hạng quay lại: '' = cả hạng 1 và hạng 2
const lọc_hạng_quay_lại = ref<'' | '1' | '2'>('')
// Lọc dự đoán: '' = cả số + 1 và số + 2 (ẩn các cột và dòng tổng của loại không chọn)
const lọc_cộng_quay_lại = ref<'' | '1' | '2'>('')
// Lọc theo thứ của ngày kế (ngày dự đoán): '' = tất cả; 0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7
const thứ_lọc_quay_lại = ref<'' | number>('')

// Thống kê: mỗi ngày chỉ lấy 2 số vừa ra mà quay lại sau LỚN NHẤT trong ngày đó (bằng nhau thì lấy số nhỏ trước),
// dự đoán số + 1 cho ngày kế rồi kiểm tra ngày kế có ra không.
const các_lượt_quay_lại = computed<Lượt_Quay_Lại[]>(() => {
  // lịch sử đến hết năm đang chọn (gồm cả các năm trước để khoảng cách liên tục qua năm mới)
  const theo_ngày = new Map<number, { ngày: string; số_đài: number; đếm: Map<string, number> }>()
  for (const hàng of các_hàng_đến_năm.value) {
    const thời_điểm = đổi_ngày_thành_số(hàng[1])
    const nhóm = theo_ngày.get(thời_điểm) ?? {
      ngày: hàng[1],
      số_đài: 0,
      đếm: new Map<string, number>(),
    }
    nhóm.số_đài++
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      const số = giải.slice(-2).padStart(2, '0')
      nhóm.đếm.set(số, (nhóm.đếm.get(số) ?? 0) + 1)
    }
    theo_ngày.set(thời_điểm, nhóm)
  }

  const lần_trước = new Map<string, number>()
  const kết_quả: Lượt_Quay_Lại[] = []
  for (const thời_điểm of [...theo_ngày.keys()].sort((a, b) => a - b)) {
    const nhóm = theo_ngày.get(thời_điểm)!
    const trong_năm = !năm_lọc.value || nhóm.ngày.slice(-4) === năm_lọc.value
    const các_lượt_trong_ngày: Lượt_Quay_Lại[] = []
    for (const số of nhóm.đếm.keys()) {
      const trước = lần_trước.get(số)
      lần_trước.set(số, thời_điểm)
      if (trước === undefined || !trong_năm) continue
      if (
        thứ_lọc_quay_lại.value !== '' &&
        new Date(thời_điểm + MILI_GIÂY_MỖI_NGÀY).getUTCDay() !== thứ_lọc_quay_lại.value
      ) {
        continue
      }
      const quay_lại_sau = Math.round((thời_điểm - trước) / MILI_GIÂY_MỖI_NGÀY)
      const dự_đoán = hai_chữ_số((Number(số) + 1) % 100)
      const dự_đoán_2 = hai_chữ_số((Number(số) + 2) % 100)
      const kế = theo_ngày.get(thời_điểm + MILI_GIÂY_MỖI_NGÀY)
      các_lượt_trong_ngày.push({
        ngày: nhóm.ngày,
        thời_điểm,
        số,
        quay_lại_sau,
        dự_đoán,
        ngày_kế: đổi_thời_điểm_thành_ngày(thời_điểm + MILI_GIÂY_MỖI_NGÀY),
        có: kế ? (kế.đếm.get(dự_đoán) ?? 0) > 0 : null,
        lô: kế?.đếm.get(dự_đoán) ?? 0,
        hạng: 1,
        dự_đoán_2,
        có_2: kế ? (kế.đếm.get(dự_đoán_2) ?? 0) > 0 : null,
        lô_2: kế?.đếm.get(dự_đoán_2) ?? 0,
        số_đài_kế:
          kế?.số_đài ?? (new Date(thời_điểm + MILI_GIÂY_MỖI_NGÀY).getUTCDay() === 6 ? 4 : 3),
      })
    }
    các_lượt_trong_ngày.sort((a, b) => b.quay_lại_sau - a.quay_lại_sau || a.số.localeCompare(b.số))
    các_lượt_trong_ngày.slice(0, 2).forEach((lượt, vị_trí) => {
      lượt.hạng = vị_trí === 0 ? 1 : 2
      if (!lọc_hạng_quay_lại.value || lọc_hạng_quay_lại.value === String(lượt.hạng)) {
        kết_quả.push(lượt)
      }
    })
  }
  return kết_quả.sort((a, b) => b.thời_điểm - a.thời_điểm || a.số.localeCompare(b.số))
})

const tiền_lượt = (lượt: Lượt_Quay_Lại) =>
  lượt.lô * TIỀN_THƯỞNG_MỖI_LÔ - lượt.số_đài_kế * GIÁ_MỖI_ĐÀI
const tiền_lượt_2 = (lượt: Lượt_Quay_Lại) =>
  lượt.lô_2 * TIỀN_THƯỞNG_MỖI_LÔ - lượt.số_đài_kế * GIÁ_MỖI_ĐÀI
const thống_kê_quay_lại = computed(() => {
  const đã_có = các_lượt_quay_lại.value.filter((lượt) => lượt.có !== null)
  const lô = đã_có.reduce((tổng, lượt) => tổng + lượt.lô, 0)
  const vốn_tổng = đã_có.reduce((tổng, lượt) => tổng + lượt.số_đài_kế * GIÁ_MỖI_ĐÀI, 0)
  const lô_2 = đã_có.reduce((tổng, lượt) => tổng + lượt.lô_2, 0)
  return {
    cộng_2: {
      số_có: đã_có.filter((lượt) => lượt.có_2).length,
      lô: lô_2,
      lời_lỗ: lô_2 * TIỀN_THƯỞNG_MỖI_LÔ - vốn_tổng,
    },
    số_lượt: đã_có.length,
    số_có: đã_có.filter((lượt) => lượt.có).length,
    lô,
    vốn: vốn_tổng,
    lời_lỗ: lô * TIỀN_THƯỞNG_MỖI_LÔ - vốn_tổng,
  }
})

type Dòng_Năm_Trước = {
  ngày: string
  thời_điểm: number
  ngày_năm_trước: string // cùng ngày/tháng của năm trước
  các_số: { số: string; lô_trước: number; có: boolean; lô_nay: number }[] // các số đã ra ngày đó năm trước; có = hôm nay cũng ra
  số_trùng: number
  số_chỉ_2_lô: number // số các số chỉ ra đúng 2 lô năm trước
  số_chỉ_2_lô_ra_lại: number // trong đó bao nhiêu số hôm nay ra lại
  lời_lỗ_chỉ_2_lô: number | null // chỉ mua các số chỉ ra đúng 2 lô năm trước ở mọi đài của ngày; null = chưa có kết quả
  vốn_chỉ_2_lô: number
  số_từ_3_lô: number
  số_từ_3_lô_ra_lại: number
  lời_lỗ_từ_3_lô: number | null
  vốn_từ_3_lô: number
  số_chỉ_1_lô: number // số các số chỉ ra đúng 1 lô năm trước
  số_chỉ_1_lô_ra_lại: number
  lời_lỗ_chỉ_1_lô: number | null
  vốn_chỉ_1_lô: number
  số_từ_4_lô: number
  số_từ_4_lô_ra_lại: number
  lời_lỗ_từ_4_lô: number | null
  vốn_từ_4_lô: number
  số_từ_5_lô: number
  số_từ_5_lô_ra_lại: number
  lời_lỗ_từ_5_lô: number | null
  vốn_từ_5_lô: number
  vốn: number // nghìn đồng: mua tất cả các số trên ở mọi đài của ngày
  lời_lỗ: number | null // null = ngày hiện tại chưa có kết quả
  // các số nằm giữa đúng 2 số năm trước cách nhau 2 (13 và 15 thì có 14; 12 và 15 thì không), số đó chưa có trong danh sách
  các_số_giữa: { số: string; có: boolean; lô_nay: number }[]
  lời_lỗ_số_giữa: number | null // chỉ mua các số giữa ở mọi đài của ngày; null = chưa có kết quả
  vốn_mỗi_số: number // mua 1 số ở mọi đài của ngày (số đài × giá mỗi đài)
  thưởng_mỗi_lô: number
  nhãn_xem_trước: string // 'hôm nay' | 'ngày mai' cho dòng xem trước, '' cho dòng đã có kết quả
  chưa_có_kết_quả: boolean // ngày hiện tại chưa có kết quả: hiện 0/N và các số năm trước (không tô xanh/đỏ)
}

// So từng ngày với cùng ngày/tháng của năm trước: những số đã ra hôm đó năm trước, năm nay có ra lại không.
// Chỉ có dòng khi dữ liệu có cả hai năm (29/02 không có ngày tương ứng thì bỏ qua).
// So sánh theo 2 hoặc 3 số cuối của giải (3 số cuối bỏ qua giải 8 chỉ có 2 chữ số)
const số_chữ_số_so_sánh = ref<2 | 3>(2)
// Tiền tính bằng nghìn đồng, mua 1 số ở 1 đài. Giá mua 15k cho cả 2 và 3 số;
// tiền thưởng 1 lô: 2 số 80k, 3 số 600k
const giá_so_sánh = (độ_dài: 2 | 3) => ({
  giá_mỗi_đài: GIÁ_MỖI_ĐÀI,
  tiền_thưởng_mỗi_lô: độ_dài === 2 ? TIỀN_THƯỞNG_MỖI_LÔ : 600,
})
// Số m chưa có trong danh sách mà m−1 và m+1 đều có (không nối vòng 99 với 00)
const tìm_số_giữa = (các_số: string[], độ_dài: number) => {
  const tập = new Set(các_số.map(Number))
  const giữa: string[] = []
  for (let m = 1; m < 10 ** độ_dài - 1; m++) {
    if (!tập.has(m) && tập.has(m - 1) && tập.has(m + 1)) giữa.push(String(m).padStart(độ_dài, '0'))
  }
  return giữa
}
const các_dòng_năm_trước = computed<Dòng_Năm_Trước[]>(() => {
  const độ_dài = số_chữ_số_so_sánh.value
  const giá = giá_so_sánh(độ_dài)
  const theo_ngày = new Map<string, Map<string, number>>() // ngày DD/MM/YYYY -> (số -> số lô)
  const số_đài_theo_ngày = new Map<string, number>() // ngày -> số đài (3, thứ 7 là 4)
  for (const hàng of tất_cả_hàng.value) {
    số_đài_theo_ngày.set(hàng[1], (số_đài_theo_ngày.get(hàng[1]) ?? 0) + 1)
    const đếm = theo_ngày.get(hàng[1]) ?? new Map<string, number>()
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      if (giải.length < độ_dài) continue
      const số = giải.slice(-độ_dài)
      đếm.set(số, (đếm.get(số) ?? 0) + 1)
    }
    theo_ngày.set(hàng[1], đếm)
  }

  const kết_quả: Dòng_Năm_Trước[] = []
  for (const [ngày, hôm_nay] of theo_ngày) {
    if (năm_lọc.value && ngày.slice(-4) !== năm_lọc.value) continue
    const ngày_năm_trước = `${ngày.slice(0, 6)}${Number(ngày.slice(-4)) - 1}`
    const năm_trước = theo_ngày.get(ngày_năm_trước)
    if (!năm_trước) continue
    const các_số = [...năm_trước.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([số, lô_trước]) => ({
        số,
        lô_trước,
        có: hôm_nay.has(số),
        lô_nay: hôm_nay.get(số) ?? 0,
      }))
    const vốn = các_số.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng = các_số.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_chỉ_1_lô = các_số.filter((mục) => mục.lô_trước === 1)
    const vốn_chỉ_1_lô =
      các_số_chỉ_1_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_chỉ_1_lô =
      các_số_chỉ_1_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_chỉ_2_lô = các_số.filter((mục) => mục.lô_trước === 2)
    const vốn_chỉ_2_lô =
      các_số_chỉ_2_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_chỉ_2_lô =
      các_số_chỉ_2_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_từ_3_lô = các_số.filter((mục) => mục.lô_trước >= 3)
    const vốn_từ_3_lô = các_số_từ_3_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_từ_3_lô =
      các_số_từ_3_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_từ_4_lô = các_số.filter((mục) => mục.lô_trước >= 4)
    const vốn_từ_4_lô = các_số_từ_4_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_từ_4_lô =
      các_số_từ_4_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_từ_5_lô = các_số.filter((mục) => mục.lô_trước >= 5)
    const vốn_từ_5_lô = các_số_từ_5_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_từ_5_lô =
      các_số_từ_5_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_giữa = tìm_số_giữa(
      các_số.map((mục) => mục.số),
      độ_dài,
    ).map((số) => ({ số, có: hôm_nay.has(số), lô_nay: hôm_nay.get(số) ?? 0 }))
    const vốn_số_giữa = các_số_giữa.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_số_giữa =
      các_số_giữa.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    kết_quả.push({
      ngày,
      thời_điểm: đổi_ngày_thành_số(ngày),
      ngày_năm_trước,
      các_số,
      các_số_giữa,
      lời_lỗ_số_giữa: thưởng_số_giữa - vốn_số_giữa,
      số_trùng: các_số.filter((mục) => mục.có).length,
      số_chỉ_1_lô: các_số_chỉ_1_lô.length,
      số_chỉ_1_lô_ra_lại: các_số_chỉ_1_lô.filter((mục) => mục.có).length,
      lời_lỗ_chỉ_1_lô: thưởng_chỉ_1_lô - vốn_chỉ_1_lô,
      vốn_chỉ_1_lô,
      số_chỉ_2_lô: các_số.filter((mục) => mục.lô_trước === 2).length,
      số_chỉ_2_lô_ra_lại: các_số.filter((mục) => mục.lô_trước === 2 && mục.có).length,
      lời_lỗ_chỉ_2_lô: thưởng_chỉ_2_lô - vốn_chỉ_2_lô,
      vốn_chỉ_2_lô,
      số_từ_3_lô: các_số_từ_3_lô.length,
      số_từ_3_lô_ra_lại: các_số_từ_3_lô.filter((mục) => mục.có).length,
      lời_lỗ_từ_3_lô: thưởng_từ_3_lô - vốn_từ_3_lô,
      vốn_từ_3_lô,
      số_từ_4_lô: các_số_từ_4_lô.length,
      số_từ_4_lô_ra_lại: các_số_từ_4_lô.filter((mục) => mục.có).length,
      lời_lỗ_từ_4_lô: thưởng_từ_4_lô - vốn_từ_4_lô,
      vốn_từ_4_lô,
      số_từ_5_lô: các_số_từ_5_lô.length,
      số_từ_5_lô_ra_lại: các_số_từ_5_lô.filter((mục) => mục.có).length,
      lời_lỗ_từ_5_lô: thưởng_từ_5_lô - vốn_từ_5_lô,
      vốn_từ_5_lô,
      vốn,
      lời_lỗ: thưởng - vốn,
      vốn_mỗi_số: (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài,
      thưởng_mỗi_lô: giá.tiền_thưởng_mỗi_lô,
      nhãn_xem_trước: '',
      chưa_có_kết_quả: false,
    })
  }

  // Hôm nay (nếu chưa có kết quả) và ngày mai vẫn hiện, để xem trước các số của cùng ngày năm trước
  for (const [nhãn, số_ngày_cộng] of [
    ['hôm nay', 0],
    ['ngày mai', 1],
  ] as const) {
    const bây_giờ = new Date()
    bây_giờ.setDate(bây_giờ.getDate() + số_ngày_cộng)
    const hôm_nay_chuỗi = `${hai_chữ_số(bây_giờ.getDate())}/${hai_chữ_số(bây_giờ.getMonth() + 1)}/${bây_giờ.getFullYear()}`
    if (
      theo_ngày.has(hôm_nay_chuỗi) ||
      (năm_lọc.value && năm_lọc.value !== hôm_nay_chuỗi.slice(-4))
    ) {
      continue
    }
    const ngày_năm_trước = `${hôm_nay_chuỗi.slice(0, 6)}${bây_giờ.getFullYear() - 1}`
    const năm_trước = theo_ngày.get(ngày_năm_trước)
    if (năm_trước) {
      kết_quả.push({
        ngày: hôm_nay_chuỗi,
        nhãn_xem_trước: nhãn,
        các_số_giữa: tìm_số_giữa([...năm_trước.keys()], độ_dài).map((số) => ({
          số,
          có: false,
          lô_nay: 0,
        })),
        lời_lỗ_số_giữa: null,
        vốn_mỗi_số: 0,
        thưởng_mỗi_lô: giá.tiền_thưởng_mỗi_lô,
        thời_điểm: đổi_ngày_thành_số(hôm_nay_chuỗi),
        ngày_năm_trước,
        các_số: [...năm_trước.entries()]
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([số, lô_trước]) => ({ số, lô_trước, có: false, lô_nay: 0 })),
        số_trùng: 0,
        số_chỉ_1_lô: [...năm_trước.values()].filter((lô) => lô === 1).length,
        số_chỉ_1_lô_ra_lại: 0,
        lời_lỗ_chỉ_1_lô: null,
        vốn_chỉ_1_lô: 0,
        số_chỉ_2_lô: [...năm_trước.values()].filter((lô) => lô === 2).length,
        số_chỉ_2_lô_ra_lại: 0,
        lời_lỗ_chỉ_2_lô: null,
        vốn_chỉ_2_lô: 0,
        vốn_từ_3_lô: 0,
        số_từ_3_lô: [...năm_trước.values()].filter((lô) => lô >= 3).length,
        số_từ_3_lô_ra_lại: 0,
        lời_lỗ_từ_3_lô: null,
        số_từ_4_lô: [...năm_trước.values()].filter((lô) => lô >= 4).length,
        số_từ_4_lô_ra_lại: 0,
        lời_lỗ_từ_4_lô: null,
        vốn_từ_4_lô: 0,
        số_từ_5_lô: [...năm_trước.values()].filter((lô) => lô >= 5).length,
        số_từ_5_lô_ra_lại: 0,
        lời_lỗ_từ_5_lô: null,
        vốn_từ_5_lô: 0,
        vốn: 0,
        lời_lỗ: null,
        chưa_có_kết_quả: true,
      })
    }
  }
  return kết_quả.sort((a, b) => b.thời_điểm - a.thời_điểm)
})
// Bộ lọc theo số năm trước: nhập "30(2)" (số 30 đã ra đúng 2 lô năm trước) hoặc "30" (bất kỳ số lô),
// đúng cú pháp thì thành 1 nút; bấm nút để bật/tắt lọc, các ngày hiện ra là ngày có ít nhất 1 số khớp nút đang bật
type Bộ_Lọc_Số = { số: string; lô: number | null; bật: boolean }
const nhập_bộ_lọc_số = ref('')
const lỗi_bộ_lọc_số = ref(false)
// Lưu trong localStorage, tách riêng cho 2 số cuối và 3 số cuối (nút của số này không dùng được cho số kia)
const KHÓA_LƯU_BỘ_LỌC_SỐ = 'loto_bo_loc_so_nam_truoc'
const đọc_bộ_lọc_đã_lưu = (): Record<string, Bộ_Lọc_Số[]> => {
  try {
    const dữ_liệu = JSON.parse(localStorage.getItem(KHÓA_LƯU_BỘ_LỌC_SỐ) ?? '{}')
    const kết_quả: Record<string, Bộ_Lọc_Số[]> = {}
    for (const độ_dài of ['2', '3']) {
      const danh_sách: unknown = dữ_liệu?.[độ_dài]
      kết_quả[độ_dài] = Array.isArray(danh_sách)
        ? danh_sách
            .filter(
              (mục) =>
                typeof mục?.số === 'string' &&
                mục.số.length === Number(độ_dài) &&
                (mục.lô === null || typeof mục.lô === 'number'),
            )
            .map((mục) => ({ số: mục.số, lô: mục.lô, bật: mục.bật !== false }))
        : []
    }
    return kết_quả
  } catch {
    return { '2': [], '3': [] }
  }
}
const bộ_lọc_đã_lưu = đọc_bộ_lọc_đã_lưu()
const các_bộ_lọc_số = ref<Bộ_Lọc_Số[]>(bộ_lọc_đã_lưu[String(số_chữ_số_so_sánh.value)] ?? [])
watch(
  các_bộ_lọc_số,
  (danh_sách) => {
    bộ_lọc_đã_lưu[String(số_chữ_số_so_sánh.value)] = danh_sách.map((mục) => ({ ...mục }))
    try {
      localStorage.setItem(KHÓA_LƯU_BỘ_LỌC_SỐ, JSON.stringify(bộ_lọc_đã_lưu))
    } catch {
      // không lưu được (chế độ riêng tư, bị chặn): vẫn dùng bình thường, chỉ không nhớ lại
    }
  },
  { deep: true },
)
const nhãn_bộ_lọc = (bộ_lọc: Bộ_Lọc_Số) =>
  bộ_lọc.lô === null ? bộ_lọc.số : `${bộ_lọc.số}(${bộ_lọc.lô})`
const thêm_bộ_lọc_số = () => {
  const khớp = new RegExp(`^(\\d{${số_chữ_số_so_sánh.value}})(?:\\((\\d{1,2})\\))?$`).exec(
    nhập_bộ_lọc_số.value.trim(),
  )
  if (!khớp) {
    lỗi_bộ_lọc_số.value = nhập_bộ_lọc_số.value.trim() !== ''
    return
  }
  lỗi_bộ_lọc_số.value = false
  const lô = khớp[2] === undefined ? null : Number(khớp[2])
  const bộ_lọc: Bộ_Lọc_Số = { số: khớp[1], lô, bật: true }
  if (!các_bộ_lọc_số.value.some((mục) => nhãn_bộ_lọc(mục) === nhãn_bộ_lọc(bộ_lọc))) {
    các_bộ_lọc_số.value.push(bộ_lọc)
  }
  nhập_bộ_lọc_số.value = ''
}
// đổi giữa 2 và 3 số cuối thì chuyển sang bộ nút của độ dài đó
watch(số_chữ_số_so_sánh, (độ_dài) => {
  các_bộ_lọc_số.value = (bộ_lọc_đã_lưu[String(độ_dài)] ?? []).map((mục) => ({ ...mục }))
  nhập_bộ_lọc_số.value = ''
  lỗi_bộ_lọc_số.value = false
})
const khớp_bộ_lọc_đang_bật = (mục: { số: string; lô_trước: number }) =>
  các_bộ_lọc_số.value.some(
    (lọc) => lọc.bật && lọc.số === mục.số && (lọc.lô === null || lọc.lô === mục.lô_trước),
  )
const có_bộ_lọc_đang_bật = computed(() => các_bộ_lọc_số.value.some((mục) => mục.bật))
// Các số của dòng khớp bộ lọc đang bật, và lời/lỗ nếu chỉ mua các số đó (null = chưa có kết quả)
const các_số_khớp_lọc = (dòng: Dòng_Năm_Trước) => dòng.các_số.filter(khớp_bộ_lọc_đang_bật)
const lời_lỗ_số_lọc = (dòng: Dòng_Năm_Trước) => {
  if (dòng.chưa_có_kết_quả) return null
  const các_số = các_số_khớp_lọc(dòng)
  const lô = các_số.reduce((tổng, mục) => tổng + mục.lô_nay, 0)
  return lô * dòng.thưởng_mỗi_lô - các_số.length * dòng.vốn_mỗi_số
}
// Lọc theo thứ của ngày hiện tại: '' = tất cả; 0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7
const thứ_lọc_năm_trước = ref<'' | number>('')
const các_dòng_năm_trước_hiển_thị = computed(() => {
  const theo_thứ =
    thứ_lọc_năm_trước.value === ''
      ? các_dòng_năm_trước.value
      : các_dòng_năm_trước.value.filter(
          (dòng) => new Date(dòng.thời_điểm).getUTCDay() === thứ_lọc_năm_trước.value,
        )
  if (!các_bộ_lọc_số.value.some((mục) => mục.bật)) return theo_thứ
  return theo_thứ.filter((dòng) => dòng.các_số.some(khớp_bộ_lọc_đang_bật))
})
// Đài nào đánh theo đài đó (dùng cho "chỉ 2 lô" và "từ 3 lô"): số ra đủ lô (cộng các đài) cùng ngày năm trước, ra ở những đài nào thì chỉ mua
// bấy nhiêu đài. Hai ngày khác thứ nên khác đài: ghép theo vị trí (đài thứ i năm trước -> đài thứ i hôm nay, theo thứ
// tự trong sheet); vị trí hôm nay không có đài thì không mua
const tính_mua_theo_đài = (đúng_lô: (lô_trước: number) => boolean) => {
  const độ_dài = số_chữ_số_so_sánh.value
  const giá = giá_so_sánh(độ_dài)
  const đài_theo_ngày = new Map<string, { đài: string; đếm: Map<string, number> }[]>()
  for (const hàng of tất_cả_hàng.value) {
    const đếm = new Map<string, number>()
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      if (giải.length < độ_dài) continue
      const số = giải.slice(-độ_dài)
      đếm.set(số, (đếm.get(số) ?? 0) + 1)
    }
    const danh_sách = đài_theo_ngày.get(hàng[1]) ?? []
    danh_sách.push({ đài: hàng[0], đếm })
    đài_theo_ngày.set(hàng[1], danh_sách)
  }
  const các_ngày_có = [...đài_theo_ngày.keys()]
    .map((ngày) => ({ ngày, lúc: đổi_ngày_thành_số(ngày) }))
    .sort((a, b) => b.lúc - a.lúc)
  return new Map(
    các_dòng_năm_trước.value.map((dòng) => {
      const năm_trước = đài_theo_ngày.get(dòng.ngày_năm_trước) ?? []
      const hôm_nay = đài_theo_ngày.get(dòng.ngày)
      // chưa có kết quả: lấy tên đài của cùng thứ gần nhất
      const cùng_thứ = các_ngày_có.find(
        (mục) =>
          mục.lúc < dòng.thời_điểm &&
          new Date(mục.lúc).getUTCDay() === new Date(dòng.thời_điểm).getUTCDay(),
      )
      const đài_mua = hôm_nay ?? đài_theo_ngày.get(cùng_thứ?.ngày ?? '') ?? []
      const các_số = dòng.các_số
        .filter((mục) => đúng_lô(mục.lô_trước))
        .map(({ số }) => ({
          số,
          mua: năm_trước.flatMap((đài_cũ, vị_trí) => {
            const đài = đài_mua[vị_trí]
            if (!đài_cũ.đếm.has(số) || !đài) return []
            return [{ đài: đài.đài, lô: hôm_nay ? (đài.đếm.get(số) ?? 0) : 0 }]
          }),
        }))
      const các_lượt = các_số.flatMap((mục) => mục.mua)
      const vốn = các_lượt.length * giá.giá_mỗi_đài
      const lô = các_lượt.reduce((tổng, lượt) => tổng + lượt.lô, 0)
      return [
        dòng.ngày,
        { các_số, vốn, lời_lỗ: hôm_nay ? lô * giá.tiền_thưởng_mỗi_lô - vốn : null },
      ] as const
    }),
  )
}
const theo_đài_chỉ_2_lô = computed(() => tính_mua_theo_đài((lô) => lô === 2))
const theo_đài_từ_3_lô = computed(() => tính_mua_theo_đài((lô) => lô >= 3))
// Tổng các ngày đang hiển thị đã có kết quả
const tính_tổng_theo_đài = (theo_ngày: ReturnType<typeof tính_mua_theo_đài>) => {
  let vốn = 0
  let lời_lỗ = 0
  for (const dòng of các_dòng_năm_trước_hiển_thị.value) {
    const mục = theo_ngày.get(dòng.ngày)
    if (!mục || mục.lời_lỗ === null) continue
    vốn += mục.vốn
    lời_lỗ += mục.lời_lỗ
  }
  return { vốn, lời_lỗ }
}
const tổng_theo_đài_chỉ_2_lô = computed(() => tính_tổng_theo_đài(theo_đài_chỉ_2_lô.value))
const tổng_theo_đài_từ_3_lô = computed(() => tính_tổng_theo_đài(theo_đài_từ_3_lô.value))
// Bấm vào dòng % của một nhóm (chỉ 1 lô, từ 3 lô, ...) để mở/đóng bảng chia theo tháng
const các_nhóm_đang_mở = ref<string[]>([])
const bật_tắt_nhóm = (nhãn: string) => {
  các_nhóm_đang_mở.value = các_nhóm_đang_mở.value.includes(nhãn)
    ? các_nhóm_đang_mở.value.filter((mục) => mục !== nhãn)
    : [...các_nhóm_đang_mở.value, nhãn]
}
const thống_kê_năm_trước = computed(() => {
  // ngày chưa có kết quả không tính vào thống kê
  const các_dòng = các_dòng_năm_trước_hiển_thị.value.filter((dòng) => !dòng.chưa_có_kết_quả)
  const tổng_số = các_dòng.reduce((tổng, dòng) => tổng + dòng.các_số.length, 0)
  const số_trùng = các_dòng.reduce((tổng, dòng) => tổng + dòng.số_trùng, 0)
  const nhóm_lô = (
    số: (dòng: Dòng_Năm_Trước) => number,
    ra_lại: (dòng: Dòng_Năm_Trước) => number,
    vốn: (dòng: Dòng_Năm_Trước) => number,
    lời_lỗ: (dòng: Dòng_Năm_Trước) => number | null,
  ) => {
    const tổng = các_dòng.reduce((t, dòng) => t + số(dòng), 0)
    const trùng = các_dòng.reduce((t, dòng) => t + ra_lại(dòng), 0)
    // chia theo tháng (khóa năm-tháng, xếp từ tháng đầu đến tháng cuối) để xem vốn và lời/lỗ từng tháng
    const theo_tháng_map = new Map<
      string,
      { nhãn: string; tổng_số: number; số_trùng: number; vốn: number; lời_lỗ: number }
    >()
    for (const dòng of các_dòng) {
      const [, tháng, năm] = dòng.ngày.split('/')
      const khóa = `${năm}-${tháng}`
      const mục = theo_tháng_map.get(khóa) ?? {
        nhãn: `Tháng ${tháng}/${năm}`,
        tổng_số: 0,
        số_trùng: 0,
        vốn: 0,
        lời_lỗ: 0,
      }
      mục.tổng_số += số(dòng)
      mục.số_trùng += ra_lại(dòng)
      mục.vốn += vốn(dòng)
      mục.lời_lỗ += lời_lỗ(dòng) ?? 0
      theo_tháng_map.set(khóa, mục)
    }
    const theo_tháng = [...theo_tháng_map.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([, mục]) => ({
        ...mục,
        tỉ_lệ: mục.tổng_số ? (mục.số_trùng / mục.tổng_số) * 100 : 0,
      }))
    return {
      tổng_số: tổng,
      số_trùng: trùng,
      tỉ_lệ: tổng ? (trùng / tổng) * 100 : 0,
      vốn: các_dòng.reduce((t, dòng) => t + vốn(dòng), 0),
      lời_lỗ: các_dòng.reduce((t, dòng) => t + (lời_lỗ(dòng) ?? 0), 0),
      theo_tháng,
    }
  }
  return {
    số_ngày: các_dòng.length,
    tổng_số,
    số_trùng,
    vốn: các_dòng.reduce((tổng, dòng) => tổng + dòng.vốn, 0),
    lời_lỗ: các_dòng.reduce((tổng, dòng) => tổng + (dòng.lời_lỗ ?? 0), 0),
    tỉ_lệ: tổng_số ? (số_trùng / tổng_số) * 100 : 0,
    chỉ_1_lô: nhóm_lô(
      (dòng) => dòng.số_chỉ_1_lô,
      (dòng) => dòng.số_chỉ_1_lô_ra_lại,
      (dòng) => dòng.vốn_chỉ_1_lô,
      (dòng) => dòng.lời_lỗ_chỉ_1_lô,
    ),
    chỉ_2_lô: nhóm_lô(
      (dòng) => dòng.số_chỉ_2_lô,
      (dòng) => dòng.số_chỉ_2_lô_ra_lại,
      (dòng) => dòng.vốn_chỉ_2_lô,
      (dòng) => dòng.lời_lỗ_chỉ_2_lô,
    ),
    từ_3_lô: nhóm_lô(
      (dòng) => dòng.số_từ_3_lô,
      (dòng) => dòng.số_từ_3_lô_ra_lại,
      (dòng) => dòng.vốn_từ_3_lô,
      (dòng) => dòng.lời_lỗ_từ_3_lô,
    ),
    từ_4_lô: nhóm_lô(
      (dòng) => dòng.số_từ_4_lô,
      (dòng) => dòng.số_từ_4_lô_ra_lại,
      (dòng) => dòng.vốn_từ_4_lô,
      (dòng) => dòng.lời_lỗ_từ_4_lô,
    ),
    số_giữa: nhóm_lô(
      (dòng) => dòng.các_số_giữa.length,
      (dòng) => dòng.các_số_giữa.filter((mục) => mục.có).length,
      (dòng) => dòng.các_số_giữa.length * dòng.vốn_mỗi_số,
      (dòng) => dòng.lời_lỗ_số_giữa,
    ),
    số_lọc: nhóm_lô(
      (dòng) => các_số_khớp_lọc(dòng).length,
      (dòng) => các_số_khớp_lọc(dòng).filter((mục) => mục.có).length,
      (dòng) => các_số_khớp_lọc(dòng).length * dòng.vốn_mỗi_số,
      (dòng) => lời_lỗ_số_lọc(dòng),
    ),
    từ_5_lô: nhóm_lô(
      (dòng) => dòng.số_từ_5_lô,
      (dòng) => dòng.số_từ_5_lô_ra_lại,
      (dòng) => dòng.vốn_từ_5_lô,
      (dòng) => dòng.lời_lỗ_từ_5_lô,
    ),
  }
})

// Theo từng đài, tách theo thứ trong tuần: những số (2 hoặc 3 số cuối) ra nhiều nhất trong năm đang chọn
const SỐ_HAY_RA_MỖI_ĐÀI = ref<10 | 20 | 50 | 100>(10)
// 4 số cuối: chỉ các giải có từ 4 chữ số trở lên (16 giải, trừ giải 8 và giải 7); đầu = giải có đúng 4 chữ số (giải 6)
const số_chữ_số_theo_đài = ref<2 | 3 | 4>(2)
// lô = cả 18 số; đầu = giải 8 (2 số cuối) hoặc giải 7 (3 số cuối); cuối = giải đặc biệt; đầu_cuối = cả hai
const chế_độ_theo_đài = ref<'lô' | 'đầu' | 'cuối' | 'đầu_cuối'>('lô')
type Số_Hay_Ra = { số: string; số_lần: number }
type Đài_Hay_Ra = {
  đài: string
  thứ: number // 0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7
  số_kỳ: number // số ngày đài này quay vào thứ đó trong năm
  các_số: Số_Hay_Ra[] // nhiều nhất trước; bằng nhau thì xếp theo số
}
// Tên đài bị ghi nhầm trong sheet: (đài, thứ) -> tên đúng. Ví dụ thứ 5 phải là Bình Thuận (BTH) nhưng sheet ghi BT
// (trùng với Bến Tre quay thứ 3). Chỉ áp dụng cho lựa chọn 6.
const SỬA_TÊN_ĐÀI: { đài: string; thứ: number; thành: string }[] = [
  { đài: 'BT', thứ: 4, thành: 'BTH' },
]
const các_đài_hay_ra = computed<Đài_Hay_Ra[]>(() => {
  const độ_dài = số_chữ_số_theo_đài.value
  const chế_độ = chế_độ_theo_đài.value
  const theo_đài_thứ = new Map<
    string,
    { đài: string; thứ: number; số_kỳ: number; đếm: Map<string, number> }
  >()
  for (const hàng of các_hàng.value) {
    const thứ = new Date(đổi_ngày_thành_số(hàng[1])).getUTCDay()
    const đài = SỬA_TÊN_ĐÀI.find((mục) => mục.đài === hàng[0] && mục.thứ === thứ)?.thành ?? hàng[0]
    const khóa = `${thứ}|${đài}`
    const nhóm = theo_đài_thứ.get(khóa) ?? { đài, thứ, số_kỳ: 0, đếm: new Map<string, number>() }
    nhóm.số_kỳ++
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      if (giải.length < độ_dài) continue
      // nhận giải theo độ dài nên không phụ thuộc thứ tự trong sheet: đầu = giải 8 (2 chữ số) khi xem 2 số cuối,
      // giải 7 (3 chữ số) khi xem 3 số cuối; cuối = giải đặc biệt (6 chữ số)
      const là_đầu = giải.length === độ_dài
      const là_cuối = giải.length === 6
      if (chế_độ === 'đầu' && !là_đầu) continue
      if (chế_độ === 'cuối' && !là_cuối) continue
      if (chế_độ === 'đầu_cuối' && !là_đầu && !là_cuối) continue
      const số = giải.slice(-độ_dài)
      nhóm.đếm.set(số, (nhóm.đếm.get(số) ?? 0) + 1)
    }
    theo_đài_thứ.set(khóa, nhóm)
  }
  return [...theo_đài_thứ.values()]
    .map((nhóm) => ({
      đài: nhóm.đài,
      thứ: nhóm.thứ,
      số_kỳ: nhóm.số_kỳ,
      các_số: [...nhóm.đếm.entries()]
        .map(([số, số_lần]) => ({ số, số_lần }))
        .sort((a, b) => b.số_lần - a.số_lần || a.số.localeCompare(b.số))
        .slice(0, SỐ_HAY_RA_MỖI_ĐÀI.value),
    }))
    .sort((a, b) => a.đài.localeCompare(b.đài))
})
// Nhóm đài theo thứ trong tuần cho dễ xem: thứ 2 đến thứ 7, cuối cùng chủ nhật.
// Đài quay 2 thứ (ví dụ HCM) hiện ở cả 2 nhóm, mỗi nhóm chỉ tính các kỳ quay vào thứ đó.
const THỨ_THEO_TUẦN = [
  { thứ: 1, nhãn: 'Thứ 2' },
  { thứ: 2, nhãn: 'Thứ 3' },
  { thứ: 3, nhãn: 'Thứ 4' },
  { thứ: 4, nhãn: 'Thứ 5' },
  { thứ: 5, nhãn: 'Thứ 6' },
  { thứ: 6, nhãn: 'Thứ 7' },
  { thứ: 0, nhãn: 'Chủ nhật' },
]
// Số ngày có quay xổ số của từng thứ trong năm đang chọn (đếm theo ngày, không theo đài)
const số_ngày_quay_theo_thứ = computed(() => {
  const ngày_theo_thứ = new Map<number, Set<string>>()
  for (const hàng of các_hàng.value) {
    const thứ = new Date(đổi_ngày_thành_số(hàng[1])).getUTCDay()
    const tập = ngày_theo_thứ.get(thứ) ?? new Set<string>()
    tập.add(hàng[1])
    ngày_theo_thứ.set(thứ, tập)
  }
  return ngày_theo_thứ
})
// Lựa chọn 9: xem theo phần chục. Nhóm 0 = 00–09 (hiện là "00"), nhóm n = n0–n9 ("nx").
// Thống kê 2 số của giải 8 (giải có đúng 2 chữ số) và 2 số cuối của giải đặc biệt (giải có 6 chữ số) của từng đài.
const chục_đang_chọn = ref(0)
const THỨ_CÓ_DẤU_SAO = [2, 3, 5] // thứ 3, thứ 4 và thứ 6 (0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7) đánh dấu * trong ô chọn thứ
const thứ_lọc_phần_chục = ref<'' | number>('') // '' = tất cả các thứ; 0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7
const nhãn_phần_chục = (chục: number) =>
  chục === 0 ? '00 (00–09)' : `${chục}x (${chục}0–${chục}9)`
// Tiền tính bằng nghìn đồng, mua 1 số ở 1 đài cho 1 giải (giải 8 hoặc giải đặc biệt): 1k, trúng 80k hoặc 70k;
// mua cả đầu và cuối thì 2k mỗi đài (1 số, 3 đài, đầu + cuối = 1k × 3 × 2 = 6k)
const GIÁ_PHẦN_CHỤC = { giá_mỗi_đài: 1, tiền_thưởng: 80 } as const
type Kết_Quả_Đài_Phần_Chục = { đài: string; giải_8: string; đặc_biệt: string }
const lấy_hôm_nay = () => {
  const bây_giờ = new Date()
  return Date.UTC(bây_giờ.getFullYear(), bây_giờ.getMonth(), bây_giờ.getDate())
}
const thống_kê_phần_chục = computed(() => {
  const chục = chục_đang_chọn.value
  const trong_nhóm = (số: string) => Math.floor(Number(số) / 10) === chục
  const theo_ngày = new Map<string, Kết_Quả_Đài_Phần_Chục[]>()
  let tổng_giải_8 = 0
  let tổng_đặc_biệt = 0
  let trùng_giải_8 = 0
  let trùng_đặc_biệt = 0
  for (const hàng of các_hàng.value) {
    if (
      thứ_lọc_phần_chục.value !== '' &&
      new Date(đổi_ngày_thành_số(hàng[1])).getUTCDay() !== thứ_lọc_phần_chục.value
    ) {
      continue
    }
    const các_giải = hàng[2].split(/\s+/).filter(Boolean)
    const giải_8 = các_giải.find((giải) => giải.length === 2)
    const đặc_biệt = các_giải.find((giải) => giải.length === 6)?.slice(-2)
    if (giải_8 === undefined && đặc_biệt === undefined) continue
    const danh_sách = theo_ngày.get(hàng[1]) ?? []
    danh_sách.push({ đài: hàng[0], giải_8: giải_8 ?? '', đặc_biệt: đặc_biệt ?? '' })
    theo_ngày.set(hàng[1], danh_sách)
    if (giải_8 !== undefined) {
      tổng_giải_8++
      if (trong_nhóm(giải_8)) trùng_giải_8++
    }
    if (đặc_biệt !== undefined) {
      tổng_đặc_biệt++
      if (trong_nhóm(đặc_biệt)) trùng_đặc_biệt++
    }
  }
  // Số lô (2 số cuối của cả 18 số, cộng mọi đài) từng số đã ra trong mỗi ngày của năm đang chọn
  const lô_theo_ngày = new Map<string, Map<string, number>>()
  for (const hàng of các_hàng.value) {
    const đếm = lô_theo_ngày.get(hàng[1]) ?? new Map<string, number>()
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      const số = giải.slice(-2).padStart(2, '0')
      đếm.set(số, (đếm.get(số) ?? 0) + 1)
    }
    lô_theo_ngày.set(hàng[1], đếm)
  }
  // Kết quả giải 8 và giải đặc biệt của mọi ngày (mọi năm) để tra cùng ngày/tháng của năm trước
  const mọi_ngày = new Map<string, Kết_Quả_Đài_Phần_Chục[]>()
  for (const hàng of tất_cả_hàng.value) {
    const các_giải = hàng[2].split(/\s+/).filter(Boolean)
    const giải_8 = các_giải.find((giải) => giải.length === 2) ?? ''
    const đặc_biệt = các_giải.find((giải) => giải.length === 6)?.slice(-2) ?? ''
    const danh_sách = mọi_ngày.get(hàng[1]) ?? []
    danh_sách.push({ đài: hàng[0], giải_8, đặc_biệt })
    mọi_ngày.set(hàng[1], danh_sách)
  }
  // Lời/lỗ: mua cả 10 số của nhóm cho giải 8 (hoặc giải đặc biệt) ở mọi đài của ngày; mỗi đài chỉ có 1 số của giải đó,
  // nên trúng = số đài có giải đó thuộc nhóm
  const giá = GIÁ_PHẦN_CHỤC
  // Mua các số (giải 8 và 2 số cuối giải đặc biệt, bỏ trùng) của cùng ngày năm trước, mỗi số mua đầu + cuối = 2k mỗi đài
  // ở mọi đài của ngày; mỗi lần 1 đài ra số đó ở giải 8 hoặc giải đặc biệt trúng 80k
  const GIÁ_MUA_SỐ_NĂM_TRƯỚC = 2
  const tính_khớp = (
    các_đài_năm_trước: Kết_Quả_Đài_Phần_Chục[],
    các_đài_hôm_nay: Kết_Quả_Đài_Phần_Chục[],
    số_đài: number,
  ) => {
    const số_mua = new Set(
      các_đài_năm_trước.flatMap((mục) => [mục.giải_8, mục.đặc_biệt]).filter((số) => số !== ''),
    )
    const số_ra = các_đài_hôm_nay.flatMap((mục) => [mục.giải_8, mục.đặc_biệt])
    const khớp = [...số_mua].filter((số) => số_ra.includes(số)).length
    const trúng = số_ra.filter((số) => số !== '' && số_mua.has(số)).length
    const vốn = số_mua.size * số_đài * GIÁ_MUA_SỐ_NĂM_TRƯỚC
    return {
      khớp,
      tổng: số_mua.size,
      phần_trăm: số_mua.size ? (khớp / số_mua.size) * 100 : null,
      vốn,
      lời_lỗ: trúng * giá.tiền_thưởng - vốn,
    }
  }
  // Cùng các số năm trước nhưng mua lô: 15k mỗi số mỗi đài, mỗi lô trúng 80k (số ra ở giải nào cũng tính, ra mấy lần trúng mấy lô)
  const tính_lô = (
    các_đài_năm_trước: Kết_Quả_Đài_Phần_Chục[],
    đếm_lô: Map<string, number> | undefined,
    số_đài: number,
  ) => {
    const số_mua = new Set(
      các_đài_năm_trước.flatMap((mục) => [mục.giải_8, mục.đặc_biệt]).filter((số) => số !== ''),
    )
    const lô = [...số_mua].reduce((tổng, số) => tổng + (đếm_lô?.get(số) ?? 0), 0)
    const vốn = số_mua.size * số_đài * GIÁ_MỖI_ĐÀI
    // các số năm trước có ra hôm nay kèm số lô, ví dụ 05(2)
    const trúng = [...số_mua]
      .map((số) => ({ số, lô: đếm_lô?.get(số) ?? 0 }))
      .filter((mục) => mục.lô > 0)
    return { lô, trúng, vốn, lời_lỗ: lô * TIỀN_THƯỞNG_MỖI_LÔ - vốn }
  }
  // "Số đài nào mua đài đó": mỗi đài quay trong ngày lấy kỳ của chính đài đó gần ngày này năm trước nhất (lệch tối đa
  // 7 ngày), mua số giải 8 và 2 số cuối giải đặc biệt của kỳ đó chỉ ở đài đó: 15k mỗi số, mỗi lô trúng 80k
  const đài_theo_lúc = new Map<number, Map<string, string[]>>() // ngày -> đài -> các giải
  for (const hàng of tất_cả_hàng.value) {
    const lúc = đổi_ngày_thành_số(hàng[1])
    const thứ = new Date(lúc).getUTCDay()
    const đài = SỬA_TÊN_ĐÀI.find((mục) => mục.đài === hàng[0] && mục.thứ === thứ)?.thành ?? hàng[0]
    const các_đài = đài_theo_lúc.get(lúc) ?? new Map<string, string[]>()
    các_đài.set(đài, hàng[2].split(/\s+/).filter(Boolean))
    đài_theo_lúc.set(lúc, các_đài)
  }
  const các_lúc = [...đài_theo_lúc.keys()].sort((a, b) => b - a) // mới nhất trước
  const tính_chính_đài = (thời_điểm: number) => {
    const hôm_đó = đài_theo_lúc.get(thời_điểm)
    const ngày_đó = new Date(thời_điểm)
    // chưa có kết quả: lấy các đài của cùng thứ gần nhất
    const lúc_cùng_thứ = các_lúc.find(
      (lúc) => lúc < thời_điểm && new Date(lúc).getUTCDay() === ngày_đó.getUTCDay(),
    )
    const tên_đài = [...((hôm_đó ?? đài_theo_lúc.get(lúc_cùng_thứ ?? 0))?.keys() ?? [])]
    const mốc = Date.UTC(ngày_đó.getUTCFullYear() - 1, ngày_đó.getUTCMonth(), ngày_đó.getUTCDate())
    const các_đài = tên_đài.flatMap((đài) => {
      let gần_nhất: number | undefined
      for (const lúc of các_lúc) {
        const lệch = Math.abs(lúc - mốc)
        if (lệch > 7 * MILI_GIÂY_MỖI_NGÀY || !đài_theo_lúc.get(lúc)!.has(đài)) continue
        if (gần_nhất === undefined || lệch < Math.abs(gần_nhất - mốc)) gần_nhất = lúc
      }
      if (gần_nhất === undefined) return []
      const giải_cũ = đài_theo_lúc.get(gần_nhất)!.get(đài)!
      const số_mua = new Set(
        [
          giải_cũ.find((giải) => giải.length === 2),
          giải_cũ.find((giải) => giải.length === 6)?.slice(-2),
        ].filter((số): số is string => !!số),
      )
      const giải_nay = hôm_đó?.get(đài) ?? []
      const các_số = [...số_mua].map((số) => ({
        số,
        lô: giải_nay.filter((giải) => giải.slice(-2) === số).length,
      }))
      return [{ đài, ngày_lấy: đổi_thời_điểm_thành_ngày(gần_nhất), các_số }]
    })
    const các_số = các_đài.flatMap((mục) => mục.các_số)
    const vốn = hôm_đó ? các_số.length * GIÁ_MỖI_ĐÀI : 0
    const lô = các_số.reduce((tổng, mục) => tổng + mục.lô, 0)
    return { các_đài, lô, vốn, lời_lỗ: lô * TIỀN_THƯỞNG_MỖI_LÔ - vốn }
  }
  // Thêm 2 dòng hôm nay và ngày mai (nếu chưa có kết quả) để xem dự đoán trước; chỉ thêm khi thuộc năm/thứ đang lọc
  const các_mục_ngày = [...theo_ngày.entries()]
  const hôm_nay = lấy_hôm_nay()
  for (const thời_điểm of [hôm_nay, hôm_nay + MILI_GIÂY_MỖI_NGÀY]) {
    const ngày = đổi_thời_điểm_thành_ngày(thời_điểm)
    if (năm_lọc.value && ngày.slice(-4) !== năm_lọc.value) continue
    if (
      thứ_lọc_phần_chục.value !== '' &&
      new Date(thời_điểm).getUTCDay() !== thứ_lọc_phần_chục.value
    )
      continue
    if (các_mục_ngày.some(([có_ngày]) => đổi_ngày_thành_số(có_ngày) === thời_điểm)) continue
    các_mục_ngày.push([ngày, []])
  }
  const các_ngày = các_mục_ngày
    .map(([ngày, các_đài]) => {
      const chưa_có = các_đài.length === 0
      const số_đài_hôm_nay = chưa_có
        ? new Date(đổi_ngày_thành_số(ngày)).getUTCDay() === 6
          ? 4
          : 3
        : các_đài.length
      const tính = (lấy: (mục: Kết_Quả_Đài_Phần_Chục) => string) => {
        const số_đài = các_đài.filter((mục) => lấy(mục) !== '').length
        const trúng = các_đài.filter((mục) => trong_nhóm(lấy(mục)) && lấy(mục) !== '').length
        const vốn = 10 * số_đài * giá.giá_mỗi_đài
        return { trúng, vốn, lời_lỗ: trúng * giá.tiền_thưởng - vốn }
      }
      const ngày_năm_trước = `${ngày.slice(0, 6)}${Number(ngày.slice(-4)) - 1}`
      const các_đài_năm_trước = mọi_ngày.get(ngày_năm_trước) ?? []
      // Dự đoán: các phần chục của giải 8 và giải đặc biệt (2 số cuối) của mọi đài cùng ngày năm trước, gộp trùng
      // (ví dụ 40, 52, 36 và 30, 62, 23 cho ra 2x, 3x, 4x, 5x, 6x); mua cả 10 số của các phần chục đó cho đầu và cuối
      // Thứ tự theo lần xuất hiện đầu tiên (giải 8 trước, giải đặc biệt sau); số lần = bao nhiêu số năm trước thuộc phần chục đó
      const số_lần_theo_chục = new Map<number, number>()
      const số_năm_trước_theo_chục = new Map<number, string[]>() // các số năm trước tạo ra phần chục đó, theo thứ tự xuất hiện
      for (const số of các_đài_năm_trước.flatMap((mục) => [mục.giải_8, mục.đặc_biệt])) {
        if (số === '') continue
        const chục = Math.floor(Number(số) / 10)
        số_lần_theo_chục.set(chục, (số_lần_theo_chục.get(chục) ?? 0) + 1)
        số_năm_trước_theo_chục.set(chục, [...(số_năm_trước_theo_chục.get(chục) ?? []), số])
      }
      const phần_chục_dự_đoán = [...số_lần_theo_chục.keys()]
      // Kết quả hôm đó theo phần chục: giải 8 của mọi đài trước, giải đặc biệt sau; mỗi kết quả (1 đài, 1 giải) đếm 1 lần,
      // phần chục nhiều kết quả nhất xếp trước, bằng nhau thì theo thứ tự xuất hiện (ví dụ 7x(2), 2x, 5x, 3x, 9x)
      const số_kết_quả_theo_chục = new Map<number, number>()
      for (const số of [
        ...các_đài.map((mục) => mục.giải_8),
        ...các_đài.map((mục) => mục.đặc_biệt),
      ]) {
        if (số === '') continue
        const chục = Math.floor(Number(số) / 10)
        số_kết_quả_theo_chục.set(chục, (số_kết_quả_theo_chục.get(chục) ?? 0) + 1)
      }
      const phần_chục_kết_quả = [...số_kết_quả_theo_chục.entries()]
        .map(([chục, số_lần]) => ({ chục, số_lần }))
        .sort((a, b) => b.số_lần - a.số_lần)
      const trong_dự_đoán = (số: string) =>
        số !== '' && phần_chục_dự_đoán.includes(Math.floor(Number(số) / 10))
      const số_đài_có_giải = chưa_có
        ? 2 * (new Date(đổi_ngày_thành_số(ngày)).getUTCDay() === 6 ? 4 : 3) // chưa quay: thứ 7 là 4 đài, còn lại 3 đài
        : các_đài.filter((mục) => mục.giải_8 !== '').length +
          các_đài.filter((mục) => mục.đặc_biệt !== '').length
      const trúng_đầu = các_đài.filter((mục) => trong_dự_đoán(mục.giải_8)).length
      const trúng_cuối = các_đài.filter((mục) => trong_dự_đoán(mục.đặc_biệt)).length
      const vốn_dự_đoán = phần_chục_dự_đoán.length * 10 * số_đài_có_giải * giá.giá_mỗi_đài
      return {
        ngày,
        chưa_có,
        thời_điểm: đổi_ngày_thành_số(ngày),
        các_đài,
        ngày_năm_trước,
        các_đài_năm_trước,
        giải_8: tính((mục) => mục.giải_8),
        đặc_biệt: tính((mục) => mục.đặc_biệt),
        // 2 số của giải 8 và 2 số cuối của giải đặc biệt hôm đó (mọi đài), để tô màu số năm trước trùng
        số_ra: new Set(
          các_đài.flatMap((mục) => [mục.giải_8, mục.đặc_biệt]).filter((số) => số !== ''),
        ),
        khớp_năm_trước: tính_khớp(các_đài_năm_trước, các_đài, số_đài_hôm_nay),
        lô_năm_trước: tính_lô(các_đài_năm_trước, lô_theo_ngày.get(ngày), số_đài_hôm_nay),
        chính_đài: tính_chính_đài(đổi_ngày_thành_số(ngày)),
        phần_chục_kết_quả,
        dự_đoán: {
          phần_chục: phần_chục_dự_đoán,
          // từng phần chục dự đoán: xanh nếu hôm nay giải 8 hoặc giải đặc biệt của đài nào đó rơi vào, đỏ nếu không
          chi_tiết: phần_chục_dự_đoán.map((chục) => ({
            chục,
            số_lần: số_lần_theo_chục.get(chục) ?? 1,
            số_năm_trước: số_năm_trước_theo_chục.get(chục) ?? [],
            trúng: các_đài.some((mục) =>
              [mục.giải_8, mục.đặc_biệt].some(
                (số) => số !== '' && Math.floor(Number(số) / 10) === chục,
              ),
            ),
          })),
          trúng_đầu,
          trúng_cuối,
          số_đài: các_đài.length,
          vốn: vốn_dự_đoán,
          lời_lỗ: (trúng_đầu + trúng_cuối) * giá.tiền_thưởng - vốn_dự_đoán,
        },
      }
    })
    .sort((a, b) => b.thời_điểm - a.thời_điểm)
  const cộng = (lấy: (ngày: (typeof các_ngày)[number]) => { vốn: number; lời_lỗ: number }) => ({
    vốn: các_ngày.filter((ngày) => !ngày.chưa_có).reduce((t, ngày) => t + lấy(ngày).vốn, 0),
    lời_lỗ: các_ngày.filter((ngày) => !ngày.chưa_có).reduce((t, ngày) => t + lấy(ngày).lời_lỗ, 0),
  })
  const tổng_giải_8_tiền = cộng((ngày) => ngày.giải_8)
  const tổng_đặc_biệt_tiền = cộng((ngày) => ngày.đặc_biệt)
  const tổng_dự_đoán_tiền = cộng((ngày) => ngày.dự_đoán)
  const tổng_khớp_tiền = cộng((ngày) => ngày.khớp_năm_trước)
  const tổng_lô_tiền = cộng((ngày) => ngày.lô_năm_trước)
  const tổng_chính_đài_tiền = cộng((ngày) => ngày.chính_đài)
  // Tổng theo từng phần chục 00–09, 1x … 9x trên các ngày đã có kết quả: số lần giải 8 và 2 số cuối giải đặc biệt
  // (mỗi đài mỗi ngày 1 lần) rơi vào phần chục đó; số ngày phần chục đó được dự đoán (theo năm trước) và trong đó
  // số ngày trúng (hôm đó giải 8 hoặc giải đặc biệt của đài nào đó rơi vào phần chục đó)
  const tổng_theo_chục = Array.from({ length: 10 }, (_, chục) => ({
    chục,
    giải_8: 0,
    đặc_biệt: 0,
    dự_đoán: 0,
    trúng: 0,
    có_kết_quả: 0, // số ngày phần chục đó có ít nhất 1 kết quả (giải 8 hoặc giải đặc biệt của đài nào đó)
  }))
  const số_ngày_đã_có = các_ngày.filter((ngày) => !ngày.chưa_có).length
  for (const ngày of các_ngày) {
    if (ngày.chưa_có) continue
    for (const mục of ngày.phần_chục_kết_quả) tổng_theo_chục[mục.chục].có_kết_quả++
    for (const mục of ngày.các_đài) {
      if (mục.giải_8 !== '') tổng_theo_chục[Math.floor(Number(mục.giải_8) / 10)].giải_8++
      if (mục.đặc_biệt !== '') tổng_theo_chục[Math.floor(Number(mục.đặc_biệt) / 10)].đặc_biệt++
    }
    for (const mục of ngày.dự_đoán.chi_tiết) {
      tổng_theo_chục[mục.chục].dự_đoán++
      if (mục.trúng) tổng_theo_chục[mục.chục].trúng++
    }
  }
  const phần_trăm = (a: number, b: number) => (b ? (a / b) * 100 : 0)
  return {
    các_ngày,
    tiền_giải_8: tổng_giải_8_tiền,
    tiền_đặc_biệt: tổng_đặc_biệt_tiền,
    tiền_dự_đoán: tổng_dự_đoán_tiền,
    tổng_theo_chục,
    số_ngày_đã_có,
    tiền_khớp: tổng_khớp_tiền,
    tiền_lô: tổng_lô_tiền,
    tiền_chính_đài: tổng_chính_đài_tiền,
    tổng_giải_8,
    trùng_giải_8,
    tỉ_lệ_giải_8: phần_trăm(trùng_giải_8, tổng_giải_8),
    tổng_đặc_biệt,
    trùng_đặc_biệt,
    tỉ_lệ_đặc_biệt: phần_trăm(trùng_đặc_biệt, tổng_đặc_biệt),
  }
})
// Số năm trước trùng với một số đã ra hôm đó (giải 8 hoặc giải đặc biệt, bất kỳ đài nào): tô xanh, đậm
const kiểu_số_khớp = (số_ra: Set<string>, số: string) =>
  số !== '' && số_ra.has(số) ? { fontWeight: 'bold', color: '#16a34a' } : {}
const chữ_phần_trăm_khớp = (kết_quả: { khớp: number; tổng: number; phần_trăm: number | null }) =>
  `${kết_quả.khớp}/${kết_quả.tổng} (${(kết_quả.phần_trăm ?? 0).toFixed(0)}%)`
const trong_phần_chục = (số: string) =>
  số !== '' && Math.floor(Number(số) / 10) === chục_đang_chọn.value
const tên_thứ = (thời_điểm: number) =>
  THỨ_THEO_TUẦN.find((mục) => mục.thứ === new Date(thời_điểm).getUTCDay())?.nhãn ?? ''
// Lựa chọn 7: số đang xem, chọn từ 00 đến 99 (không lưu lại)
const số_đang_xem_theo_tuần = ref('00')

// Bảng của số đang xem: mỗi dòng 1 tuần (bắt đầu từ chủ nhật, mới nhất trước), mỗi cột 1 ngày, ô = số lô của số đó
// trong ngày (cộng các đài). Ngày không có dữ liệu (đầu/cuối dữ liệu, tuần chưa trôi qua) hiện null.
const TÊN_NGÀY_TRONG_TUẦN = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
type Dòng_Tuần = { nhãn: string; các_ngày: (number | null)[]; tổng: number }
const các_dòng_số_theo_tuần = computed<Dòng_Tuần[]>(() => {
  const số = số_đang_xem_theo_tuần.value
  const lô_theo_ngày = new Map<number, number>() // thời điểm (UTC) -> số lô; có khóa = ngày có dữ liệu
  for (const hàng of các_hàng.value) {
    const thời_điểm = đổi_ngày_thành_số(hàng[1])
    let lô = lô_theo_ngày.get(thời_điểm) ?? 0
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      if (giải.slice(-2).padStart(2, '0') === số) lô++
    }
    lô_theo_ngày.set(thời_điểm, lô)
  }
  const đầu_tuần_có_dữ_liệu = new Set<number>()
  for (const thời_điểm of lô_theo_ngày.keys()) {
    đầu_tuần_có_dữ_liệu.add(thời_điểm - new Date(thời_điểm).getUTCDay() * MILI_GIÂY_MỖI_NGÀY)
  }
  return [...đầu_tuần_có_dữ_liệu]
    .sort((a, b) => b - a)
    .map((đầu_tuần) => {
      const các_ngày = Array.from(
        { length: 7 },
        (_, i) => lô_theo_ngày.get(đầu_tuần + i * MILI_GIÂY_MỖI_NGÀY) ?? null,
      )
      return {
        nhãn: `${đổi_thời_điểm_thành_ngày(đầu_tuần).slice(0, 5)} – ${đổi_thời_điểm_thành_ngày(đầu_tuần + 6 * MILI_GIÂY_MỖI_NGÀY).slice(0, 5)}/${đổi_thời_điểm_thành_ngày(đầu_tuần + 6 * MILI_GIÂY_MỖI_NGÀY).slice(-4)}`,
        các_ngày,
        tổng: các_ngày.reduce<number>((t, lô) => t + (lô ?? 0), 0),
      }
    })
})

// Lựa chọn 8: dự đoán bằng ngày liền trước (01/01 dùng 31/12 năm trước; ngày trước không có dữ liệu thì bỏ qua):
// những số (2 số cuối) đã ra hôm trước, hôm nay có ra lại không. Mua các số đó ở mọi đài của ngày hôm nay.
type Dòng_Ngày_Trước = {
  ngày: string
  ngày_trước: string
  thời_điểm: number
  nhãn_xem_trước: string // 'hôm nay' | 'ngày mai' cho dòng xem trước, '' cho dòng đã có kết quả
  kết_quả_nay: { số: string; lô: number; trong_dự_đoán: boolean }[]
  kết_quả_trước: { số: string; lô_trước: number; có: boolean; lô_nay: number }[]
  số_trùng: number
  vốn: number
  lời_lỗ: number | null // null = chưa có kết quả
  chưa_có_kết_quả: boolean
  số_đài: number // số đài của ngày hiện tại (0 nếu chưa có kết quả)
  tổng_trước: string // (tổng các số khác nhau của ngày trước) % 100, 2 chữ số
  có_tổng_trước: boolean | null // null = chưa có kết quả
  lô_tổng_trước: number
  theo_đài: Tổng_Theo_Đài[]
  lời_lỗ_theo_đài: number | null // null = chưa có kết quả
  vốn_theo_đài: number // 0 khi chưa có kết quả
}
// Mỗi đài quay trong ngày 1 số (thứ 7 là 4 số, thứ khác 3 số): (tổng các số khác nhau của kỳ quay trước đó
// của chính đài đó) % 100
// Cách mua: 'từng_đài' = mỗi số chỉ mua ở đúng đài của nó; 'mọi_đài' = mỗi số mua ở cả 3/4 đài của ngày
const cách_mua_theo_đài = ref<'từng_đài' | 'mọi_đài'>('từng_đài')
type Tổng_Theo_Đài = {
  đài: string
  ngày_trước: string // kỳ quay trước của đài
  số: string
  có: boolean | null
  lô: number // số lô của số đó ở đài đó (hoặc cộng mọi đài khi mua mọi đài)
}
const các_dòng_ngày_trước = computed<Dòng_Ngày_Trước[]>(() => {
  const giá = giá_so_sánh(2)
  const theo_ngày = new Map<string, { số_đài: number; đếm: Map<string, number> }>()
  const đài_theo_thời_điểm = new Map<number, Map<string, Map<string, number>>>() // ngày -> đài -> số -> lô
  for (const hàng of tất_cả_hàng.value) {
    const lúc = đổi_ngày_thành_số(hàng[1])
    const thứ = new Date(lúc).getUTCDay()
    const đài = SỬA_TÊN_ĐÀI.find((mục) => mục.đài === hàng[0] && mục.thứ === thứ)?.thành ?? hàng[0]
    const các_đài = đài_theo_thời_điểm.get(lúc) ?? new Map<string, Map<string, number>>()
    const đếm_đài = các_đài.get(đài) ?? new Map<string, number>()
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      if (giải.length < 2) continue
      đếm_đài.set(giải.slice(-2), (đếm_đài.get(giải.slice(-2)) ?? 0) + 1)
    }
    các_đài.set(đài, đếm_đài)
    đài_theo_thời_điểm.set(lúc, các_đài)
    const nhóm = theo_ngày.get(hàng[1]) ?? { số_đài: 0, đếm: new Map<string, number>() }
    nhóm.số_đài++
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      if (giải.length < 2) continue
      const số = giải.slice(-2)
      nhóm.đếm.set(số, (nhóm.đếm.get(số) ?? 0) + 1)
    }
    theo_ngày.set(hàng[1], nhóm)
  }

  const các_lúc = [...đài_theo_thời_điểm.keys()].sort((a, b) => b - a) // mới nhất trước
  const tính_theo_đài = (thời_điểm: number): Tổng_Theo_Đài[] => {
    const hôm_nay = đài_theo_thời_điểm.get(thời_điểm)
    // chưa có kết quả: lấy các đài của cùng thứ gần nhất
    const lúc_cùng_thứ = các_lúc.find(
      (lúc) => lúc < thời_điểm && new Date(lúc).getUTCDay() === new Date(thời_điểm).getUTCDay(),
    )
    const tên_đài = [...(hôm_nay ?? đài_theo_thời_điểm.get(lúc_cùng_thứ ?? 0))?.keys() ?? []]
    return tên_đài.sort().flatMap((đài) => {
      const lúc_trước = các_lúc.find(
        (lúc) => lúc < thời_điểm && đài_theo_thời_điểm.get(lúc)!.has(đài),
      )
      if (lúc_trước === undefined) return []
      const tổng = [...đài_theo_thời_điểm.get(lúc_trước)!.get(đài)!.keys()].reduce(
        (t, số) => t + Number(số),
        0,
      )
      const số = hai_chữ_số(tổng % 100)
      const các_đài_tính =
        cách_mua_theo_đài.value === 'mọi_đài'
          ? [...(hôm_nay?.values() ?? [])]
          : [hôm_nay?.get(đài)]
      const lô = các_đài_tính.reduce((t, đếm) => t + (đếm?.get(số) ?? 0), 0)
      return [
        {
          đài,
          ngày_trước: đổi_thời_điểm_thành_ngày(lúc_trước),
          số,
          có: hôm_nay ? lô > 0 : null,
          lô,
        },
      ]
    })
  }

  const dựng = (
    ngày: string,
    nhóm_nay: { số_đài: number; đếm: Map<string, number> } | undefined,
    nhãn_xem_trước: string,
  ): Dòng_Ngày_Trước | null => {
    const thời_điểm = đổi_ngày_thành_số(ngày)
    const ngày_trước = đổi_thời_điểm_thành_ngày(thời_điểm - MILI_GIÂY_MỖI_NGÀY)
    const trước = theo_ngày.get(ngày_trước)
    if (!trước) return null // ngày trước không có dữ liệu: bỏ qua
    const hôm_nay = nhóm_nay?.đếm
    const kết_quả_trước = [...trước.đếm.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([số, lô_trước]) => ({
        số,
        lô_trước,
        có: hôm_nay?.has(số) ?? false,
        lô_nay: hôm_nay?.get(số) ?? 0,
      }))
    const vốn = kết_quả_trước.length * (nhóm_nay?.số_đài ?? 0) * giá.giá_mỗi_đài
    const thưởng =
      kết_quả_trước.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const tổng_trước = hai_chữ_số(
      kết_quả_trước.reduce((tổng, mục) => tổng + Number(mục.số), 0) % 100,
    )
    const theo_đài = tính_theo_đài(thời_điểm)
    const số_đài_mua_mỗi_số =
      cách_mua_theo_đài.value === 'mọi_đài' ? (nhóm_nay?.số_đài ?? 0) : 1
    const vốn_theo_đài = nhóm_nay ? theo_đài.length * số_đài_mua_mỗi_số * giá.giá_mỗi_đài : 0
    return {
      theo_đài,
      vốn_theo_đài,
      lời_lỗ_theo_đài: nhóm_nay
        ? theo_đài.reduce((t, mục) => t + mục.lô, 0) * giá.tiền_thưởng_mỗi_lô - vốn_theo_đài
        : null,
      ngày,
      ngày_trước,
      thời_điểm,
      nhãn_xem_trước,
      kết_quả_nay: hôm_nay
        ? [...hôm_nay.entries()]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([số, lô]) => ({ số, lô, trong_dự_đoán: trước.đếm.has(số) }))
        : [],
      kết_quả_trước,
      số_trùng: kết_quả_trước.filter((mục) => mục.có).length,
      vốn,
      lời_lỗ: nhóm_nay ? thưởng - vốn : null,
      chưa_có_kết_quả: !nhóm_nay,
      số_đài: nhóm_nay?.số_đài ?? 0,
      tổng_trước,
      có_tổng_trước: hôm_nay ? hôm_nay.has(tổng_trước) : null,
      lô_tổng_trước: hôm_nay?.get(tổng_trước) ?? 0,
    }
  }

  const kết_quả: Dòng_Ngày_Trước[] = []
  for (const [ngày, nhóm] of theo_ngày) {
    if (năm_lọc.value && ngày.slice(-4) !== năm_lọc.value) continue
    const dòng = dựng(ngày, nhóm, '')
    if (dòng) kết_quả.push(dòng)
  }
  // Hôm nay (nếu chưa có kết quả) và ngày mai: hiện các số của ngày liền trước để xem trước
  for (const [nhãn, số_ngày_cộng] of [
    ['hôm nay', 0],
    ['ngày mai', 1],
  ] as const) {
    const bây_giờ = new Date()
    bây_giờ.setDate(bây_giờ.getDate() + số_ngày_cộng)
    const ngày = `${hai_chữ_số(bây_giờ.getDate())}/${hai_chữ_số(bây_giờ.getMonth() + 1)}/${bây_giờ.getFullYear()}`
    if (theo_ngày.has(ngày) || (năm_lọc.value && năm_lọc.value !== ngày.slice(-4))) continue
    const dòng = dựng(ngày, undefined, nhãn)
    if (dòng) kết_quả.push(dòng)
  }
  return kết_quả.sort((a, b) => b.thời_điểm - a.thời_điểm)
})
// Lọc theo tổng số các số của ngày trước đó (y trong cột "Ra lại" x/y); để trống = không giới hạn
const lọc_tổng_trước_từ = ref<number | ''>('')
const lọc_tổng_trước_đến = ref<number | ''>('')
// Tổng số trước đó nhỏ nhất / lớn nhất trong năm đang chọn (hoặc tất cả các năm), chỉ tính ngày đã có kết quả
// Lọc theo thứ của ngày hiện tại: '' = tất cả; 0 = chủ nhật, 1 = thứ 2 ... 6 = thứ 7
const thứ_lọc_ngày_trước = ref<'' | number>('')
const các_dòng_ngày_trước_theo_thứ = computed(() =>
  các_dòng_ngày_trước.value.filter(
    (dòng) =>
      thứ_lọc_ngày_trước.value === '' ||
      new Date(dòng.thời_điểm).getUTCDay() === thứ_lọc_ngày_trước.value,
  ),
)
const khoảng_tổng_trước = computed(() => {
  const các_tổng = các_dòng_ngày_trước_theo_thứ.value
    .filter((dòng) => !dòng.chưa_có_kết_quả)
    .map((dòng) => dòng.kết_quả_trước.length)
  return các_tổng.length
    ? { nhỏ_nhất: Math.min(...các_tổng), lớn_nhất: Math.max(...các_tổng) }
    : null
})
const chọn_tổng_trước = (giá_trị: number) => {
  lọc_tổng_trước_từ.value = giá_trị
  lọc_tổng_trước_đến.value = giá_trị
}
const các_dòng_ngày_trước_hiển_thị = computed(() => {
  const từ = lọc_tổng_trước_từ.value === '' ? -Infinity : lọc_tổng_trước_từ.value
  const đến = lọc_tổng_trước_đến.value === '' ? Infinity : lọc_tổng_trước_đến.value
  return các_dòng_ngày_trước_theo_thứ.value.filter(
    (dòng) => dòng.kết_quả_trước.length >= từ && dòng.kết_quả_trước.length <= đến,
  )
})
const thống_kê_ngày_trước = computed(() => {
  const các_dòng = các_dòng_ngày_trước_hiển_thị.value.filter((dòng) => !dòng.chưa_có_kết_quả)
  const tổng_số = các_dòng.reduce((tổng, dòng) => tổng + dòng.kết_quả_trước.length, 0)
  const số_trùng = các_dòng.reduce((tổng, dòng) => tổng + dòng.số_trùng, 0)
  const số_ngày_có_tổng = các_dòng.filter((dòng) => dòng.có_tổng_trước).length
  const vốn_tổng_trước = các_dòng.reduce(
    (tổng, dòng) => tổng + dòng.số_đài * giá_so_sánh(2).giá_mỗi_đài,
    0,
  )
  return {
    số_ngày: các_dòng.length,
    tổng_số,
    số_trùng,
    vốn: các_dòng.reduce((tổng, dòng) => tổng + dòng.vốn, 0),
    lời_lỗ: các_dòng.reduce((tổng, dòng) => tổng + (dòng.lời_lỗ ?? 0), 0),
    tỉ_lệ: tổng_số ? (số_trùng / tổng_số) * 100 : 0,
    theo_đài: {
      số_có: các_dòng.reduce((t, dòng) => t + dòng.theo_đài.filter((mục) => mục.có).length, 0),
      số_dự_đoán: các_dòng.reduce((t, dòng) => t + dòng.theo_đài.length, 0),
      vốn: các_dòng.reduce((t, dòng) => t + dòng.vốn_theo_đài, 0),
      lời_lỗ: các_dòng.reduce((t, dòng) => t + (dòng.lời_lỗ_theo_đài ?? 0), 0),
    },
    // cột "tổng các số trước đó % 100": mua 1 số đó ở mọi đài của ngày
    tổng_trước: {
      số_có: số_ngày_có_tổng,
      tỉ_lệ: các_dòng.length ? (số_ngày_có_tổng / các_dòng.length) * 100 : 0,
      vốn: vốn_tổng_trước,
      lời_lỗ:
        các_dòng.reduce((tổng, dòng) => tổng + dòng.lô_tổng_trước, 0) *
          giá_so_sánh(2).tiền_thưởng_mỗi_lô -
        vốn_tổng_trước,
    },
  }
})

const các_đài_theo_thứ = computed(() =>
  THỨ_THEO_TUẦN.map(({ thứ, nhãn }) => ({
    nhãn,
    số_ngày: số_ngày_quay_theo_thứ.value.get(thứ)?.size ?? 0,
    các_đài: các_đài_hay_ra.value.filter((mục) => mục.thứ === thứ),
  })).filter((nhóm) => nhóm.các_đài.length > 0),
)

// Mỗi số từ 00 đến 99: mỗi lần số đó ra, ngày hôm sau có ra nữa không
const TẤT_CẢ_SỐ = Array.from({ length: 100 }, (_, i) => hai_chữ_số(i))
// Chỉ xét các lần số đó ra đúng N lô trong ngày (cộng các đài); '' = không lọc, '4+' = từ 4 lô trở lên
const lọc_số_lô = ref<'' | '1' | '2' | '3' | '4+'>('')
const đúng_số_lô = (lô: number) =>
  !lọc_số_lô.value || (lọc_số_lô.value === '4+' ? lô >= 4 : lô === Number(lọc_số_lô.value))

type Lần_Ra_Hôm_Sau = {
  ngày: string
  lô: number // số lô hôm đó (cộng các đài)
  ngày_kế: string
  có: boolean | null // null = ngày kế chưa có kết quả
  lô_kế: number
  số_đài_kế: number // số đài ngày kế (chưa có kết quả thì thứ 7 là 4 đài, còn lại 3 đài)
  vốn: number // mua số đó ở mọi đài của ngày kế: 15k mỗi đài
  lời_lỗ: number | null // null = ngày kế chưa có kết quả; mỗi lô trúng 80k
}
type Kết_Quả_Hôm_Sau = {
  số: string
  các_lần: Lần_Ra_Hôm_Sau[] // mới nhất trước
  số_lần_có_kết_quả: number
  số_lần_ra_lại: number
  lô_ngày_kế: number
  vốn: number // cộng các lần đã có kết quả
  lời_lỗ: number
}

const kết_quả_hôm_sau = computed<Kết_Quả_Hôm_Sau[]>(() => {
  const theo_ngày = new Map<number, { ngày: string; số_đài: number; đếm: Map<string, number> }>()
  for (const hàng of tất_cả_hàng.value) {
    const thời_điểm = đổi_ngày_thành_số(hàng[1])
    const nhóm = theo_ngày.get(thời_điểm) ?? {
      ngày: hàng[1],
      số_đài: 0,
      đếm: new Map<string, number>(),
    }
    nhóm.số_đài++
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      const số = giải.slice(-2).padStart(2, '0')
      nhóm.đếm.set(số, (nhóm.đếm.get(số) ?? 0) + 1)
    }
    theo_ngày.set(thời_điểm, nhóm)
  }
  const các_ngày = [...theo_ngày.keys()].sort((a, b) => b - a) // mới nhất trước

  return TẤT_CẢ_SỐ.map((số) => {
    const các_lần: Lần_Ra_Hôm_Sau[] = []
    for (const thời_điểm of các_ngày) {
      const nhóm = theo_ngày.get(thời_điểm)!
      const lô = nhóm.đếm.get(số) ?? 0
      if (lô === 0 || !đúng_số_lô(lô)) continue
      if (năm_lọc.value && nhóm.ngày.slice(-4) !== năm_lọc.value) continue
      const kế = theo_ngày.get(thời_điểm + MILI_GIÂY_MỖI_NGÀY)
      const lô_kế = kế?.đếm.get(số) ?? 0
      const số_đài_kế =
        kế?.số_đài ?? (new Date(thời_điểm + MILI_GIÂY_MỖI_NGÀY).getUTCDay() === 6 ? 4 : 3)
      const vốn = số_đài_kế * GIÁ_MỖI_ĐÀI
      các_lần.push({
        ngày: nhóm.ngày,
        lô,
        ngày_kế: đổi_thời_điểm_thành_ngày(thời_điểm + MILI_GIÂY_MỖI_NGÀY),
        có: kế ? lô_kế > 0 : null,
        lô_kế,
        số_đài_kế,
        vốn,
        lời_lỗ: kế ? lô_kế * TIỀN_THƯỞNG_MỖI_LÔ - vốn : null,
      })
    }
    const đã_có = các_lần.filter((lần) => lần.có !== null)
    return {
      số,
      các_lần,
      số_lần_có_kết_quả: đã_có.length,
      số_lần_ra_lại: đã_có.filter((lần) => lần.có).length,
      lô_ngày_kế: đã_có.reduce((tổng, lần) => tổng + lần.lô_kế, 0),
      vốn: đã_có.reduce((tổng, lần) => tổng + lần.vốn, 0),
      lời_lỗ: đã_có.reduce((tổng, lần) => tổng + (lần.lời_lỗ ?? 0), 0),
    }
  })
})

// Lựa chọn 5: chỉ hiện các số mới ra = các số đã ra trong ngày mới nhất có dữ liệu (cộng mọi đài)
const hiển_thị_số_hôm_sau = ref<'tất_cả' | 'mới_ra'>('tất_cả')
const số_mới_ra = computed(() => {
  let thời_điểm_mới_nhất = -Infinity
  let ngày_mới_nhất = ''
  for (const hàng of tất_cả_hàng.value) {
    const thời_điểm = đổi_ngày_thành_số(hàng[1])
    if (thời_điểm > thời_điểm_mới_nhất) {
      thời_điểm_mới_nhất = thời_điểm
      ngày_mới_nhất = hàng[1]
    }
  }
  const các_số = new Set<string>()
  for (const hàng of tất_cả_hàng.value) {
    if (hàng[1] !== ngày_mới_nhất) continue
    for (const giải of hàng[2].split(/\s+/).filter(Boolean)) {
      các_số.add(giải.slice(-2).padStart(2, '0'))
    }
  }
  return { ngày: ngày_mới_nhất, các_số }
})
const kết_quả_hôm_sau_hiển_thị = computed(() =>
  hiển_thị_số_hôm_sau.value === 'mới_ra'
    ? kết_quả_hôm_sau.value.filter((mục) => số_mới_ra.value.các_số.has(mục.số))
    : kết_quả_hôm_sau.value,
)

onMounted(async () => {
  try {
    const các_phần = await Promise.all(
      Object.entries(LINK_CSV_XSMN_THEO_NĂM).map(async ([năm, link]) => {
        const phản_hồi = await fetch(link)
        if (!phản_hồi.ok) throw new Error(`năm ${năm}: HTTP ${phản_hồi.status}`)
        const văn_bản = await phản_hồi.text()
        return tách_csv(văn_bản).filter(
          (hàng) => hàng.length >= 3 && hàng[0] !== '' && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(hàng[1]),
        )
      }),
    )
    tất_cả_hàng.value = các_phần.flat()
    // mặc định năm hiện tại; nếu chưa có dữ liệu năm này thì lấy năm mới nhất có dữ liệu
    const năm_hiện_tại = String(new Date().getFullYear())
    năm_lọc.value = các_năm.value.includes(năm_hiện_tại) ? năm_hiện_tại : (các_năm.value[0] ?? '')
  } catch (e) {
    lỗi.value = `không tải được: ${(e as Error).message}`
  } finally {
    đang_tải.value = false
  }
})
</script>

<template>
  <div :style="{ padding: '12px' }">
    <h3>Loto</h3>

    <div v-if="đang_tải">Đang tải...</div>
    <div v-else-if="lỗi" :style="{ color: '#dc2626' }">{{ lỗi }}</div>

    <template v-else>
      <div>
        <select v-model="lựa_chọn">
          <option value="chưa_ra">1. Từ 00 đến 99 bao lâu rồi chưa ra</option>
          <option value="dự_đoán_ngày">2. Dự đoán theo ngày trong năm</option>
          <option value="thống_kê_quay_lại">3. Thống kê dự đoán số quay lại (số + 1)</option>
          <option value="năm_trước">4. Phân tích cùng ngày của năm trước</option>
          <option value="ngày_hôm_sau">5. Số lô ra, ngày hôm sau có ra nữa không</option>
          <option value="theo_đài">6. Theo đài: số hay ra trong năm</option>
          <option value="số_theo_tuần">7. Một số theo tuần: số lô mỗi ngày</option>
          <option value="ngày_trước">8. Dự đoán bằng ngày trước đó</option>
          <option value="phần_chục">9. Xem theo phần chục: giải 8 và giải đặc biệt</option>
          <option value="dữ_liệu_gốc">Dữ liệu gốc</option>
        </select>
        năm
        <select v-model="năm_lọc">
          <option value="">tất cả</option>
          <option v-for="năm in các_năm" :key="năm" :value="năm">{{ năm }}</option>
        </select>
      </div>

      <template v-if="lựa_chọn === 'chưa_ra'">
        <div :style="{ marginTop: '6px' }">
          tính đến {{ new Date(ngày_mới_nhất).toLocaleDateString('vi-VN', { timeZone: 'UTC' }) }},
          xếp theo
          <select v-model="sắp_xếp">
            <option value="số">số (00 → 99)</option>
            <option value="lâu_nhất">lâu chưa ra nhất</option>
          </select>
          — dự đoán số + 1 cho 2 số có quay lại sau (ngày) lớn nhất
        </div>
        <table
          :style="{
            marginTop: '8px',
            borderCollapse: 'collapse',
            fontFamily: 'monospace',
            fontSize: '15px',
          }"
        >
          <thead>
            <tr>
              <th :style="{ textAlign: 'center', padding: '2px 14px 2px 0' }">Số</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px' }">Chưa ra (ngày)</th>
              <th :style="{ textAlign: 'left', padding: '2px 14px' }">Lần cuối ra</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px' }">Quay lại sau (ngày)</th>
              <th :style="{ textAlign: 'center', padding: '2px 14px' }">Dự đoán (+1)</th>
              <th :style="{ textAlign: 'right', padding: '2px 0 2px 14px' }">Tổng lô</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dòng in các_số_chưa_ra" :key="dòng.số">
              <td :style="{ textAlign: 'center', padding: '2px 14px 2px 0', fontWeight: 'bold' }">
                {{ dòng.số }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                {{ dòng.số_ngày_chưa_ra === null ? '—' : dòng.số_ngày_chưa_ra }}
              </td>
              <td :style="{ padding: '2px 14px' }">{{ dòng.ngày_cuối || 'chưa từng ra' }}</td>
              <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                {{ dòng.quay_lại_sau ?? '' }}
              </td>
              <td :style="{ textAlign: 'center', padding: '2px 14px', fontWeight: 'bold' }">
                {{ số_dự_đoán(dòng) }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 0 2px 14px' }">{{ dòng.số_lần }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-else-if="lựa_chọn === 'dự_đoán_ngày'">
        <div :style="{ marginTop: '6px' }">
          Số = (thứ tự ngày trong năm) % 100. Số ngược = (số ngày còn lại đến 31/12) % 100. Có = số
          đó ra ở bất kỳ đài nào trong ngày (3 đài, thứ 7 là 4 đài).
        </div>
        <div :style="{ marginTop: '6px' }">
          lọc thứ
          <select v-model="thứ_lọc_dự_đoán">
            <option value="">tất cả</option>
            <option v-for="mục in THỨ_THEO_TUẦN" :key="mục.thứ" :value="mục.thứ">
              {{ mục.nhãn }}
            </option>
          </select>
        </div>
        <div
          v-for="cột in [
            { nhãn: 'Số', dữ_liệu: thống_kê_chuỗi_không.số },
            { nhãn: 'Số ngược', dữ_liệu: thống_kê_chuỗi_không.ngược },
          ]"
          :key="cột.nhãn"
          :style="{ marginTop: '4px' }"
        >
          {{ cột.nhãn }}: lâu nhất phải không <b>{{ cột.dữ_liệu.lớn_nhất }}</b> lần liên tiếp mới
          có<template v-if="cột.dữ_liệu.ngày"> (có vào {{ cột.dữ_liệu.ngày }})</template
          ><template v-if="cột.dữ_liệu.hiện_tại !== null"
            >; hiện đã không <b>{{ cột.dữ_liệu.hiện_tại }}</b> lần</template
          >
        </div>
        <div :style="{ overflowX: 'auto' }">
          <table
            :style="{
              marginTop: '6px',
              borderCollapse: 'collapse',
              fontFamily: 'monospace',
              fontSize: '14px',
            }"
          >
            <thead>
              <tr>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Tháng</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Số ngày</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Vốn</th>
                <th
                  v-for="cột in CÁC_CỘT_THỐNG_KÊ_DỰ_ĐOÁN"
                  :key="cột.nhãn"
                  :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'bottom' }"
                >
                  {{ cột.nhãn }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="nhóm in thống_kê_dự_đoán" :key="nhóm.nhãn">
                <td :style="{ padding: '2px 14px 2px 0', verticalAlign: 'top' }">
                  {{ nhóm.nhãn }}
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                  {{ nhóm.số_ngày }}
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                  {{ vốn(nhóm).toLocaleString('vi-VN') }}k
                </td>
                <td
                  v-for="cột in CÁC_CỘT_THỐNG_KÊ_DỰ_ĐOÁN"
                  :key="cột.nhãn"
                  :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }"
                >
                  <div>có {{ cột.có(nhóm) }} · {{ cột.lô(nhóm) }} lô</div>
                  <div :style="{ fontWeight: 'bold', color: màu_tiền(cột.lời_lỗ(nhóm)) }">
                    {{ hiện_tiền(cột.lời_lỗ(nhóm)) }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div :style="{ overflowX: 'auto' }">
          <table
            :style="{
              marginTop: '8px',
              borderCollapse: 'collapse',
              fontFamily: 'monospace',
              fontSize: '15px',
            }"
          >
            <thead>
              <tr>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Ngày</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Thứ</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">Số</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  Số ngược (ngày còn lại đến 31/12) % 100
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  (Số + tháng + ngày) % 100
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  |Số − tháng − ngày| % 100
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  (Năm + tháng + ngày) % Số
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  (Năm + tháng + ngày) % Số ngược
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
                <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  (% Số + % Số ngược) % 100
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 0 2px 0' }">Có/không</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dòng in các_dòng_dự_đoán" :key="dòng.ngày">
                <td :style="{ padding: '2px 14px 2px 0' }">
                  {{ dòng.ngày }} ({{ dòng.số_đài }} đài)
                </td>
                <td :style="{ padding: '2px 14px 2px 0', whiteSpace: 'nowrap' }">
                  {{ tên_thứ(dòng.thời_điểm) }}
                </td>
                <td
                  :style="{ textAlign: 'center', padding: '2px 8px 2px 14px', fontWeight: 'bold' }"
                >
                  {{ dòng.số }}
                </td>
                <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_số) }">
                  {{ chữ_có_theo_chuỗi(dòng.có_số, dòng.lô_số, dòng.chuỗi_không_số) }}
                </td>
                <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  {{ dòng.ngược }}
                </td>
                <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_ngược) }">
                  {{ chữ_có_theo_chuỗi(dòng.có_ngược, dòng.lô_ngược, dòng.chuỗi_không_ngược) }}
                </td>
                <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  {{ dòng.cộng_ngày }}
                </td>
                <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_cộng_ngày) }">
                  {{ chữ_có(dòng.có_cộng_ngày, dòng.lô_cộng_ngày) }}
                </td>
                <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  {{ dòng.trừ_ngày }}
                </td>
                <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_trừ_ngày) }">
                  {{ chữ_có(dòng.có_trừ_ngày, dòng.lô_trừ_ngày) }}
                </td>
                <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  {{ dòng.chia_tới === null ? '—' : hai_chữ_số(dòng.chia_tới) }}
                </td>
                <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_chia_tới) }">
                  {{ chữ_có(dòng.có_chia_tới, dòng.lô_chia_tới) }}
                </td>
                <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  {{ dòng.chia_lui === null ? '—' : hai_chữ_số(dòng.chia_lui) }}
                </td>
                <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_chia_lui) }">
                  {{ chữ_có(dòng.có_chia_lui, dòng.lô_chia_lui) }}
                </td>
                <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                  {{ dòng.tổng_chia === null ? '—' : hai_chữ_số(dòng.tổng_chia) }}
                </td>
                <td :style="{ padding: '2px 0', color: màu_có(dòng.có_tổng_chia) }">
                  {{ chữ_có(dòng.có_tổng_chia, dòng.lô_tổng_chia) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-else-if="lựa_chọn === 'thống_kê_quay_lại'">
        <div :style="{ marginTop: '6px' }">
          Mỗi ngày lấy 2 số vừa ra mà quay lại sau lớn nhất trong ngày đó, dự đoán số + 1 và số + 2
          cho ngày hôm sau; có = số dự đoán ra ở bất kỳ đài nào hôm sau
        </div>
        <div :style="{ marginTop: '6px' }">
          lọc
          <select v-model="lọc_hạng_quay_lại">
            <option value="">cả hạng 1 và hạng 2</option>
            <option value="1">quay lại hạng 1 (lớn nhất trong ngày)</option>
            <option value="2">quay lại hạng 2 (lớn thứ nhì trong ngày)</option>
          </select>
          dự đoán
          <select v-model="lọc_cộng_quay_lại">
            <option value="">số + 1 và số + 2</option>
            <option value="1">chỉ số + 1</option>
            <option value="2">chỉ số + 2</option>
          </select>
          thứ (ngày kế)
          <select v-model="thứ_lọc_quay_lại">
            <option value="">tất cả</option>
            <option v-for="mục in THỨ_THEO_TUẦN" :key="mục.thứ" :value="mục.thứ">
              {{ mục.nhãn }}
            </option>
          </select>
        </div>
        <div v-if="lọc_cộng_quay_lại !== '2'" :style="{ marginTop: '4px' }">
          Số + 1: {{ thống_kê_quay_lại.số_lượt }} lượt đã có kết quả — có:
          {{ thống_kê_quay_lại.số_có }} — lô: {{ thống_kê_quay_lại.lô }} — vốn:
          {{ thống_kê_quay_lại.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
          <b :style="{ color: màu_tiền(thống_kê_quay_lại.lời_lỗ) }">{{
            hiện_tiền(thống_kê_quay_lại.lời_lỗ)
          }}</b>
        </div>
        <div v-if="lọc_cộng_quay_lại !== '1'" :style="{ marginTop: '4px' }">
          Số + 2: có: {{ thống_kê_quay_lại.cộng_2.số_có }} — lô: {{ thống_kê_quay_lại.cộng_2.lô }} —
          lời/lỗ:
          <b :style="{ color: màu_tiền(thống_kê_quay_lại.cộng_2.lời_lỗ) }">{{
            hiện_tiền(thống_kê_quay_lại.cộng_2.lời_lỗ)
          }}</b>
        </div>
        <table
          :style="{
            marginTop: '8px',
            borderCollapse: 'collapse',
            fontFamily: 'monospace',
            fontSize: '15px',
          }"
        >
          <thead>
            <tr>
              <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Ngày ra</th>
              <th :style="{ textAlign: 'center', padding: '2px 14px' }">Số</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px' }">Quay lại sau</th>
              <th :style="{ textAlign: 'center', padding: '2px 14px' }">Hạng</th>
              <th
                v-if="lọc_cộng_quay_lại !== '2'"
                :style="{ textAlign: 'center', padding: '2px 14px' }"
              >
                Dự đoán (+1)
              </th>
              <th :style="{ textAlign: 'left', padding: '2px 14px' }">Ngày kế</th>
              <th :style="{ textAlign: 'left', padding: '2px 14px' }">Thứ</th>
              <th
                v-if="lọc_cộng_quay_lại !== '2'"
                :style="{ textAlign: 'left', padding: '2px 14px' }"
              >
                Có/không
              </th>
              <th
                v-if="lọc_cộng_quay_lại !== '2'"
                :style="{ textAlign: 'right', padding: '2px 14px' }"
              >
                Lời/lỗ
              </th>
              <th
                v-if="lọc_cộng_quay_lại !== '1'"
                :style="{ textAlign: 'center', padding: '2px 14px' }"
              >
                Dự đoán (+2)
              </th>
              <th
                v-if="lọc_cộng_quay_lại !== '1'"
                :style="{ textAlign: 'left', padding: '2px 14px' }"
              >
                Có/không (+2)
              </th>
              <th
                v-if="lọc_cộng_quay_lại !== '1'"
                :style="{ textAlign: 'right', padding: '2px 0 2px 14px' }"
              >
                Lời/lỗ (+2)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lượt in các_lượt_quay_lại" :key="lượt.ngày + lượt.số">
              <td :style="{ padding: '2px 14px 2px 0' }">{{ lượt.ngày }}</td>
              <td :style="{ textAlign: 'center', padding: '2px 14px' }">{{ lượt.số }}</td>
              <td :style="{ textAlign: 'right', padding: '2px 14px' }">{{ lượt.quay_lại_sau }}</td>
              <td :style="{ textAlign: 'center', padding: '2px 14px' }">{{ lượt.hạng }}</td>
              <td
                v-if="lọc_cộng_quay_lại !== '2'"
                :style="{ textAlign: 'center', padding: '2px 14px', fontWeight: 'bold' }"
              >
                {{ lượt.dự_đoán }}
              </td>
              <td :style="{ padding: '2px 14px' }">{{ lượt.ngày_kế }}</td>
              <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                {{ tên_thứ(lượt.thời_điểm + MILI_GIÂY_MỖI_NGÀY) }}
              </td>
              <td
                v-if="lọc_cộng_quay_lại !== '2'"
                :style="{ padding: '2px 14px', color: màu_có(lượt.có) }"
              >
                {{ chữ_có(lượt.có, lượt.lô) }}
              </td>
              <td
                v-if="lọc_cộng_quay_lại !== '2'"
                :style="{
                  textAlign: 'right',
                  padding: '2px 14px',
                  color: lượt.có === null ? 'inherit' : màu_tiền(tiền_lượt(lượt)),
                }"
              >
                {{ lượt.có === null ? '—' : hiện_tiền(tiền_lượt(lượt)) }}
              </td>
              <td
                v-if="lọc_cộng_quay_lại !== '1'"
                :style="{ textAlign: 'center', padding: '2px 14px', fontWeight: 'bold' }"
              >
                {{ lượt.dự_đoán_2 }}
              </td>
              <td
                v-if="lọc_cộng_quay_lại !== '1'"
                :style="{ padding: '2px 14px', color: màu_có(lượt.có_2) }"
              >
                {{ chữ_có(lượt.có_2, lượt.lô_2) }}
              </td>
              <td
                v-if="lọc_cộng_quay_lại !== '1'"
                :style="{
                  textAlign: 'right',
                  padding: '2px 0 2px 14px',
                  color: lượt.có_2 === null ? 'inherit' : màu_tiền(tiền_lượt_2(lượt)),
                }"
              >
                {{ lượt.có_2 === null ? '—' : hiện_tiền(tiền_lượt_2(lượt)) }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-else-if="lựa_chọn === 'năm_trước'">
        <div :style="{ marginTop: '6px' }">
          so sánh
          <select v-model.number="số_chữ_số_so_sánh">
            <option :value="2">
              2 số cuối ({{ giá_so_sánh(2).giá_mỗi_đài }}k/đài, trúng 1 lô
              {{ giá_so_sánh(2).tiền_thưởng_mỗi_lô }}k)
            </option>
            <option :value="3">
              3 số cuối ({{ giá_so_sánh(3).giá_mỗi_đài }}k/đài, trúng 1 lô
              {{ giá_so_sánh(3).tiền_thưởng_mỗi_lô }}k)
            </option>
          </select>
          của các giải; lời/lỗ = mua tất cả các số năm trước ở mọi đài của ngày
        </div>
        <div v-if="các_dòng_năm_trước.length === 0" :style="{ marginTop: '6px' }">
          Chưa có dữ liệu năm trước để so sánh (cần tab năm
          {{ năm_lọc ? Number(năm_lọc) - 1 : 'trước' }} trong dữ liệu).
        </div>
        <template v-else>
          <div :style="{ marginTop: '6px' }">
            Mỗi ngày so với cùng ngày/tháng của năm trước: những số đã ra hôm đó năm trước, năm nay
            có ra lại không (xanh = có ra lại, đỏ = không; (n) = số lô năm trước).
          </div>
          <div :style="{ marginTop: '4px' }">
            {{ thống_kê_năm_trước.số_ngày }} ngày — {{ thống_kê_năm_trước.số_trùng }} /
            {{ thống_kê_năm_trước.tổng_số }} số ra lại ({{ thống_kê_năm_trước.tỉ_lệ.toFixed(1) }}%)
            — vốn {{ thống_kê_năm_trước.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
            <b :style="{ color: màu_tiền(thống_kê_năm_trước.lời_lỗ) }">{{
              hiện_tiền(thống_kê_năm_trước.lời_lỗ)
            }}</b>
          </div>
          <div
            v-for="nhóm in [
              { nhãn: 'Chỉ 1 lô', dữ_liệu: thống_kê_năm_trước.chỉ_1_lô },
              { nhãn: 'Chỉ 2 lô', dữ_liệu: thống_kê_năm_trước.chỉ_2_lô },
              { nhãn: 'Từ 3 lô', dữ_liệu: thống_kê_năm_trước.từ_3_lô },
              { nhãn: 'Từ 4 lô', dữ_liệu: thống_kê_năm_trước.từ_4_lô },
              { nhãn: 'Từ 5 lô', dữ_liệu: thống_kê_năm_trước.từ_5_lô },
              { nhãn: 'Số giữa', dữ_liệu: thống_kê_năm_trước.số_giữa },
              ...(có_bộ_lọc_đang_bật
                ? [{ nhãn: 'Số lọc', dữ_liệu: thống_kê_năm_trước.số_lọc }]
                : []),
            ]"
            :key="nhóm.nhãn"
            :style="{ marginTop: '4px' }"
          >
            <div
              :style="{ cursor: 'pointer' }"
              title="Bấm để xem chia theo tháng"
              @click="bật_tắt_nhóm(nhóm.nhãn)"
            >
              {{ các_nhóm_đang_mở.includes(nhóm.nhãn) ? '▾' : '▸' }} {{ nhóm.nhãn }} —
              {{ nhóm.dữ_liệu.số_trùng }} / {{ nhóm.dữ_liệu.tổng_số }} số ra lại ({{
                nhóm.dữ_liệu.tỉ_lệ.toFixed(1)
              }}%) — vốn {{ nhóm.dữ_liệu.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
              <b :style="{ color: màu_tiền(nhóm.dữ_liệu.lời_lỗ) }">{{
                hiện_tiền(nhóm.dữ_liệu.lời_lỗ)
              }}</b>
            </div>
            <table
              v-if="các_nhóm_đang_mở.includes(nhóm.nhãn)"
              :style="{
                borderCollapse: 'collapse',
                fontFamily: 'monospace',
                fontSize: '14px',
                margin: '4px 0 6px 16px',
              }"
            >
              <thead>
                <tr>
                  <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Tháng</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">%</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Vốn</th>
                  <th :style="{ textAlign: 'right', padding: '2px 0 2px 14px' }">Lời/lỗ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tháng in nhóm.dữ_liệu.theo_tháng" :key="tháng.nhãn">
                  <td :style="{ padding: '2px 14px 2px 0' }">{{ tháng.nhãn }}</td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                    {{ tháng.số_trùng }}/{{ tháng.tổng_số }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                    {{ tháng.tỉ_lệ.toFixed(1) }}%
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                    {{ tháng.vốn.toLocaleString('vi-VN') }}k
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 0 2px 14px',
                      fontWeight: 'bold',
                      color: màu_tiền(tháng.lời_lỗ),
                    }"
                  >
                    {{ hiện_tiền(tháng.lời_lỗ) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div :style="{ marginTop: '8px' }">
            lọc thứ
            <select v-model="thứ_lọc_năm_trước">
              <option value="">tất cả</option>
              <option v-for="mục in THỨ_THEO_TUẦN" :key="mục.thứ" :value="mục.thứ">
                {{ mục.nhãn }}
              </option>
            </select>
            , lọc số năm trước
            <input
              v-model="nhập_bộ_lọc_số"
              :placeholder="số_chữ_số_so_sánh === 2 ? '30(2)' : '300(2)'"
              :style="{ width: '70px', borderColor: lỗi_bộ_lọc_số ? '#dc2626' : undefined }"
              @keydown.enter="thêm_bộ_lọc_số"
              @input="lỗi_bộ_lọc_số = false"
            />
            <button type="button" @click="thêm_bộ_lọc_số">Thêm</button>
            <span v-if="lỗi_bộ_lọc_số" :style="{ color: '#dc2626', marginLeft: '6px' }">
              sai cú pháp, nhập {{ số_chữ_số_so_sánh === 2 ? '30(2)' : '300(2)' }} (số và số lô năm
              trước) hoặc chỉ số
            </span>
            <span
              v-for="(bộ_lọc, vị_trí) in các_bộ_lọc_số"
              :key="nhãn_bộ_lọc(bộ_lọc)"
              :style="{ marginLeft: '6px', whiteSpace: 'nowrap' }"
            >
              <button
                type="button"
                :style="{
                  fontFamily: 'monospace',
                  fontWeight: bộ_lọc.bật ? 'bold' : 'normal',
                  background: bộ_lọc.bật ? '#bfdbfe' : undefined,
                }"
                @click="bộ_lọc.bật = !bộ_lọc.bật"
              >
                {{ nhãn_bộ_lọc(bộ_lọc) }}
              </button>
              <button type="button" title="Xóa" @click="các_bộ_lọc_số.splice(vị_trí, 1)">×</button>
            </span>
          </div>
          <div v-if="các_bộ_lọc_số.some((mục) => mục.bật)" :style="{ marginTop: '4px' }">
            đang lọc: chỉ hiện các ngày năm trước có
            {{
              các_bộ_lọc_số
                .filter((mục) => mục.bật)
                .map(nhãn_bộ_lọc)
                .join(' hoặc ')
            }}
          </div>
          <div :style="{ overflowX: 'auto', marginTop: '8px' }">
            <table
              :style="{
                borderCollapse: 'collapse',
                fontFamily: 'monospace',
                fontSize: '14px',
              }"
            >
              <thead>
                <tr>
                  <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Ngày</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">Thứ</th>
                  <template v-if="có_bộ_lọc_đang_bật">
                    <th :style="{ textAlign: 'right', padding: '2px 14px' }">Số lọc ra lại</th>
                    <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (số lọc)</th>
                  </template>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">Cùng ngày năm trước</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Chỉ 1 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (chỉ 1 lô)</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Chỉ 2 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (chỉ 2 lô)</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">
                    Chỉ 2 lô theo đài — vốn
                    {{ tổng_theo_đài_chỉ_2_lô.vốn.toLocaleString('vi-VN') }}k, lời/lỗ
                    <span :style="{ color: màu_tiền(tổng_theo_đài_chỉ_2_lô.lời_lỗ) }">{{
                      hiện_tiền(tổng_theo_đài_chỉ_2_lô.lời_lỗ)
                    }}</span>
                  </th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Từ 3 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (từ 3 lô)</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">
                    Từ 3 lô theo đài — vốn
                    {{ tổng_theo_đài_từ_3_lô.vốn.toLocaleString('vi-VN') }}k, lời/lỗ
                    <span :style="{ color: màu_tiền(tổng_theo_đài_từ_3_lô.lời_lỗ) }">{{
                      hiện_tiền(tổng_theo_đài_từ_3_lô.lời_lỗ)
                    }}</span>
                  </th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Từ 4 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (từ 4 lô)</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Từ 5 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (từ 5 lô)</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">Số giữa</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (số giữa)</th>
                  <th :style="{ textAlign: 'left', padding: '2px 0 2px 14px' }">
                    Các số năm trước
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dòng in các_dòng_năm_trước_hiển_thị" :key="dòng.ngày">
                  <td :style="{ padding: '2px 14px 2px 0', verticalAlign: 'top' }">
                    {{ dòng.ngày
                    }}<template v-if="dòng.chưa_có_kết_quả"> ({{ dòng.nhãn_xem_trước }})</template>
                  </td>
                  <td :style="{ padding: '2px 14px', verticalAlign: 'top' }">
                    {{ tên_thứ(dòng.thời_điểm) }}
                  </td>
                  <template v-if="có_bộ_lọc_đang_bật">
                    <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                      {{ các_số_khớp_lọc(dòng).filter((mục) => mục.có).length }}/{{
                        các_số_khớp_lọc(dòng).length
                      }}
                      ({{
                        các_số_khớp_lọc(dòng)
                          .map((mục) => `${mục.số}${mục.có ? `(${mục.lô_nay})` : ''}`)
                          .join(', ')
                      }})
                    </td>
                    <td
                      :style="{
                        textAlign: 'right',
                        padding: '2px 14px',
                        verticalAlign: 'top',
                        fontWeight: 'bold',
                        color:
                          lời_lỗ_số_lọc(dòng) === null ? 'inherit' : màu_tiền(lời_lỗ_số_lọc(dòng)!),
                      }"
                    >
                      {{ lời_lỗ_số_lọc(dòng) === null ? '—' : hiện_tiền(lời_lỗ_số_lọc(dòng)!) }}
                    </td>
                  </template>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color: dòng.lời_lỗ === null ? 'inherit' : màu_tiền(dòng.lời_lỗ),
                    }"
                  >
                    {{ dòng.lời_lỗ === null ? '—' : hiện_tiền(dòng.lời_lỗ) }}
                  </td>
                  <td :style="{ padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.ngày_năm_trước }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_trùng }}/{{ dòng.các_số.length }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_chỉ_1_lô_ra_lại }}/{{ dòng.số_chỉ_1_lô }}
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_chỉ_1_lô === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_chỉ_1_lô),
                    }"
                  >
                    {{ dòng.lời_lỗ_chỉ_1_lô === null ? '—' : hiện_tiền(dòng.lời_lỗ_chỉ_1_lô) }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_chỉ_2_lô_ra_lại }}/{{ dòng.số_chỉ_2_lô }}
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_chỉ_2_lô === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_chỉ_2_lô),
                    }"
                  >
                    {{ dòng.lời_lỗ_chỉ_2_lô === null ? '—' : hiện_tiền(dòng.lời_lỗ_chỉ_2_lô) }}
                  </td>
                  <td
                    :style="{ padding: '2px 14px', verticalAlign: 'top', whiteSpace: 'nowrap' }"
                  >
                    <template v-for="mục in [theo_đài_chỉ_2_lô.get(dòng.ngày)]" :key="dòng.ngày">
                      <template v-if="!mục || mục.các_số.length === 0">—</template>
                      <template v-else>
                        <div v-for="mục_số in mục.các_số" :key="mục_số.số">
                          <b>{{ mục_số.số }}</b
                          >:
                          <span
                            v-for="lượt in mục_số.mua"
                            :key="lượt.đài"
                            :style="{
                              marginRight: '6px',
                              color: dòng.chưa_có_kết_quả ? 'inherit' : màu_có(lượt.lô > 0),
                            }"
                          >
                            {{ lượt.đài }}<template v-if="lượt.lô > 0">({{ lượt.lô }})</template>
                          </span>
                        </div>
                        <b v-if="mục.lời_lỗ !== null" :style="{ color: màu_tiền(mục.lời_lỗ) }">{{
                          hiện_tiền(mục.lời_lỗ)
                        }}</b>
                      </template>
                    </template>
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_từ_3_lô_ra_lại }}/{{ dòng.số_từ_3_lô }}
                    <template v-if="dòng.số_từ_3_lô > 0">
                      (<template
                        v-for="(mục, vị_trí) in dòng.các_số.filter((mục) => mục.lô_trước >= 3)"
                        :key="mục.số"
                        ><template v-if="vị_trí > 0">, </template
                        ><span
                          :style="{
                            color: dòng.chưa_có_kết_quả
                              ? 'inherit'
                              : mục.có
                                ? '#16a34a'
                                : '#dc2626',
                          }"
                          >{{ mục.số
                          }}<template v-if="mục.lô_nay > 0">({{ mục.lô_nay }})</template></span
                        ></template
                      >)
                    </template>
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_từ_3_lô === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_từ_3_lô),
                    }"
                  >
                    {{ dòng.lời_lỗ_từ_3_lô === null ? '—' : hiện_tiền(dòng.lời_lỗ_từ_3_lô) }}
                  </td>
                  <td
                    :style="{ padding: '2px 14px', verticalAlign: 'top', whiteSpace: 'nowrap' }"
                  >
                    <template v-for="mục in [theo_đài_từ_3_lô.get(dòng.ngày)]" :key="dòng.ngày">
                      <template v-if="!mục || mục.các_số.length === 0">—</template>
                      <template v-else>
                        <div v-for="mục_số in mục.các_số" :key="mục_số.số">
                          <b>{{ mục_số.số }}</b
                          >:
                          <span
                            v-for="lượt in mục_số.mua"
                            :key="lượt.đài"
                            :style="{
                              marginRight: '6px',
                              color: dòng.chưa_có_kết_quả ? 'inherit' : màu_có(lượt.lô > 0),
                            }"
                          >
                            {{ lượt.đài }}<template v-if="lượt.lô > 0">({{ lượt.lô }})</template>
                          </span>
                        </div>
                        <b v-if="mục.lời_lỗ !== null" :style="{ color: màu_tiền(mục.lời_lỗ) }">{{
                          hiện_tiền(mục.lời_lỗ)
                        }}</b>
                      </template>
                    </template>
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_từ_4_lô_ra_lại }}/{{ dòng.số_từ_4_lô }}
                    <template v-if="dòng.số_từ_4_lô > 0">
                      (<template
                        v-for="(mục, vị_trí) in dòng.các_số.filter((mục) => mục.lô_trước >= 4)"
                        :key="mục.số"
                        ><template v-if="vị_trí > 0">, </template
                        ><span
                          :style="{
                            color: dòng.chưa_có_kết_quả
                              ? 'inherit'
                              : mục.có
                                ? '#16a34a'
                                : '#dc2626',
                          }"
                          >{{ mục.số
                          }}<template v-if="mục.lô_nay > 0">({{ mục.lô_nay }})</template></span
                        ></template
                      >)
                    </template>
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_từ_4_lô === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_từ_4_lô),
                    }"
                  >
                    {{ dòng.lời_lỗ_từ_4_lô === null ? '—' : hiện_tiền(dòng.lời_lỗ_từ_4_lô) }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_từ_5_lô_ra_lại }}/{{ dòng.số_từ_5_lô }}
                    <template v-if="dòng.số_từ_5_lô > 0">
                      (<template
                        v-for="(mục, vị_trí) in dòng.các_số.filter((mục) => mục.lô_trước >= 5)"
                        :key="mục.số"
                        ><template v-if="vị_trí > 0">, </template
                        ><span
                          :style="{
                            color: dòng.chưa_có_kết_quả
                              ? 'inherit'
                              : mục.có
                                ? '#16a34a'
                                : '#dc2626',
                          }"
                          >{{ mục.số
                          }}<template v-if="mục.lô_nay > 0">({{ mục.lô_nay }})</template></span
                        ></template
                      >)
                    </template>
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_từ_5_lô === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_từ_5_lô),
                    }"
                  >
                    {{ dòng.lời_lỗ_từ_5_lô === null ? '—' : hiện_tiền(dòng.lời_lỗ_từ_5_lô) }}
                  </td>
                  <td :style="{ padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.các_số_giữa.filter((mục) => mục.có).length }}/{{
                      dòng.các_số_giữa.length
                    }}
                    <template v-if="dòng.các_số_giữa.length > 0">
                      (<template v-for="(mục, vị_trí) in dòng.các_số_giữa" :key="mục.số"
                        ><template v-if="vị_trí > 0">, </template
                        ><span
                          :style="{
                            color: dòng.chưa_có_kết_quả
                              ? 'inherit'
                              : mục.có
                                ? '#16a34a'
                                : '#dc2626',
                          }"
                          >{{ mục.số
                          }}<template v-if="mục.lô_nay > 0">({{ mục.lô_nay }})</template></span
                        ></template
                      >)
                    </template>
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_số_giữa === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_số_giữa),
                    }"
                  >
                    {{ dòng.lời_lỗ_số_giữa === null ? '—' : hiện_tiền(dòng.lời_lỗ_số_giữa) }}
                  </td>
                  <td :style="{ padding: '2px 0 2px 14px' }">
                    <span
                      v-for="mục in dòng.các_số"
                      :key="mục.số"
                      :style="{
                        color: dòng.chưa_có_kết_quả ? 'inherit' : mục.có ? '#16a34a' : '#dc2626',
                        marginRight: '6px',
                        textDecoration: khớp_bộ_lọc_đang_bật(mục) ? 'underline' : 'none',
                        fontWeight: khớp_bộ_lọc_đang_bật(mục) ? 'bold' : 'normal',
                      }"
                    >
                      {{ mục.số }}<template v-if="mục.lô_trước > 1">({{ mục.lô_trước }})</template>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </template>

      <template v-else-if="lựa_chọn === 'theo_đài'">
        <div :style="{ marginTop: '6px' }">
          xem
          <select v-model.number="số_chữ_số_theo_đài">
            <option :value="2">2 số cuối</option>
            <option :value="3">3 số cuối</option>
            <option :value="4">4 số cuối</option>
          </select>
          — mỗi đài hiện
          <select v-model.number="SỐ_HAY_RA_MỖI_ĐÀI">
            <option :value="10">10</option>
            <option :value="20">20</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
          </select>
          số ra nhiều nhất
          {{ năm_lọc ? `trong năm ${năm_lọc}` : 'trong tất cả các năm' }}; số (n) = n lô
        </div>
        <div :style="{ marginTop: '6px' }">
          lọc
          <select v-model="chế_độ_theo_đài">
            <option value="lô">
              lô ({{ số_chữ_số_theo_đài === 4 ? 'cả 16 giải' : 'cả 18 số' }})
            </option>
            <option value="đầu">đầu (2 số: giải 8, 3 số: giải 7, 4 số: giải 6)</option>
            <option value="cuối">cuối (giải đặc biệt)</option>
            <option value="đầu_cuối">đầu + cuối</option>
          </select>
        </div>
        <div v-for="nhóm in các_đài_theo_thứ" :key="nhóm.nhãn" :style="{ marginTop: '10px' }">
          <b>{{ nhóm.nhãn }}</b> ({{ nhóm.số_ngày }} lần quay)
          <div :style="{ overflowX: 'auto' }">
            <table
              :style="{
                borderCollapse: 'collapse',
                fontFamily: 'monospace',
                fontSize: '14px',
              }"
            >
              <thead>
                <tr>
                  <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Đài</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Số kỳ</th>
                  <th :style="{ textAlign: 'left', padding: '2px 0 2px 14px' }">Các số hay ra</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mục in nhóm.các_đài" :key="mục.đài">
                  <td
                    :style="{ padding: '2px 14px 2px 0', fontWeight: 'bold', verticalAlign: 'top' }"
                  >
                    {{ mục.đài }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ mục.số_kỳ }}
                  </td>
                  <td :style="{ padding: '2px 0 2px 14px' }">
                    <span
                      v-for="mục_số in mục.các_số"
                      :key="mục_số.số"
                      :style="{ marginRight: '10px' }"
                    >
                      <b>{{ mục_số.số }}</b> ({{ mục_số.số_lần }})
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>

      <template v-else-if="lựa_chọn === 'số_theo_tuần'">
        <div :style="{ marginTop: '6px' }">
          chọn số
          <select v-model="số_đang_xem_theo_tuần">
            <option v-for="số in TẤT_CẢ_SỐ" :key="số" :value="số">{{ số }}</option>
          </select>
        </div>
        <template v-if="số_đang_xem_theo_tuần">
          <div :style="{ marginTop: '6px' }">
            Số <b>{{ số_đang_xem_theo_tuần }}</b
            >: số lô mỗi ngày (cộng các đài), mỗi dòng 1 tuần bắt đầu từ chủ nhật; — = ngày không có
            dữ liệu
            {{ năm_lọc ? `(năm ${năm_lọc})` : '(tất cả các năm)' }}
          </div>
          <div :style="{ overflowX: 'auto', marginTop: '8px' }">
            <table
              :style="{ borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: '14px' }"
            >
              <thead>
                <tr>
                  <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Tuần</th>
                  <th
                    v-for="tên in TÊN_NGÀY_TRONG_TUẦN"
                    :key="tên"
                    :style="{ textAlign: 'right', padding: '2px 10px' }"
                  >
                    {{ tên }}
                  </th>
                  <th :style="{ textAlign: 'right', padding: '2px 0 2px 14px' }">Tổng tuần</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dòng in các_dòng_số_theo_tuần" :key="dòng.nhãn">
                  <td :style="{ padding: '2px 14px 2px 0' }">{{ dòng.nhãn }}</td>
                  <td
                    v-for="(lô, vị_trí) in dòng.các_ngày"
                    :key="vị_trí"
                    :style="{
                      textAlign: 'right',
                      padding: '2px 10px',
                      fontWeight: lô ? 'bold' : 'normal',
                      opacity: lô === null ? 0.4 : 1,
                    }"
                  >
                    {{ lô === null ? '—' : lô }}
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 0 2px 14px',
                      fontWeight: 'bold',
                      color: dòng.tổng >= 5 ? '#16a34a' : '#dc2626',
                    }"
                  >
                    {{ dòng.tổng }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </template>

      <template v-else-if="lựa_chọn === 'ngày_trước'">
        <div :style="{ marginTop: '6px' }">
          Mỗi ngày dự đoán bằng ngày liền trước (01/01 dùng 31/12 năm trước; ngày trước không có dữ
          liệu thì bỏ qua): những số (2 số cuối) đã ra hôm trước, hôm nay có ra lại không (xanh = có
          ra lại, đỏ = không; (n) = số lô). Lời/lỗ = mua tất cả các số hôm trước ở mọi đài của ngày.
        </div>
        <div v-if="các_dòng_ngày_trước.length === 0" :style="{ marginTop: '6px' }">
          Chưa có dữ liệu để so sánh.
        </div>
        <template v-else>
          <div :style="{ marginTop: '6px' }">
            thứ
            <select v-model="thứ_lọc_ngày_trước">
              <option value="">tất cả</option>
              <option v-for="mục in THỨ_THEO_TUẦN" :key="mục.thứ" :value="mục.thứ">
                {{ mục.nhãn }}
              </option>
            </select>
            , lọc tổng số trước đó từ
            <input
              v-model.number="lọc_tổng_trước_từ"
              type="number"
              min="0"
              placeholder="tối thiểu"
              :style="{ width: '80px' }"
            />
            đến
            <input
              v-model.number="lọc_tổng_trước_đến"
              type="number"
              min="0"
              placeholder="tối đa"
              :style="{ width: '80px' }"
            />
            số
            <template v-if="khoảng_tổng_trước">
              <button type="button" @click="chọn_tổng_trước(khoảng_tổng_trước.nhỏ_nhất)">
                Nhỏ nhất ({{ khoảng_tổng_trước.nhỏ_nhất }})
              </button>
              <button type="button" @click="chọn_tổng_trước(khoảng_tổng_trước.lớn_nhất)">
                Lớn nhất ({{ khoảng_tổng_trước.lớn_nhất }})
              </button>
            </template>
            <button
              v-if="lọc_tổng_trước_từ !== '' || lọc_tổng_trước_đến !== ''"
              type="button"
              @click="((lọc_tổng_trước_từ = ''), (lọc_tổng_trước_đến = ''))"
            >
              Xóa lọc
            </button>
          </div>
          <div :style="{ marginTop: '4px' }">
            {{ thống_kê_ngày_trước.số_ngày }} ngày — {{ thống_kê_ngày_trước.số_trùng }} /
            {{ thống_kê_ngày_trước.tổng_số }} số ra lại ({{
              thống_kê_ngày_trước.tỉ_lệ.toFixed(1)
            }}%) — vốn {{ thống_kê_ngày_trước.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
            <b :style="{ color: màu_tiền(thống_kê_ngày_trước.lời_lỗ) }">{{
              hiện_tiền(thống_kê_ngày_trước.lời_lỗ)
            }}</b>
          </div>
          <div :style="{ marginTop: '4px' }">
            Tổng các số trước đó % 100 — {{ thống_kê_ngày_trước.tổng_trước.số_có }} /
            {{ thống_kê_ngày_trước.số_ngày }} ngày có ({{
              thống_kê_ngày_trước.tổng_trước.tỉ_lệ.toFixed(1)
            }}%) — vốn {{ thống_kê_ngày_trước.tổng_trước.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
            <b :style="{ color: màu_tiền(thống_kê_ngày_trước.tổng_trước.lời_lỗ) }">{{
              hiện_tiền(thống_kê_ngày_trước.tổng_trước.lời_lỗ)
            }}</b>
          </div>
          <div :style="{ marginTop: '4px' }">
            Tổng theo từng đài (mỗi đài 1 số từ kỳ quay trước của đài đó; thứ 7 là 4 số, thứ khác 3
            số),
            <select v-model="cách_mua_theo_đài">
              <option value="từng_đài">mua theo từng đài (mỗi số ở đúng đài của nó)</option>
              <option value="mọi_đài">mua mỗi số ở cả 3/4 đài</option>
            </select>
            — {{ thống_kê_ngày_trước.theo_đài.số_có }} /
            {{ thống_kê_ngày_trước.theo_đài.số_dự_đoán }} số có — vốn
            {{ thống_kê_ngày_trước.theo_đài.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
            <b :style="{ color: màu_tiền(thống_kê_ngày_trước.theo_đài.lời_lỗ) }">{{
              hiện_tiền(thống_kê_ngày_trước.theo_đài.lời_lỗ)
            }}</b>
          </div>
          <div :style="{ overflowX: 'auto', marginTop: '8px' }">
            <table
              :style="{
                borderCollapse: 'collapse',
                fontFamily: 'monospace',
                fontSize: '14px',
                tableLayout: 'auto',
              }"
            >
              <thead>
                <tr>
                  <th
                    :style="{ textAlign: 'left', padding: '2px 14px 2px 0', whiteSpace: 'nowrap' }"
                  >
                    Ngày hiện tại
                  </th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">Thứ</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">Ngày trước đó</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px', minWidth: '300px' }">
                    Kết quả hiện tại
                  </th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px', minWidth: '300px' }">
                    Kết quả trước đó
                  </th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ</th>
                  <th :style="{ textAlign: 'left', padding: '2px 0 2px 14px' }">
                    Tổng các số trước đó % 100
                  </th>
                  <th :style="{ textAlign: 'left', padding: '2px 0 2px 14px' }">
                    Tổng theo từng đài % 100
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dòng in các_dòng_ngày_trước_hiển_thị" :key="dòng.ngày">
                  <td :style="{ padding: '2px 14px 2px 0', verticalAlign: 'top' }">
                    {{ dòng.ngày
                    }}<template v-if="dòng.chưa_có_kết_quả"> ({{ dòng.nhãn_xem_trước }})</template>
                  </td>
                  <td
                    :style="{ padding: '2px 14px', verticalAlign: 'top', whiteSpace: 'nowrap' }"
                  >
                    {{ tên_thứ(dòng.thời_điểm) }}
                  </td>
                  <td :style="{ padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.ngày_trước }}
                  </td>
                  <td
                    :style="{
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      width: '300px',
                      minWidth: '300px',
                      maxWidth: '300px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                    }"
                  >
                    <template v-if="dòng.chưa_có_kết_quả">—</template>
                    <template v-else>
                      <span
                        v-for="mục in dòng.kết_quả_nay"
                        :key="mục.số"
                        :style="{
                          marginRight: '6px',
                          fontWeight: mục.trong_dự_đoán ? 'bold' : 'normal',
                          color: mục.trong_dự_đoán ? '#16a34a' : 'inherit',
                        }"
                      >
                        {{ mục.số }}<template v-if="mục.lô > 1">({{ mục.lô }})</template>
                      </span>
                    </template>
                  </td>
                  <td
                    :style="{
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      width: '300px',
                      minWidth: '300px',
                      maxWidth: '300px',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                    }"
                  >
                    <span
                      v-for="mục in dòng.kết_quả_trước"
                      :key="mục.số"
                      :style="{
                        marginRight: '6px',
                        color: dòng.chưa_có_kết_quả ? 'inherit' : mục.có ? '#16a34a' : '#dc2626',
                      }"
                    >
                      {{ mục.số }}<template v-if="mục.lô_trước > 1">({{ mục.lô_trước }})</template>
                    </span>
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_trùng }}/{{ dòng.kết_quả_trước.length }}
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color: dòng.lời_lỗ === null ? 'inherit' : màu_tiền(dòng.lời_lỗ),
                    }"
                  >
                    {{ dòng.lời_lỗ === null ? '—' : hiện_tiền(dòng.lời_lỗ) }}
                  </td>
                  <td
                    :style="{
                      padding: '2px 0 2px 14px',
                      verticalAlign: 'top',
                      color: màu_có(dòng.có_tổng_trước),
                    }"
                  >
                    <b>{{ dòng.tổng_trước }}</b> —
                    {{ chữ_có(dòng.có_tổng_trước, dòng.lô_tổng_trước) }}
                  </td>
                  <td
                    :style="{
                      padding: '2px 0 2px 14px',
                      verticalAlign: 'top',
                      whiteSpace: 'nowrap',
                    }"
                  >
                    <div
                      v-for="mục in dòng.theo_đài"
                      :key="mục.đài"
                      :style="{ color: màu_có(mục.có) }"
                    >
                      {{ mục.đài }} <b>{{ mục.số }}</b> — {{ chữ_có(mục.có, mục.lô) }}
                    </div>
                    <b
                      v-if="dòng.lời_lỗ_theo_đài !== null"
                      :style="{ color: màu_tiền(dòng.lời_lỗ_theo_đài) }"
                      >{{ hiện_tiền(dòng.lời_lỗ_theo_đài) }}</b
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </template>

      <template v-else-if="lựa_chọn === 'phần_chục'">
        <div :style="{ marginTop: '6px' }">
          xem phần chục
          <select v-model.number="chục_đang_chọn">
            <option v-for="chục in 10" :key="chục" :value="chục - 1">
              {{ nhãn_phần_chục(chục - 1) }}
            </option>
          </select>
          , thứ
          <select v-model="thứ_lọc_phần_chục">
            <option value="">tất cả</option>
            <option v-for="mục in THỨ_THEO_TUẦN" :key="mục.thứ" :value="mục.thứ">
              {{ mục.nhãn }}{{ THỨ_CÓ_DẤU_SAO.includes(mục.thứ) ? ' *' : '' }}
            </option>
          </select>
          (giá 1k/đài mỗi giải, trúng 1 lần 80k) — thống kê 2 số của giải 8 và 2 số cuối của giải
          đặc biệt
          {{ năm_lọc ? `trong năm ${năm_lọc}` : 'trong tất cả các năm' }} (xanh = thuộc phần chục
          đang chọn; trung bình mỗi nhóm khoảng 10%)
        </div>
        <div :style="{ overflowX: 'auto', marginTop: '8px' }">
          <table :style="{ borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: '14px' }">
            <thead>
              <tr>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Phần chục</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Có kết quả (ngày)</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Tổng dự đoán</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Tổng đúng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="mục in thống_kê_phần_chục.tổng_theo_chục" :key="mục.chục">
                <td :style="{ padding: '2px 14px 2px 0', fontWeight: 'bold' }">
                  {{ mục.chục === 0 ? '00' : `${mục.chục}x` }}
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                  {{ mục.có_kết_quả
                  }}<template v-if="thống_kê_phần_chục.số_ngày_đã_có > 0">
                    ({{
                      ((mục.có_kết_quả / thống_kê_phần_chục.số_ngày_đã_có) * 100).toFixed(0)
                    }}%)</template
                  >
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px' }">{{ mục.dự_đoán }}</td>
                <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                  {{ mục.trúng
                  }}<template v-if="mục.dự_đoán > 0">
                    ({{ ((mục.trúng / mục.dự_đoán) * 100).toFixed(0) }}%)</template
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div :style="{ overflowX: 'auto', marginTop: '8px' }">
          <table :style="{ borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: '14px' }">
            <thead>
              <tr>
                <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Ngày</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">Thứ</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">Giải 8 (từng đài)</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (giải 8)</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">
                  Giải đặc biệt (2 số cuối, từng đài)
                </th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (giải đặc biệt)</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (đầu + cuối)</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">Dự đoán (phần chục)</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Trúng đầu / cuối</th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (dự đoán)</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">Kết quả (phần chục)</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">Ngày năm trước</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">Giải 8 năm trước</th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">
                  Giải đặc biệt năm trước (2 số cuối)
                </th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">
                  Số năm trước trùng · lời/lỗ (2k/số/đài, trúng 80k)
                </th>
                <th :style="{ textAlign: 'right', padding: '2px 14px' }">
                  Mua lô số năm trước: lô · lời/lỗ (15k/số/đài, trúng 80k/lô)
                </th>
                <th :style="{ textAlign: 'left', padding: '2px 14px' }">
                  Số đài nào mua đài đó (15k/số, trúng 80k/lô)
                </th>
              </tr>
              <tr>
                <td
                  :style="{
                    padding: '2px 14px 2px 0',
                    fontWeight: 'bold',
                    borderBottom: '1px solid currentColor',
                    whiteSpace: 'nowrap',
                  }"
                >
                  Tổng
                </td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(thống_kê_phần_chục.tiền_giải_8.lời_lỗ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{ hiện_tiền(thống_kê_phần_chục.tiền_giải_8.lời_lỗ) }}
                </td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(thống_kê_phần_chục.tiền_đặc_biệt.lời_lỗ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{ hiện_tiền(thống_kê_phần_chục.tiền_đặc_biệt.lời_lỗ) }}
                </td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(
                      thống_kê_phần_chục.tiền_giải_8.lời_lỗ +
                        thống_kê_phần_chục.tiền_đặc_biệt.lời_lỗ,
                    ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{
                    hiện_tiền(
                      thống_kê_phần_chục.tiền_giải_8.lời_lỗ +
                        thống_kê_phần_chục.tiền_đặc_biệt.lời_lỗ,
                    )
                  }}
                </td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(thống_kê_phần_chục.tiền_dự_đoán.lời_lỗ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{ hiện_tiền(thống_kê_phần_chục.tiền_dự_đoán.lời_lỗ) }}
                </td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td :style="{ borderBottom: '1px solid currentColor' }"></td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(thống_kê_phần_chục.tiền_khớp.lời_lỗ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{ hiện_tiền(thống_kê_phần_chục.tiền_khớp.lời_lỗ) }}
                </td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(thống_kê_phần_chục.tiền_lô.lời_lỗ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{ hiện_tiền(thống_kê_phần_chục.tiền_lô.lời_lỗ) }}
                </td>
                <td
                  :style="{
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(thống_kê_phần_chục.tiền_chính_đài.lời_lỗ),
                    borderBottom: '1px solid currentColor',
                  }"
                >
                  {{ hiện_tiền(thống_kê_phần_chục.tiền_chính_đài.lời_lỗ) }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ngày in thống_kê_phần_chục.các_ngày" :key="ngày.ngày">
                <td :style="{ padding: '2px 14px 2px 0', whiteSpace: 'nowrap' }">
                  {{ ngày.ngày }}
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  {{ tên_thứ(ngày.thời_điểm)
                  }}<template v-if="ngày.chưa_có">
                    ({{ ngày.thời_điểm === lấy_hôm_nay() ? 'hôm nay' : 'ngày mai' }}, chưa có kết
                    quả)</template
                  >
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <span v-for="mục in ngày.các_đài" :key="mục.đài" :style="{ marginRight: '10px' }">
                    {{ mục.đài }}
                    <span
                      :style="{
                        fontWeight: trong_phần_chục(mục.giải_8) ? 'bold' : 'normal',
                        color: trong_phần_chục(mục.giải_8) ? '#16a34a' : 'inherit',
                      }"
                      >{{ mục.giải_8 || '—' }}</span
                    >
                  </span>
                </td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(ngày.giải_8.lời_lỗ),
                  }"
                >
                  {{ ngày.chưa_có ? '—' : hiện_tiền(ngày.giải_8.lời_lỗ) }}
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <span v-for="mục in ngày.các_đài" :key="mục.đài" :style="{ marginRight: '10px' }">
                    {{ mục.đài }}
                    <span
                      :style="{
                        fontWeight: trong_phần_chục(mục.đặc_biệt) ? 'bold' : 'normal',
                        color: trong_phần_chục(mục.đặc_biệt) ? '#16a34a' : 'inherit',
                      }"
                      >{{ mục.đặc_biệt || '—' }}</span
                    >
                  </span>
                </td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(ngày.đặc_biệt.lời_lỗ),
                  }"
                >
                  {{ ngày.chưa_có ? '—' : hiện_tiền(ngày.đặc_biệt.lời_lỗ) }}
                </td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(ngày.giải_8.lời_lỗ + ngày.đặc_biệt.lời_lỗ),
                  }"
                >
                  {{ ngày.chưa_có ? '—' : hiện_tiền(ngày.giải_8.lời_lỗ + ngày.đặc_biệt.lời_lỗ) }}
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap', fontWeight: 'bold' }">
                  <template v-if="ngày.dự_đoán.chi_tiết.length === 0">—</template>
                  <template v-else>
                    <span
                      v-for="mục in ngày.dự_đoán.chi_tiết"
                      :key="mục.chục"
                      :style="{ marginRight: '8px', color: mục.trúng ? '#16a34a' : '#dc2626' }"
                    >
                      {{ mục.chục === 0 ? '00' : `${mục.chục}x`
                      }}<template v-if="mục.số_lần > 1">({{ mục.số_lần }})</template
                      ><small :style="{ fontWeight: 'normal' }">
                        [{{ mục.số_năm_trước.join(' ') }}]</small
                      >
                    </span>
                  </template>
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <template v-if="ngày.chưa_có">—</template>
                  <template v-else>
                    {{ ngày.dự_đoán.trúng_đầu }}/{{ ngày.dự_đoán.số_đài }} ·
                    {{ ngày.dự_đoán.trúng_cuối }}/{{ ngày.dự_đoán.số_đài }}
                  </template>
                </td>
                <td
                  :style="{
                    textAlign: 'right',
                    padding: '2px 14px',
                    fontWeight: 'bold',
                    color: màu_tiền(ngày.dự_đoán.lời_lỗ),
                  }"
                >
                  {{
                    ngày.dự_đoán.phần_chục.length && !ngày.chưa_có
                      ? hiện_tiền(ngày.dự_đoán.lời_lỗ)
                      : '—'
                  }}
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <template v-if="ngày.chưa_có">—</template>
                  <template v-else>
                    <span
                      v-for="mục in ngày.phần_chục_kết_quả"
                      :key="mục.chục"
                      :style="{ marginRight: '8px', fontWeight: 'bold' }"
                    >
                      {{ mục.chục === 0 ? '00' : `${mục.chục}x`
                      }}<template v-if="mục.số_lần > 1">({{ mục.số_lần }})</template>
                    </span>
                  </template>
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  {{ ngày.ngày_năm_trước }}
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <template v-if="ngày.các_đài_năm_trước.length === 0">—</template>
                  <template v-else>
                    <span
                      v-for="mục in ngày.các_đài_năm_trước"
                      :key="mục.đài"
                      :style="{ marginRight: '10px' }"
                    >
                      {{ mục.đài }}
                      <span :style="kiểu_số_khớp(ngày.số_ra, mục.giải_8)">{{
                        mục.giải_8 || '—'
                      }}</span>
                    </span>
                  </template>
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <template v-if="ngày.các_đài_năm_trước.length === 0">—</template>
                  <template v-else>
                    <span
                      v-for="mục in ngày.các_đài_năm_trước"
                      :key="mục.đài"
                      :style="{ marginRight: '10px' }"
                    >
                      {{ mục.đài }}
                      <span :style="kiểu_số_khớp(ngày.số_ra, mục.đặc_biệt)">{{
                        mục.đặc_biệt || '—'
                      }}</span>
                    </span>
                  </template>
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <template v-if="ngày.chưa_có || ngày.khớp_năm_trước.phần_trăm === null"
                    >—</template
                  >
                  <template v-else>
                    {{ chữ_phần_trăm_khớp(ngày.khớp_năm_trước) }} ·
                    <b :style="{ color: màu_tiền(ngày.khớp_năm_trước.lời_lỗ) }">{{
                      hiện_tiền(ngày.khớp_năm_trước.lời_lỗ)
                    }}</b>
                  </template>
                </td>
                <td :style="{ textAlign: 'right', padding: '2px 14px', whiteSpace: 'nowrap' }">
                  <template v-if="ngày.chưa_có || ngày.khớp_năm_trước.phần_trăm === null"
                    >—</template
                  >
                  <template v-else>
                    {{ ngày.lô_năm_trước.lô }} lô
                    <template v-if="ngày.lô_năm_trước.trúng.length > 0">
                      (<template v-for="(mục, vị_trí) in ngày.lô_năm_trước.trúng" :key="mục.số"
                        ><template v-if="vị_trí > 0">, </template
                        ><span :style="{ color: '#16a34a', fontWeight: 'bold' }"
                          >{{ mục.số }}({{ mục.lô }})</span
                        ></template
                      >)
                    </template>
                    ·
                    <b :style="{ color: màu_tiền(ngày.lô_năm_trước.lời_lỗ) }">{{
                      hiện_tiền(ngày.lô_năm_trước.lời_lỗ)
                    }}</b>
                  </template>
                </td>
                <td :style="{ padding: '2px 14px', whiteSpace: 'nowrap', verticalAlign: 'top' }">
                  <template v-if="ngày.chính_đài.các_đài.length === 0">—</template>
                  <template v-else>
                    <div v-for="mục in ngày.chính_đài.các_đài" :key="mục.đài">
                      {{ mục.đài }}
                      <span
                        v-for="mục_số in mục.các_số"
                        :key="mục_số.số"
                        :style="{
                          marginRight: '6px',
                          fontWeight: 'bold',
                          color: ngày.chưa_có ? 'inherit' : màu_có(mục_số.lô > 0),
                        }"
                      >
                        {{ mục_số.số }}<template v-if="mục_số.lô > 1">({{ mục_số.lô }})</template>
                      </span>
                      <small>(kỳ {{ mục.ngày_lấy }})</small>
                    </div>
                    <template v-if="!ngày.chưa_có">
                      {{ ngày.chính_đài.lô }} lô ·
                      <b :style="{ color: màu_tiền(ngày.chính_đài.lời_lỗ) }">{{
                        hiện_tiền(ngày.chính_đài.lời_lỗ)
                      }}</b>
                    </template>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-else-if="lựa_chọn === 'ngày_hôm_sau'">
        <div :style="{ marginTop: '6px' }">
          chỉ xét lần ra
          <select v-model="lọc_số_lô">
            <option value="">tất cả</option>
            <option value="1">đúng 1 lô</option>
            <option value="2">đúng 2 lô</option>
            <option value="3">đúng 3 lô</option>
            <option value="4+">từ 4 lô</option>
          </select>
          trong ngày trước đó (cộng các đài); lời/lỗ = mua số đó ở mọi đài của ngày kế, 15k mỗi đài,
          trúng 80k mỗi lô (thứ 7 có 4 đài, các ngày khác 3 đài); hiển thị
          <select v-model="hiển_thị_số_hôm_sau">
            <option value="tất_cả">tất cả các số</option>
            <option value="mới_ra">chỉ các số mới ra</option>
          </select>
          <template v-if="hiển_thị_số_hôm_sau === 'mới_ra'">
            (ngày {{ số_mới_ra.ngày }}: {{ kết_quả_hôm_sau_hiển_thị.length }} số)
          </template>
        </div>
        <div :style="{ marginTop: '8px', fontFamily: 'monospace', fontSize: '15px' }">
          <details
            v-for="mục in kết_quả_hôm_sau_hiển_thị"
            :key="mục.số"
            :style="{ marginBottom: '4px' }"
          >
            <summary :style="{ cursor: 'pointer' }">
              <b>{{ mục.số }}</b>
              — {{ mục.số_lần_có_kết_quả }} lần, hôm sau ra nữa {{ mục.số_lần_ra_lại }}
              <template v-if="mục.số_lần_có_kết_quả">
                ({{ ((mục.số_lần_ra_lại / mục.số_lần_có_kết_quả) * 100).toFixed(1) }}%)
              </template>
              , lô hôm sau {{ mục.lô_ngày_kế }} — lời/lỗ:
              <b :style="{ color: màu_tiền(mục.lời_lỗ) }">{{ hiện_tiền(mục.lời_lỗ) }}</b>
            </summary>
            <div v-for="lần in mục.các_lần" :key="lần.ngày" :style="{ paddingLeft: '24px' }">
              {{ lần.ngày }} ra {{ lần.lô }} lô → {{ lần.ngày_kế }}:
              <span :style="{ color: màu_có(lần.có) }">{{ chữ_có(lần.có, lần.lô_kế) }}</span>
              —
              <b :style="{ color: lần.lời_lỗ === null ? 'inherit' : màu_tiền(lần.lời_lỗ) }">{{
                lần.lời_lỗ === null ? '—' : hiện_tiền(lần.lời_lỗ)
              }}</b>
              ({{ lần.số_đài_kế }} đài)
            </div>
          </details>
        </div>
      </template>

      <template v-else>
        <div :style="{ marginTop: '6px' }">{{ các_hàng.length }} dòng</div>
        <table
          :style="{
            marginTop: '8px',
            borderCollapse: 'collapse',
            fontFamily: 'monospace',
            fontSize: '14px',
          }"
        >
          <thead>
            <tr>
              <th :style="{ textAlign: 'left', padding: '2px 12px 2px 0' }">Tỉnh</th>
              <th :style="{ textAlign: 'left', padding: '2px 12px' }">Ngày</th>
              <th :style="{ textAlign: 'left', padding: '2px 0 2px 12px' }">Kết quả</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hàng, i) in các_hàng" :key="i">
              <td :style="{ padding: '2px 12px 2px 0' }">{{ hàng[0] }}</td>
              <td :style="{ padding: '2px 12px' }">{{ hàng[1] }}</td>
              <td :style="{ padding: '2px 0 2px 12px' }">{{ hàng[2] }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </template>
  </div>
</template>
