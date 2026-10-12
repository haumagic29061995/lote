<script setup lang="ts">
import { computed, ref } from 'vue'
import { lấy_dữ_liệu_loto } from '@/composables/loto'
import { DANH_SÁCH_TỈNH, TÊN_THỨ } from '@/constants/loto'

const các_tuần = lấy_dữ_liệu_loto()

const số_lọc = ref<number>(83)
const số_lọc_2_chữ_số = computed(() => {
  const giá_trị = Math.min(99, Math.max(0, Math.trunc(Number(số_lọc.value) || 0)))
  return giá_trị.toString().padStart(2, '0')
})

const KHÓA_LOCAL_STORAGE = 'loto_số_đã_lưu'

const đọc_số_đã_lưu = (): string[] => {
  try {
    const dữ_liệu = JSON.parse(localStorage.getItem(KHÓA_LOCAL_STORAGE) ?? '[]')
    return Array.isArray(dữ_liệu) ? dữ_liệu.filter((số) => typeof số === 'string') : []
  } catch {
    return []
  }
}

const số_đã_lưu = ref<string[]>(đọc_số_đã_lưu())

const ghi_số_đã_lưu = () => {
  try {
    localStorage.setItem(KHÓA_LOCAL_STORAGE, JSON.stringify(số_đã_lưu.value))
  } catch {
    // bỏ qua nếu trình duyệt chặn localStorage
  }
}

const lưu_số = () => {
  if (!số_đã_lưu.value.includes(số_lọc_2_chữ_số.value)) {
    số_đã_lưu.value.push(số_lọc_2_chữ_số.value)
    ghi_số_đã_lưu()
  }
}

const xoá_số = (số: string) => {
  số_đã_lưu.value = số_đã_lưu.value.filter((mục) => mục !== số)
  ghi_số_đã_lưu()
}

const chọn_số = (số: string) => {
  số_lọc.value = Number(số)
}

const chế_độ_xem = ref<'ngày' | 'tỉnh' | 'tuần'>('ngày')

const đếm_số_lọc = (hai_số_cuối: string[]): number =>
  hai_số_cuối.filter((số) => số === số_lọc_2_chữ_số.value).length

const MỘT_NGÀY = 24 * 60 * 60 * 1000

const phân_tích_ngày = (ngày: string): number => {
  const [d, m, y] = ngày.split('/').map(Number)
  return Date.UTC(y, m - 1, d)
}

// chuỗi ngày liên tiếp không xuất hiện số đang lọc; ngày thiếu dữ liệu làm đứt chuỗi để không tính quá
const chuỗi_không_xuất_hiện = computed(() => {
  const tổng_theo_ngày = new Map<number, number>()
  for (const tuần of các_tuần) {
    for (const tỉnh of tuần.các_tỉnh) {
      if (!tỉnh.ngày) continue
      const mốc = phân_tích_ngày(tỉnh.ngày)
      tổng_theo_ngày.set(mốc, (tổng_theo_ngày.get(mốc) ?? 0) + đếm_số_lọc(tỉnh.hai_số_cuối))
    }
  }
  const các_mốc = [...tổng_theo_ngày.keys()].sort((a, b) => a - b)
  let dài_nhất = { số_ngày: 0, từ: 0, đến: 0 }
  let hiện_tại = { số_ngày: 0, từ: 0, đến: 0 }
  let mốc_trước = 0
  for (const mốc of các_mốc) {
    if (tổng_theo_ngày.get(mốc)) {
      hiện_tại = { số_ngày: 0, từ: 0, đến: 0 }
    } else {
      const liền_kề = hiện_tại.số_ngày > 0 && mốc - mốc_trước === MỘT_NGÀY
      hiện_tại = liền_kề
        ? { ...hiện_tại, số_ngày: hiện_tại.số_ngày + 1, đến: mốc }
        : { số_ngày: 1, từ: mốc, đến: mốc }
      if (hiện_tại.số_ngày > dài_nhất.số_ngày) dài_nhất = hiện_tại
    }
    mốc_trước = mốc
  }
  // chuỗi hiện tại chỉ còn hiệu lực nếu kết thúc ở ngày có dữ liệu mới nhất
  const mốc_mới_nhất = các_mốc[các_mốc.length - 1]
  return {
    dài_nhất,
    hiện_tại: hiện_tại.đến === mốc_mới_nhất ? hiện_tại : { số_ngày: 0, từ: 0, đến: 0 },
  }
})

const định_dạng_mốc = (mốc: number): string => {
  const ngày = new Date(mốc)
  return [ngày.getUTCDate(), ngày.getUTCMonth() + 1, ngày.getUTCFullYear()]
    .map((số, i) => String(số).padStart(i === 2 ? 4 : 2, '0'))
    .join('/')
}

// theo ngày: mỗi tuần 1 dòng, 7 cột từ chủ nhật đến thứ 7
const các_dòng_theo_ngày = computed(() =>
  các_tuần.map((tuần) => ({
    nhãn: tuần.nhãn,
    các_ngày: TÊN_THỨ.map((_, thứ) => {
      const các_tỉnh_trong_ngày = tuần.các_tỉnh.filter((tỉnh) => tỉnh.thứ === thứ && tỉnh.ngày)
      if (!các_tỉnh_trong_ngày.length) return null
      let tổng = 0
      const chi_tiết: string[] = []
      for (const tỉnh of các_tỉnh_trong_ngày) {
        const số_lượng = đếm_số_lọc(tỉnh.hai_số_cuối)
        tổng += số_lượng
        if (số_lượng > 0) chi_tiết.push(`${tỉnh.tên} (${số_lượng})`)
      }
      return { ngày: các_tỉnh_trong_ngày[0].ngày, tổng, chi_tiết }
    }),
  })),
)

// xanh từ 5 lần trở lên, vàng 4 lần, đỏ dưới 4 lần
const màu_theo_tuần = (tổng: number): string =>
  tổng >= 5 ? 'màu-xanh' : tổng === 4 ? 'màu-vàng' : 'màu-đỏ'

// theo tuần: tổng số lần xuất hiện trong cả tuần
const các_dòng_theo_tuần = computed(() =>
  các_tuần.map((tuần) => {
    let tổng = 0
    const chi_tiết: string[] = []
    for (const tỉnh of tuần.các_tỉnh) {
      const số_lượng = đếm_số_lọc(tỉnh.hai_số_cuối)
      tổng += số_lượng
      if (số_lượng > 0) chi_tiết.push(`${TÊN_THỨ[tỉnh.thứ]} ${tỉnh.tên} (${số_lượng})`)
    }
    return {
      nhãn: tuần.nhãn,
      tổng,
      chi_tiết,
    }
  }),
)

// mỗi tuần 1 dòng: số lô trúng của từng tỉnh, null nếu chưa có dữ liệu
const các_dòng = computed(() =>
  các_tuần.map((tuần) => ({
    nhãn: tuần.nhãn,
    số_lượng: tuần.các_tỉnh.map((tỉnh) =>
      tỉnh.hai_số_cuối.length ? đếm_số_lọc(tỉnh.hai_số_cuối) : null,
    ),
  })),
)
</script>

<template>
  <div class="loto">
    <h2>Loto 22 tỉnh</h2>
    <div class="bộ-lọc">
      <label>
        Số cần lọc (0–99):
        <input v-model.number="số_lọc" type="number" min="0" max="99" />
      </label>
      <button type="button" @click="lưu_số">Save</button>
      <span v-for="số in số_đã_lưu" :key="số" class="số-đã-lưu">
        <button type="button" class="chọn" @click="chọn_số(số)">{{ số }}</button>
        <button type="button" class="xoá" title="Xoá" @click="xoá_số(số)">X</button>
      </span>
    </div>
    <p class="thống-kê">
      Số {{ số_lọc_2_chữ_số }} không xuất hiện liên tiếp lâu nhất:
      <template v-if="chuỗi_không_xuất_hiện.dài_nhất.số_ngày > 0">
        <b>{{ chuỗi_không_xuất_hiện.dài_nhất.số_ngày }} ngày</b>
        ({{ định_dạng_mốc(chuỗi_không_xuất_hiện.dài_nhất.từ) }} –
        {{ định_dạng_mốc(chuỗi_không_xuất_hiện.dài_nhất.đến) }}).
      </template>
      <template v-else>chưa có ngày nào.</template>
      Hiện tại: <b>{{ chuỗi_không_xuất_hiện.hiện_tại.số_ngày }} ngày</b>.
    </p>
    <label>
      Xem:
      <select v-model="chế_độ_xem">
        <option value="ngày">Theo ngày</option>
        <option value="tỉnh">Theo tỉnh</option>
        <option value="tuần">Theo tuần</option>
      </select>
    </label>
    <div v-if="chế_độ_xem === 'ngày'" class="loto-scroll">
      <table>
        <thead>
          <tr>
            <th>Tuần</th>
            <th v-for="(tên_thứ, i) in TÊN_THỨ" :key="i">{{ tên_thứ }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dòng in các_dòng_theo_ngày" :key="dòng.nhãn">
            <th>{{ dòng.nhãn }}</th>
            <td v-for="(ngày, i) in dòng.các_ngày" :key="i" :class="{ trúng: ngày?.tổng }">
              <template v-if="!ngày">—</template>
              <template v-else>
                <small>{{ ngày.ngày }}</small>
                <div>{{ ngày.tổng > 0 ? `✓ ${ngày.tổng}` : '✗' }}</div>
                <small>{{ ngày.chi_tiết.join(', ') }}</small>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="chế_độ_xem === 'tuần'" class="loto-scroll">
      <table>
        <thead>
          <tr>
            <th>Tuần (từ Chủ nhật)</th>
            <th>Kết quả</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dòng in các_dòng_theo_tuần" :key="dòng.nhãn">
            <th>{{ dòng.nhãn }}</th>
            <td :class="màu_theo_tuần(dòng.tổng)">{{ dòng.tổng > 0 ? `✓ ${dòng.tổng}` : '✗' }}</td>
            <td>{{ dòng.chi_tiết.join(', ') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="loto-scroll">
      <table>
        <thead>
          <tr>
            <th>Tuần</th>
            <th v-for="(tỉnh, i) in DANH_SÁCH_TỈNH" :key="i" :class="`thứ-${tỉnh.thứ}`">
              <div>{{ TÊN_THỨ[tỉnh.thứ] }}</div>
              <div>{{ tỉnh.tên }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dòng in các_dòng" :key="dòng.nhãn">
            <th>{{ dòng.nhãn }}</th>
            <td v-for="(số_lượng, i) in dòng.số_lượng" :key="i" :class="{ trúng: số_lượng }">
              <template v-if="số_lượng === null">—</template>
              <template v-else-if="số_lượng > 0">✓ {{ số_lượng }}</template>
              <template v-else>✗</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.loto-scroll {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ccc;
  padding: 4px 8px;
  text-align: center;
  min-width: 76px;
}
th.thứ-0,
th.thứ-2,
th.thứ-4,
th.thứ-6 {
  background: rgba(128, 128, 128, 0.15);
}
td {
  font-weight: bold;
}
td.trúng {
  background: #ffe08a;
  color: #000;
}
.bộ-lọc {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.số-đã-lưu {
  display: inline-flex;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.số-đã-lưu button {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.số-đã-lưu .xoá {
  color: #ff6b6b;
}
label {
  display: block;
  margin-bottom: 8px;
}
td.màu-xanh {
  background: #b7e4c7;
  color: #000;
}
td.màu-vàng {
  background: #ffe08a;
  color: #000;
}
td.màu-đỏ {
  background: #f5b5b5;
  color: #000;
}
</style>
