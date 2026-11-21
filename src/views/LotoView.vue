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
  | 'dữ_liệu_gốc'
const lựa_chọn = ref<Lựa_Chọn>('chưa_ra')
const sắp_xếp = ref<'số' | 'lâu_nhất'>('số')
// Số vừa ra (chưa ra = 0) mà lần ra trước cách ≥ ngưỡng này thì coi là "lâu mới ra" và dự đoán số + 1.
// Mặc định đặt ở số lớn nhất hiện có (chỉ hiện số quay lại sau lâu nhất); sửa tay được.
const ngưỡng_lâu = ref(1)

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
// Số dự đoán = số + 1 (99 + 1 = 00), chỉ có khi số vừa ra và lần ra trước đã cách ≥ ngưỡng
const số_dự_đoán = (dòng: Dòng_Chưa_Ra) =>
  dòng.quay_lại_sau !== null && dòng.quay_lại_sau >= ngưỡng_lâu.value
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
  giai_đoạn: number // 0..3: ngày 1-100, 101-200, 201-300, 301 đến hết năm
}

// Dự đoán theo ngày trong năm: ngày thứ N trong năm (01/01 là 1), số = N % 100.
// Có = số đó xuất hiện (2 chữ số cuối của giải) ở bất kỳ đài nào trong ngày đó.
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
    const năm = Number(ngày.split('/')[2])
    const thứ_tự_trong_năm = Math.round((thời_điểm - Date.UTC(năm, 0, 1)) / MILI_GIÂY_MỖI_NGÀY) + 1
    const số = thứ_tự_trong_năm % 100
    // số ngày còn lại đến 31/12 (31/12 thì là 0, 01/01 năm thường là 364)
    const ngược = Math.round((Date.UTC(năm, 11, 31) - thời_điểm) / MILI_GIÂY_MỖI_NGÀY) % 100
    const số_lô = (n: number) => nhóm?.các_số.get(hai_chữ_số(n)) ?? 0
    const kiểm_tra = (n: number) => (nhóm ? số_lô(n) > 0 : null)
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
      giai_đoạn: Math.min(3, Math.floor((thứ_tự_trong_năm - 1) / 100)),
    }
  }

  const danh_sách = [...theo_ngày.entries()].map(([ngày, nhóm]) => dựng(ngày, nhóm))
  danh_sách.sort((a, b) => b.thời_điểm - a.thời_điểm)

  // dòng dự đoán cho ngày kế tiếp (chưa có kết quả), chỉ khi đang xem năm mới nhất hoặc tất cả
  const đang_xem_mới_nhất = !năm_lọc.value || năm_lọc.value === các_năm.value[0]
  if (đang_xem_mới_nhất && danh_sách.length > 0) {
    const ngày_kế = đổi_thời_điểm_thành_ngày(danh_sách[0].thời_điểm + MILI_GIÂY_MỖI_NGÀY)
    danh_sách.unshift(dựng(ngày_kế))
  }
  return danh_sách
})

// Chia năm thành 4 giai đoạn theo thứ tự ngày; 100 ngày liên tiếp thì (thứ tự % 100) đi qua đủ 100 số 00-99
const NHÃN_GIAI_ĐOẠN = ['Ngày 1–100', 'Ngày 101–200', 'Ngày 201–300', 'Ngày 301 đến hết năm']

// Tiền tính bằng nghìn đồng. Loại giá trị: mua 1 số ở 1 đài hết bao nhiêu, mỗi lô trúng thưởng bao nhiêu
const CÁC_LOẠI_GIÁ = {
  '1': { giá_mỗi_đài: 15, tiền_thưởng_mỗi_lô: 80 },
  '2': { giá_mỗi_đài: 18, tiền_thưởng_mỗi_lô: 70 },
} as const
const loại_giá = ref<keyof typeof CÁC_LOẠI_GIÁ>('1')
const GIÁ_MỖI_ĐÀI = computed(() => CÁC_LOẠI_GIÁ[loại_giá.value].giá_mỗi_đài)
const TIỀN_THƯỞNG_MỖI_LÔ = computed(() => CÁC_LOẠI_GIÁ[loại_giá.value].tiền_thưởng_mỗi_lô)

type Thống_Kê_Giai_Đoạn = {
  nhãn: string
  số_ngày: number // số ngày đã có kết quả
  số_đài_ngày: number // tổng số đài của các ngày đó (mỗi ngày 3 đài, thứ 7 là 4 đài); vốn = số_đài_ngày x 15k
  có_số: number
  có_ngược: number
  lô_số: number // tổng số lô (cộng mọi ngày, mọi đài) của số dự đoán trong giai đoạn
  lô_ngược: number
}

// Thống kê số ngày "có" trong từng giai đoạn; dòng cuối là cả năm
const thống_kê_dự_đoán = computed<Thống_Kê_Giai_Đoạn[]>(() => {
  const các_nhóm: Thống_Kê_Giai_Đoạn[] = NHÃN_GIAI_ĐOẠN.map((nhãn) => ({
    nhãn,
    số_ngày: 0,
    số_đài_ngày: 0,
    có_số: 0,
    có_ngược: 0,
    lô_số: 0,
    lô_ngược: 0,
  }))
  for (const dòng of các_dòng_dự_đoán.value) {
    if (dòng.có_số === null) continue
    const nhóm = các_nhóm[dòng.giai_đoạn]
    nhóm.số_ngày++
    nhóm.số_đài_ngày += dòng.số_đài
    if (dòng.có_số) nhóm.có_số++
    if (dòng.có_ngược) nhóm.có_ngược++
    nhóm.lô_số += dòng.lô_số
    nhóm.lô_ngược += dòng.lô_ngược
  }
  const cả_năm = các_nhóm.reduce(
    (tổng, nhóm) => ({
      nhãn: 'Cả năm',
      số_ngày: tổng.số_ngày + nhóm.số_ngày,
      số_đài_ngày: tổng.số_đài_ngày + nhóm.số_đài_ngày,
      có_số: tổng.có_số + nhóm.có_số,
      có_ngược: tổng.có_ngược + nhóm.có_ngược,
      lô_số: tổng.lô_số + nhóm.lô_số,
      lô_ngược: tổng.lô_ngược + nhóm.lô_ngược,
    }),
    {
      nhãn: 'Cả năm',
      số_ngày: 0,
      số_đài_ngày: 0,
      có_số: 0,
      có_ngược: 0,
      lô_số: 0,
      lô_ngược: 0,
    },
  )
  return [...các_nhóm, cả_năm]
})
const vốn = (nhóm: Thống_Kê_Giai_Đoạn) => nhóm.số_đài_ngày * GIÁ_MỖI_ĐÀI.value
const lời_lỗ = (nhóm: Thống_Kê_Giai_Đoạn, số_lô: number) =>
  số_lô * TIỀN_THƯỞNG_MỖI_LÔ.value - vốn(nhóm)
const hiện_tiền = (nghìn: number) => `${nghìn > 0 ? '+' : ''}${nghìn.toLocaleString('vi-VN')}k`
const màu_tiền = (nghìn: number) => (nghìn > 0 ? '#16a34a' : nghìn < 0 ? '#dc2626' : 'inherit')

const màu_có = (có: boolean | null) => (có === null ? 'inherit' : có ? '#16a34a' : '#dc2626')
// 'có (2)' = số đó ra 2 lô trong ngày (cộng các đài)
const chữ_có = (có: boolean | null, số_lô: number) =>
  có === null ? '—' : có ? `có (${số_lô})` : 'không'

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
}

// Thống kê: mỗi ngày chỉ lấy các số vừa ra mà quay lại sau CAO NHẤT trong ngày đó (nhiều số bằng nhau thì lấy hết),
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
      const quay_lại_sau = Math.round((thời_điểm - trước) / MILI_GIÂY_MỖI_NGÀY)
      const dự_đoán = hai_chữ_số((Number(số) + 1) % 100)
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
        số_đài_kế:
          kế?.số_đài ?? (new Date(thời_điểm + MILI_GIÂY_MỖI_NGÀY).getUTCDay() === 6 ? 4 : 3),
      })
    }
    const cao_nhất = Math.max(0, ...các_lượt_trong_ngày.map((lượt) => lượt.quay_lại_sau))
    kết_quả.push(...các_lượt_trong_ngày.filter((lượt) => lượt.quay_lại_sau === cao_nhất))
  }
  return kết_quả.sort((a, b) => b.thời_điểm - a.thời_điểm || a.số.localeCompare(b.số))
})

const tiền_lượt = (lượt: Lượt_Quay_Lại) =>
  lượt.lô * TIỀN_THƯỞNG_MỖI_LÔ.value - lượt.số_đài_kế * GIÁ_MỖI_ĐÀI.value
const thống_kê_quay_lại = computed(() => {
  const đã_có = các_lượt_quay_lại.value.filter((lượt) => lượt.có !== null)
  const lô = đã_có.reduce((tổng, lượt) => tổng + lượt.lô, 0)
  const vốn_tổng = đã_có.reduce((tổng, lượt) => tổng + lượt.số_đài_kế * GIÁ_MỖI_ĐÀI.value, 0)
  return {
    số_lượt: đã_có.length,
    số_có: đã_có.filter((lượt) => lượt.có).length,
    lô,
    vốn: vốn_tổng,
    lời_lỗ: lô * TIỀN_THƯỞNG_MỖI_LÔ.value - vốn_tổng,
  }
})

type Dòng_Năm_Trước = {
  ngày: string
  thời_điểm: number
  ngày_năm_trước: string // cùng ngày/tháng của năm trước
  các_số: { số: string; lô_trước: number; có: boolean; lô_nay: number }[] // các số đã ra ngày đó năm trước; có = hôm nay cũng ra
  số_trùng: number
  số_từ_2_lô: number // số các số đã ra từ 2 lô năm trước
  số_từ_2_lô_ra_lại: number // trong đó bao nhiêu số hôm nay ra lại
  lời_lỗ_từ_2_lô: number | null // chỉ mua các số từ 2 lô năm trước ở mọi đài của ngày; null = chưa có kết quả
  vốn_từ_2_lô: number
  số_từ_3_lô: number
  số_từ_3_lô_ra_lại: number
  lời_lỗ_từ_3_lô: number | null
  vốn_từ_3_lô: number
  vốn: number // nghìn đồng: mua tất cả các số trên ở mọi đài của ngày
  lời_lỗ: number | null // null = ngày hiện tại chưa có kết quả
  nhãn_xem_trước: string // 'hôm nay' | 'ngày mai' cho dòng xem trước, '' cho dòng đã có kết quả
  chưa_có_kết_quả: boolean // ngày hiện tại chưa có kết quả: hiện 0/N và các số năm trước (không tô xanh/đỏ)
}

// So từng ngày với cùng ngày/tháng của năm trước: những số đã ra hôm đó năm trước, năm nay có ra lại không.
// Chỉ có dòng khi dữ liệu có cả hai năm (29/02 không có ngày tương ứng thì bỏ qua).
// So sánh theo 2 hoặc 3 số cuối của giải (3 số cuối bỏ qua giải 8 chỉ có 2 chữ số)
const số_chữ_số_so_sánh = ref<2 | 3>(2)
// Tiền tính bằng nghìn đồng, mua 1 số ở 1 đài. Giá mua theo "loại giá trị" đang chọn (15k hoặc 18k) cho cả 2 và 3 số;
// tiền thưởng 1 lô: 2 số theo loại giá (80k hoặc 70k), 3 số 600k
const giá_so_sánh = (độ_dài: 2 | 3) => ({
  giá_mỗi_đài: CÁC_LOẠI_GIÁ[loại_giá.value].giá_mỗi_đài,
  tiền_thưởng_mỗi_lô: độ_dài === 2 ? CÁC_LOẠI_GIÁ[loại_giá.value].tiền_thưởng_mỗi_lô : 600,
})
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
    const các_số_từ_2_lô = các_số.filter((mục) => mục.lô_trước >= 2)
    const vốn_từ_2_lô =
      các_số_từ_2_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_từ_2_lô =
      các_số_từ_2_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    const các_số_từ_3_lô = các_số.filter((mục) => mục.lô_trước >= 3)
    const vốn_từ_3_lô =
      các_số_từ_3_lô.length * (số_đài_theo_ngày.get(ngày) ?? 0) * giá.giá_mỗi_đài
    const thưởng_từ_3_lô =
      các_số_từ_3_lô.reduce((tổng, mục) => tổng + mục.lô_nay, 0) * giá.tiền_thưởng_mỗi_lô
    kết_quả.push({
      ngày,
      thời_điểm: đổi_ngày_thành_số(ngày),
      ngày_năm_trước,
      các_số,
      số_trùng: các_số.filter((mục) => mục.có).length,
      số_từ_2_lô: các_số.filter((mục) => mục.lô_trước >= 2).length,
      số_từ_2_lô_ra_lại: các_số.filter((mục) => mục.lô_trước >= 2 && mục.có).length,
      lời_lỗ_từ_2_lô: thưởng_từ_2_lô - vốn_từ_2_lô,
      vốn_từ_2_lô,
      số_từ_3_lô: các_số_từ_3_lô.length,
      số_từ_3_lô_ra_lại: các_số_từ_3_lô.filter((mục) => mục.có).length,
      lời_lỗ_từ_3_lô: thưởng_từ_3_lô - vốn_từ_3_lô,
      vốn_từ_3_lô,
      vốn,
      lời_lỗ: thưởng - vốn,
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
        thời_điểm: đổi_ngày_thành_số(hôm_nay_chuỗi),
        ngày_năm_trước,
        các_số: [...năm_trước.entries()]
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([số, lô_trước]) => ({ số, lô_trước, có: false, lô_nay: 0 })),
        số_trùng: 0,
        số_từ_2_lô: [...năm_trước.values()].filter((lô) => lô >= 2).length,
        số_từ_2_lô_ra_lại: 0,
        lời_lỗ_từ_2_lô: null,
        vốn_từ_2_lô: 0,
        vốn_từ_3_lô: 0,
        số_từ_3_lô: [...năm_trước.values()].filter((lô) => lô >= 3).length,
        số_từ_3_lô_ra_lại: 0,
        lời_lỗ_từ_3_lô: null,
        vốn: 0,
        lời_lỗ: null,
        chưa_có_kết_quả: true,
      })
    }
  }
  return kết_quả.sort((a, b) => b.thời_điểm - a.thời_điểm)
})
const thống_kê_năm_trước = computed(() => {
  // ngày chưa có kết quả không tính vào thống kê
  const các_dòng = các_dòng_năm_trước.value.filter((dòng) => !dòng.chưa_có_kết_quả)
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
    return {
      tổng_số: tổng,
      số_trùng: trùng,
      tỉ_lệ: tổng ? (trùng / tổng) * 100 : 0,
      vốn: các_dòng.reduce((t, dòng) => t + vốn(dòng), 0),
      lời_lỗ: các_dòng.reduce((t, dòng) => t + (lời_lỗ(dòng) ?? 0), 0),
    }
  }
  return {
    số_ngày: các_dòng.length,
    tổng_số,
    số_trùng,
    vốn: các_dòng.reduce((tổng, dòng) => tổng + dòng.vốn, 0),
    lời_lỗ: các_dòng.reduce((tổng, dòng) => tổng + (dòng.lời_lỗ ?? 0), 0),
    tỉ_lệ: tổng_số ? (số_trùng / tổng_số) * 100 : 0,
    từ_2_lô: nhóm_lô(
      (dòng) => dòng.số_từ_2_lô,
      (dòng) => dòng.số_từ_2_lô_ra_lại,
      (dòng) => dòng.vốn_từ_2_lô,
      (dòng) => dòng.lời_lỗ_từ_2_lô,
    ),
    từ_3_lô: nhóm_lô(
      (dòng) => dòng.số_từ_3_lô,
      (dòng) => dòng.số_từ_3_lô_ra_lại,
      (dòng) => dòng.vốn_từ_3_lô,
      (dòng) => dòng.lời_lỗ_từ_3_lô,
    ),
  }
})

// Theo từng đài, tách theo thứ trong tuần: những số (2 hoặc 3 số cuối) ra nhiều nhất trong năm đang chọn
const SỐ_HAY_RA_MỖI_ĐÀI = 10
const số_chữ_số_theo_đài = ref<2 | 3>(2)
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
// (trùng với Bến Tre quay thứ 3); ngày 09/11/2026 (thứ 2) ghi TH thay vì HCM. Chỉ áp dụng cho lựa chọn 6.
const SỬA_TÊN_ĐÀI: { đài: string; thứ: number; thành: string }[] = [
  { đài: 'BT', thứ: 4, thành: 'BTH' },
  { đài: 'TH', thứ: 1, thành: 'HCM' },
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
        .slice(0, SỐ_HAY_RA_MỖI_ĐÀI),
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
const các_đài_theo_thứ = computed(() =>
  THỨ_THEO_TUẦN.map(({ thứ, nhãn }) => ({
    nhãn,
    các_đài: các_đài_hay_ra.value.filter((mục) => mục.thứ === thứ),
  })).filter((nhóm) => nhóm.các_đài.length > 0),
)

// Mỗi số từ 00 đến 99: mỗi lần số đó ra, ngày hôm sau có ra nữa không
const TẤT_CẢ_SỐ = Array.from({ length: 100 }, (_, i) => hai_chữ_số(i))
// Chỉ xét các lần số đó ra đúng N lô trong ngày (cộng các đài); '' = không lọc, '4+' = từ 4 lô trở lên
const lọc_số_lô = ref<'' | '1' | '2' | '3' | '4+'>('2')
const đúng_số_lô = (lô: number) =>
  !lọc_số_lô.value || (lọc_số_lô.value === '4+' ? lô >= 4 : lô === Number(lọc_số_lô.value))

type Lần_Ra_Hôm_Sau = {
  ngày: string
  lô: number // số lô hôm đó (cộng các đài)
  ngày_kế: string
  có: boolean | null // null = ngày kế chưa có kết quả
  lô_kế: number
}
type Kết_Quả_Hôm_Sau = {
  số: string
  các_lần: Lần_Ra_Hôm_Sau[] // mới nhất trước
  số_lần_có_kết_quả: number
  số_lần_ra_lại: number
  lô_ngày_kế: number
}

const kết_quả_hôm_sau = computed<Kết_Quả_Hôm_Sau[]>(() => {
  const theo_ngày = new Map<number, { ngày: string; đếm: Map<string, number> }>()
  for (const hàng of tất_cả_hàng.value) {
    const thời_điểm = đổi_ngày_thành_số(hàng[1])
    const nhóm = theo_ngày.get(thời_điểm) ?? { ngày: hàng[1], đếm: new Map<string, number>() }
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
      các_lần.push({
        ngày: nhóm.ngày,
        lô,
        ngày_kế: đổi_thời_điểm_thành_ngày(thời_điểm + MILI_GIÂY_MỖI_NGÀY),
        có: kế ? lô_kế > 0 : null,
        lô_kế,
      })
    }
    const đã_có = các_lần.filter((lần) => lần.có !== null)
    return {
      số,
      các_lần,
      số_lần_có_kết_quả: đã_có.length,
      số_lần_ra_lại: đã_có.filter((lần) => lần.có).length,
      lô_ngày_kế: đã_có.reduce((tổng, lần) => tổng + lần.lô_kế, 0),
    }
  })
})

// Số "quay lại sau" lớn nhất trong các số vừa ra; đổi năm hay có dữ liệu mới thì ngưỡng đi theo
const quay_lại_lớn_nhất = computed(() =>
  Math.max(1, ...các_số_chưa_ra.value.map((dòng) => dòng.quay_lại_sau ?? 0)),
)
watch(quay_lại_lớn_nhất, (giá_trị) => (ngưỡng_lâu.value = giá_trị), { immediate: true })

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
          <option value="dữ_liệu_gốc">Dữ liệu gốc</option>
        </select>
        năm
        <select v-model="năm_lọc">
          <option value="">tất cả</option>
          <option v-for="năm in các_năm" :key="năm" :value="năm">{{ năm }}</option>
        </select>
        , loại giá trị
        <select v-model="loại_giá">
          <option value="1">1: 15k/đài, trúng 1 lô 80k</option>
          <option value="2">2: 18k/đài, trúng 1 lô 70k</option>
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
          — số vừa ra mà quay lại sau ≥
          <input v-model.number="ngưỡng_lâu" type="number" min="1" :style="{ width: '48px' }" />
          ngày thì dự đoán số + 1
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
              <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Giai đoạn</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px' }">Số ngày</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px' }">Vốn</th>
              <th :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">Có (số)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lô (số)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lời/lỗ (số)</th>
              <th :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">Có (ngược)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lô (ngược)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lời/lỗ (ngược)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="nhóm in thống_kê_dự_đoán" :key="nhóm.nhãn">
              <td :style="{ padding: '2px 14px 2px 0' }">{{ nhóm.nhãn }}</td>
              <td :style="{ textAlign: 'right', padding: '2px 14px' }">{{ nhóm.số_ngày }}</td>
              <td :style="{ textAlign: 'right', padding: '2px 14px' }">
                {{ vốn(nhóm).toLocaleString('vi-VN') }}k
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">{{ nhóm.có_số }}</td>
              <td :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">{{ nhóm.lô_số }}</td>
              <td
                :style="{
                  textAlign: 'right',
                  padding: '2px 14px 2px 0',
                  fontWeight: 'bold',
                  color: màu_tiền(lời_lỗ(nhóm, nhóm.lô_số)),
                }"
              >
                {{ hiện_tiền(lời_lỗ(nhóm, nhóm.lô_số)) }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">
                {{ nhóm.có_ngược }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">{{ nhóm.lô_ngược }}</td>
              <td
                :style="{
                  textAlign: 'right',
                  padding: '2px 14px 2px 0',
                  fontWeight: 'bold',
                  color: màu_tiền(lời_lỗ(nhóm, nhóm.lô_ngược)),
                }"
              >
                {{ hiện_tiền(lời_lỗ(nhóm, nhóm.lô_ngược)) }}
              </td>
            </tr>
          </tbody>
        </table>
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
              <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">Số</th>
              <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
              <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                Số ngược (ngày còn lại đến 31/12) % 100
              </th>
              <th :style="{ textAlign: 'left', padding: '2px 0 2px 0' }">Có/không</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dòng in các_dòng_dự_đoán" :key="dòng.ngày">
              <td :style="{ padding: '2px 14px 2px 0' }">
                {{ dòng.ngày }} ({{ dòng.số_đài }} đài)
              </td>
              <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px', fontWeight: 'bold' }">
                {{ dòng.số }}
              </td>
              <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_số) }">
                {{ chữ_có(dòng.có_số, dòng.lô_số) }}
              </td>
              <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">{{ dòng.ngược }}</td>
              <td :style="{ padding: '2px 0', color: màu_có(dòng.có_ngược) }">
                {{ chữ_có(dòng.có_ngược, dòng.lô_ngược) }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-else-if="lựa_chọn === 'thống_kê_quay_lại'">
        <div :style="{ marginTop: '6px' }">
          Mỗi ngày lấy số vừa ra mà quay lại sau cao nhất trong ngày đó, dự đoán số + 1 cho ngày hôm
          sau; có = số dự đoán ra ở bất kỳ đài nào hôm sau
        </div>
        <div :style="{ marginTop: '4px' }">
          {{ thống_kê_quay_lại.số_lượt }} lượt đã có kết quả — có: {{ thống_kê_quay_lại.số_có }} —
          lô: {{ thống_kê_quay_lại.lô }} — vốn: {{ thống_kê_quay_lại.vốn.toLocaleString('vi-VN') }}k
          — lời/lỗ:
          <b :style="{ color: màu_tiền(thống_kê_quay_lại.lời_lỗ) }">{{
            hiện_tiền(thống_kê_quay_lại.lời_lỗ)
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
              <th :style="{ textAlign: 'center', padding: '2px 14px' }">Dự đoán (+1)</th>
              <th :style="{ textAlign: 'left', padding: '2px 14px' }">Ngày kế</th>
              <th :style="{ textAlign: 'left', padding: '2px 14px' }">Có/không</th>
              <th :style="{ textAlign: 'right', padding: '2px 0 2px 14px' }">Lời/lỗ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lượt in các_lượt_quay_lại" :key="lượt.ngày + lượt.số">
              <td :style="{ padding: '2px 14px 2px 0' }">{{ lượt.ngày }}</td>
              <td :style="{ textAlign: 'center', padding: '2px 14px' }">{{ lượt.số }}</td>
              <td :style="{ textAlign: 'right', padding: '2px 14px' }">{{ lượt.quay_lại_sau }}</td>
              <td :style="{ textAlign: 'center', padding: '2px 14px', fontWeight: 'bold' }">
                {{ lượt.dự_đoán }}
              </td>
              <td :style="{ padding: '2px 14px' }">{{ lượt.ngày_kế }}</td>
              <td :style="{ padding: '2px 14px', color: màu_có(lượt.có) }">
                {{ chữ_có(lượt.có, lượt.lô) }}
              </td>
              <td
                :style="{
                  textAlign: 'right',
                  padding: '2px 0 2px 14px',
                  color: lượt.có === null ? 'inherit' : màu_tiền(tiền_lượt(lượt)),
                }"
              >
                {{ lượt.có === null ? '—' : hiện_tiền(tiền_lượt(lượt)) }}
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
              { nhãn: 'Từ 2 lô', dữ_liệu: thống_kê_năm_trước.từ_2_lô },
              { nhãn: 'Từ 3 lô', dữ_liệu: thống_kê_năm_trước.từ_3_lô },
            ]"
            :key="nhóm.nhãn"
            :style="{ marginTop: '4px' }"
          >
            {{ nhóm.nhãn }} — {{ nhóm.dữ_liệu.số_trùng }} / {{ nhóm.dữ_liệu.tổng_số }} số ra lại ({{
              nhóm.dữ_liệu.tỉ_lệ.toFixed(1)
            }}%) — vốn {{ nhóm.dữ_liệu.vốn.toLocaleString('vi-VN') }}k — lời/lỗ:
            <b :style="{ color: màu_tiền(nhóm.dữ_liệu.lời_lỗ) }">{{
              hiện_tiền(nhóm.dữ_liệu.lời_lỗ)
            }}</b>
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
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ</th>
                  <th :style="{ textAlign: 'left', padding: '2px 14px' }">Cùng ngày năm trước</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Từ 2 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (từ 2 lô)</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Từ 3 lô ra lại</th>
                  <th :style="{ textAlign: 'right', padding: '2px 14px' }">Lời/lỗ (từ 3 lô)</th>
                  <th :style="{ textAlign: 'left', padding: '2px 0 2px 14px' }">
                    Các số năm trước
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dòng in các_dòng_năm_trước" :key="dòng.ngày">
                  <td :style="{ padding: '2px 14px 2px 0', verticalAlign: 'top' }">
                    {{ dòng.ngày }}<template v-if="dòng.chưa_có_kết_quả"> ({{ dòng.nhãn_xem_trước }})</template>
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
                  <td :style="{ padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.ngày_năm_trước }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_trùng }}/{{ dòng.các_số.length }}
                  </td>
                  <td :style="{ textAlign: 'right', padding: '2px 14px', verticalAlign: 'top' }">
                    {{ dòng.số_từ_2_lô_ra_lại }}/{{ dòng.số_từ_2_lô }}
                  </td>
                  <td
                    :style="{
                      textAlign: 'right',
                      padding: '2px 14px',
                      verticalAlign: 'top',
                      fontWeight: 'bold',
                      color:
                        dòng.lời_lỗ_từ_2_lô === null ? 'inherit' : màu_tiền(dòng.lời_lỗ_từ_2_lô),
                    }"
                  >
                    {{ dòng.lời_lỗ_từ_2_lô === null ? '—' : hiện_tiền(dòng.lời_lỗ_từ_2_lô) }}
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
                          >{{ mục.số }}</span
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
                  <td :style="{ padding: '2px 0 2px 14px' }">
                    <span
                      v-for="mục in dòng.các_số"
                      :key="mục.số"
                      :style="{
                        color: dòng.chưa_có_kết_quả ? 'inherit' : mục.có ? '#16a34a' : '#dc2626',
                        marginRight: '6px',
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
          </select>
          — mỗi đài hiện {{ SỐ_HAY_RA_MỖI_ĐÀI }} số ra nhiều nhất
          {{ năm_lọc ? `trong năm ${năm_lọc}` : 'trong tất cả các năm' }}; số (n) = n lô
        </div>
        <div :style="{ marginTop: '6px' }">
          lọc
          <select v-model="chế_độ_theo_đài">
            <option value="lô">lô (cả 18 số)</option>
            <option value="đầu">đầu (2 số: giải 8, 3 số: giải 7)</option>
            <option value="cuối">cuối (giải đặc biệt)</option>
            <option value="đầu_cuối">đầu + cuối</option>
          </select>
        </div>
        <div v-for="nhóm in các_đài_theo_thứ" :key="nhóm.nhãn" :style="{ marginTop: '10px' }">
          <b>{{ nhóm.nhãn }}</b>
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
          trong ngày trước đó (cộng các đài)
        </div>
        <div :style="{ marginTop: '8px', fontFamily: 'monospace', fontSize: '15px' }">
          <details v-for="mục in kết_quả_hôm_sau" :key="mục.số" :style="{ marginBottom: '4px' }">
            <summary :style="{ cursor: 'pointer' }">
              <b>{{ mục.số }}</b>
              — {{ mục.số_lần_có_kết_quả }} lần, hôm sau ra nữa {{ mục.số_lần_ra_lại }}
              <template v-if="mục.số_lần_có_kết_quả">
                ({{ ((mục.số_lần_ra_lại / mục.số_lần_có_kết_quả) * 100).toFixed(1) }}%)
              </template>
              , lô hôm sau {{ mục.lô_ngày_kế }}
            </summary>
            <div v-for="lần in mục.các_lần" :key="lần.ngày" :style="{ paddingLeft: '24px' }">
              {{ lần.ngày }} ra {{ lần.lô }} lô → {{ lần.ngày_kế }}:
              <span :style="{ color: màu_có(lần.có) }">{{ chữ_có(lần.có, lần.lô_kế) }}</span>
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
