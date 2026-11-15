<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { LINK_GOOGLE_SHEET_LOTO } from '@/constants/lote'
import { nhóm_theo_số, tải_danh_sách_loto, type Dòng_Loto } from '@/composables/loto'

const các_dòng = ref<Dòng_Loto[]>([])
const đang_tải = ref(true)
const lỗi = ref('')
const lọc = ref<'' | 'có' | 'không'>('')
const chế_độ = ref<'ngày' | 'số'>('ngày')

onMounted(async () => {
  try {
    các_dòng.value = await tải_danh_sách_loto(LINK_GOOGLE_SHEET_LOTO)
  } catch (e) {
    lỗi.value = `không tải được: ${(e as Error).message}`
  } finally {
    đang_tải.value = false
  }
})

const số_có = computed(() => các_dòng.value.filter((dòng) => dòng.kết_quả === 'có').length)
const số_không = computed(() => các_dòng.value.filter((dòng) => dòng.kết_quả === 'không').length)
const tỉ_lệ_có = computed(() => {
  const tổng = số_có.value + số_không.value
  return tổng === 0 ? 0 : (số_có.value / tổng) * 100
})
const các_dòng_hiển_thị = computed(() =>
  lọc.value ? các_dòng.value.filter((dòng) => dòng.kết_quả === lọc.value) : các_dòng.value,
)
const các_nhóm_số = computed(() => nhóm_theo_số(các_dòng.value))

const màu_kết_quả = (kết_quả: string) =>
  kết_quả === 'có' ? '#16a34a' : kết_quả === 'không' ? '#dc2626' : 'inherit'
const ký_hiệu_kết_quả = (kết_quả: string) =>
  kết_quả === 'có' ? '✓' : kết_quả === 'không' ? '✗' : '·'
</script>

<template>
  <div :style="{ padding: '12px' }">
    <h3>Loto</h3>

    <div v-if="đang_tải">Đang tải...</div>
    <div v-else-if="lỗi" :style="{ color: '#dc2626' }">{{ lỗi }}</div>

    <template v-else>
      <div>
        {{ các_dòng.length }} ngày ({{ các_dòng[các_dòng.length - 1].ngày }} đến
        {{ các_dòng[0].ngày }}) — có: {{ số_có }}, không: {{ số_không }}, tỉ lệ có:
        {{ tỉ_lệ_có.toFixed(1) }}%
      </div>

      <div :style="{ marginTop: '6px' }">
        xem theo
        <select v-model="chế_độ">
          <option value="ngày">ngày</option>
          <option value="số">số (so sánh các lần cùng số)</option>
        </select>
        <template v-if="chế_độ === 'ngày'">
          , hiển thị
          <select v-model="lọc">
            <option value="">tất cả</option>
            <option value="có">có</option>
            <option value="không">không</option>
          </select>
          ({{ các_dòng_hiển_thị.length }} dòng)
        </template>
        <template v-else>({{ các_nhóm_số.length }} số)</template>
      </div>

      <table
        v-if="chế_độ === 'ngày'"
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
            <th :style="{ textAlign: 'center', padding: '2px 14px' }">Số</th>
            <th :style="{ textAlign: 'left', padding: '2px 0 2px 14px' }">Kết quả</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dòng in các_dòng_hiển_thị" :key="dòng.thời_điểm">
            <td :style="{ padding: '2px 14px 2px 0' }">{{ dòng.ngày }}</td>
            <td :style="{ padding: '2px 14px', textAlign: 'center' }">{{ dòng.số }}</td>
            <td
              :style="{
                padding: '2px 0 2px 14px',
                fontWeight: dòng.kết_quả === 'có' ? 'bold' : 'normal',
                color: màu_kết_quả(dòng.kết_quả),
              }"
            >
              {{ dòng.kết_quả || '—' }}
            </td>
          </tr>
        </tbody>
      </table>

      <div v-else :style="{ marginTop: '8px', fontFamily: 'monospace', fontSize: '15px' }">
        <details open v-for="nhóm in các_nhóm_số" :key="nhóm.số" :style="{ marginBottom: '2px' }">
          <summary :style="{ cursor: 'pointer' }">
            <b>{{ nhóm.số }}</b>
            — {{ nhóm.các_lần.length }} lần, có {{ nhóm.số_có }}, không {{ nhóm.số_không }} ({{
              nhóm.tỉ_lệ_có.toFixed(0)
            }}%)
            <span
              v-for="lần in [...nhóm.các_lần].reverse()"
              :key="lần.thời_điểm"
              :style="{ color: màu_kết_quả(lần.kết_quả) }"
            >
              {{ ký_hiệu_kết_quả(lần.kết_quả) }}
            </span>
          </summary>
          <div v-for="lần in nhóm.các_lần" :key="lần.thời_điểm" :style="{ paddingLeft: '24px' }">
            {{ lần.ngày }}
            <span
              :style="{
                color: màu_kết_quả(lần.kết_quả),
                fontWeight: lần.kết_quả === 'có' ? 'bold' : 'normal',
              }"
            >
              {{ lần.kết_quả || '—' }}
            </span>
            <span v-if="lần.cách_lần_trước !== null" :style="{ opacity: 0.6 }">
              (cách lần trước {{ lần.cách_lần_trước }} ngày)
            </span>
          </div>
        </details>
      </div>
    </template>
  </div>
</template>
