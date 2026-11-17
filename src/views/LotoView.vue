<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { LINK_CSV_XSMN_THEO_NĂM } from '@/constants/lote'
import { tách_csv } from '@/composables/loto'

// Dữ liệu CSV: Tỉnh | Ngày (DD/MM/YYYY) | Kết quả (18 số cách nhau bằng dấu cách)
const tất_cả_hàng = ref<string[][]>([]) // dữ liệu của mọi năm gộp lại
const năm_lọc = ref('') // '' = tất cả các năm
const đang_tải = ref(true)
const lỗi = ref('')

type Lựa_Chọn = 'chưa_ra' | 'dự_đoán_ngày' | 'dữ_liệu_gốc'
const lựa_chọn = ref<Lựa_Chọn>('chưa_ra')
const sắp_xếp = ref<'số' | 'lâu_nhất'>('số')
// Số vừa ra (chưa ra = 0) mà lần ra trước cách ≥ ngưỡng này thì coi là "lâu mới ra" và dự đoán số + 1
const ngưỡng_lâu = ref(5)

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
  hiệu: string // abs(số - tháng) % 100
  tổng: string // (số + tháng) % 100
  có_số: boolean | null // null = chưa có kết quả
  có_hiệu: boolean | null
  có_tổng: boolean | null
  lô_số: number // số lô của số đó trong ngày (cộng tất cả đài)
  lô_hiệu: number
  lô_tổng: number
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
    const [, tháng, năm] = ngày.split('/').map(Number)
    const thứ_tự_trong_năm = Math.round((thời_điểm - Date.UTC(năm, 0, 1)) / MILI_GIÂY_MỖI_NGÀY) + 1
    const số = thứ_tự_trong_năm % 100
    const hiệu = Math.abs(số - tháng) % 100
    const tổng = (số + tháng) % 100
    const số_lô = (n: number) => nhóm?.các_số.get(hai_chữ_số(n)) ?? 0
    const kiểm_tra = (n: number) => (nhóm ? số_lô(n) > 0 : null)
    return {
      ngày,
      thời_điểm,
      số_đài: nhóm?.số_đài ?? (new Date(thời_điểm).getUTCDay() === 6 ? 4 : 3),
      số: hai_chữ_số(số),
      hiệu: hai_chữ_số(hiệu),
      tổng: hai_chữ_số(tổng),
      có_số: kiểm_tra(số),
      có_hiệu: kiểm_tra(hiệu),
      có_tổng: kiểm_tra(tổng),
      lô_số: số_lô(số),
      lô_hiệu: số_lô(hiệu),
      lô_tổng: số_lô(tổng),
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

// Tiền tính bằng nghìn đồng: mua 1 số ở 1 đài hết 15k, mỗi lô trúng thưởng 80k
const GIÁ_MỖI_ĐÀI = 15
const TIỀN_THƯỞNG_MỖI_LÔ = 80

type Thống_Kê_Giai_Đoạn = {
  nhãn: string
  số_ngày: number // số ngày đã có kết quả
  số_đài_ngày: number // tổng số đài của các ngày đó (mỗi ngày 3 đài, thứ 7 là 4 đài); vốn = số_đài_ngày x 15k
  có_số: number
  có_hiệu: number
  có_tổng: number
  lô_số: number // tổng số lô (cộng mọi ngày, mọi đài) của số dự đoán trong giai đoạn
  lô_hiệu: number
  lô_tổng: number
}

// Thống kê số ngày "có" trong từng giai đoạn; dòng cuối là cả năm
const thống_kê_dự_đoán = computed<Thống_Kê_Giai_Đoạn[]>(() => {
  const các_nhóm: Thống_Kê_Giai_Đoạn[] = NHÃN_GIAI_ĐOẠN.map((nhãn) => ({
    nhãn,
    số_ngày: 0,
    số_đài_ngày: 0,
    có_số: 0,
    có_hiệu: 0,
    có_tổng: 0,
    lô_số: 0,
    lô_hiệu: 0,
    lô_tổng: 0,
  }))
  for (const dòng of các_dòng_dự_đoán.value) {
    if (dòng.có_số === null) continue
    const nhóm = các_nhóm[dòng.giai_đoạn]
    nhóm.số_ngày++
    nhóm.số_đài_ngày += dòng.số_đài
    if (dòng.có_số) nhóm.có_số++
    if (dòng.có_hiệu) nhóm.có_hiệu++
    if (dòng.có_tổng) nhóm.có_tổng++
    nhóm.lô_số += dòng.lô_số
    nhóm.lô_hiệu += dòng.lô_hiệu
    nhóm.lô_tổng += dòng.lô_tổng
  }
  const cả_năm = các_nhóm.reduce(
    (tổng, nhóm) => ({
      nhãn: 'Cả năm',
      số_ngày: tổng.số_ngày + nhóm.số_ngày,
      số_đài_ngày: tổng.số_đài_ngày + nhóm.số_đài_ngày,
      có_số: tổng.có_số + nhóm.có_số,
      có_hiệu: tổng.có_hiệu + nhóm.có_hiệu,
      có_tổng: tổng.có_tổng + nhóm.có_tổng,
      lô_số: tổng.lô_số + nhóm.lô_số,
      lô_hiệu: tổng.lô_hiệu + nhóm.lô_hiệu,
      lô_tổng: tổng.lô_tổng + nhóm.lô_tổng,
    }),
    {
      nhãn: 'Cả năm',
      số_ngày: 0,
      số_đài_ngày: 0,
      có_số: 0,
      có_hiệu: 0,
      có_tổng: 0,
      lô_số: 0,
      lô_hiệu: 0,
      lô_tổng: 0,
    },
  )
  return [...các_nhóm, cả_năm]
})
const vốn = (nhóm: Thống_Kê_Giai_Đoạn) => nhóm.số_đài_ngày * GIÁ_MỖI_ĐÀI
const lời_lỗ = (nhóm: Thống_Kê_Giai_Đoạn, số_lô: number) => số_lô * TIỀN_THƯỞNG_MỖI_LÔ - vốn(nhóm)
const hiện_tiền = (nghìn: number) => `${nghìn > 0 ? '+' : ''}${nghìn.toLocaleString('vi-VN')}k`
const màu_tiền = (nghìn: number) => (nghìn > 0 ? '#16a34a' : nghìn < 0 ? '#dc2626' : 'inherit')

const màu_có = (có: boolean | null) => (có === null ? 'inherit' : có ? '#16a34a' : '#dc2626')
// 'có (2)' = số đó ra 2 lô trong ngày (cộng các đài)
const chữ_có = (có: boolean | null, số_lô: number) =>
  có === null ? '—' : có ? `có (${số_lô})` : 'không'

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
          Số = (thứ tự ngày trong năm) % 100. Hiệu = |số − tháng| % 100, Tổng = (số + tháng) % 100.
          Có = số đó ra ở bất kỳ đài nào trong ngày (3 đài, thứ 7 là 4 đài).
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
              <th :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">Có (hiệu)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lô (hiệu)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lời/lỗ (hiệu)</th>
              <th :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">Có (tổng)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lô (tổng)</th>
              <th :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">Lời/lỗ (tổng)</th>
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
                {{ nhóm.có_hiệu }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">{{ nhóm.lô_hiệu }}</td>
              <td
                :style="{
                  textAlign: 'right',
                  padding: '2px 14px 2px 0',
                  fontWeight: 'bold',
                  color: màu_tiền(lời_lỗ(nhóm, nhóm.lô_hiệu)),
                }"
              >
                {{ hiện_tiền(lời_lỗ(nhóm, nhóm.lô_hiệu)) }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 4px 2px 14px' }">
                {{ nhóm.có_tổng }}
              </td>
              <td :style="{ textAlign: 'right', padding: '2px 14px 2px 0' }">{{ nhóm.lô_tổng }}</td>
              <td
                :style="{
                  textAlign: 'right',
                  padding: '2px 14px 2px 0',
                  fontWeight: 'bold',
                  color: màu_tiền(lời_lỗ(nhóm, nhóm.lô_tổng)),
                }"
              >
                {{ hiện_tiền(lời_lỗ(nhóm, nhóm.lô_tổng)) }}
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
                |Số − tháng| % 100
              </th>
              <th :style="{ textAlign: 'left', padding: '2px 14px 2px 0' }">Có/không</th>
              <th :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">
                (Số + tháng) % 100
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
              <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">{{ dòng.hiệu }}</td>
              <td :style="{ padding: '2px 14px 2px 0', color: màu_có(dòng.có_hiệu) }">
                {{ chữ_có(dòng.có_hiệu, dòng.lô_hiệu) }}
              </td>
              <td :style="{ textAlign: 'center', padding: '2px 8px 2px 14px' }">{{ dòng.tổng }}</td>
              <td :style="{ padding: '2px 0', color: màu_có(dòng.có_tổng) }">
                {{ chữ_có(dòng.có_tổng, dòng.lô_tổng) }}
              </td>
            </tr>
          </tbody>
        </table>
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
