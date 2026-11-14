<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { LINK_GOOGLE_SHEET_LOTO } from '@/constants/lote'
import { tải_danh_sách_loto, type Dòng_Loto } from '@/composables/loto'

const các_dòng = ref<Dòng_Loto[]>([])
const đang_tải = ref(true)
const lỗi = ref('')
const lọc = ref<'' | 'có' | 'không'>('')

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
</script>

<template>
  <div :style="{ padding: '12px' }">
    <h3>Loto</h3>

    <div v-if="đang_tải">Đang tải...</div>
    <div v-else-if="lỗi" :style="{ color: '#dc2626' }">{{ lỗi }}</div>

    <template v-else>
      <div>
        {{ các_dòng.length }} ngày ({{ các_dòng[các_dòng.length - 1].ngày }} đến {{ các_dòng[0].ngày }}) — có:
        {{ số_có }}, không: {{ số_không }}, tỉ lệ có: {{ tỉ_lệ_có.toFixed(1) }}%
      </div>

      <div :style="{ marginTop: '6px' }">
        hiển thị
        <select v-model="lọc">
          <option value="">tất cả</option>
          <option value="có">có</option>
          <option value="không">không</option>
        </select>
        ({{ các_dòng_hiển_thị.length }} dòng)
      </div>

      <table :style="{ marginTop: '8px', borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: '15px' }">
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
                color: dòng.kết_quả === 'có' ? '#16a34a' : dòng.kết_quả === 'không' ? '#dc2626' : 'inherit',
              }"
            >
              {{ dòng.kết_quả || '—' }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>
