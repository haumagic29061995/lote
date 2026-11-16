<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { LINK_CSV_XSMN } from '@/constants/lote'
import { tách_csv } from '@/composables/loto'

// Hiển thị tạm nguyên dữ liệu CSV: Tỉnh | Ngày | Kết quả (18 số)
const các_hàng = ref<string[][]>([])
const đang_tải = ref(true)
const lỗi = ref('')

onMounted(async () => {
  try {
    const phản_hồi = await fetch(LINK_CSV_XSMN)
    if (!phản_hồi.ok) throw new Error(`HTTP ${phản_hồi.status}`)
    const văn_bản = await phản_hồi.text()
    các_hàng.value = tách_csv(văn_bản).filter((hàng) => hàng.length >= 3 && hàng[0] !== '')
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
      <div>{{ các_hàng.length }} dòng</div>
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
  </div>
</template>
