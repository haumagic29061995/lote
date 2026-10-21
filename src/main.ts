import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { nạp_dữ_liệu_từ_google_sheet } from './composables/lote'

const app = createApp(App)

// tải dữ liệu mới nhất trước khi khởi động, để các trang đọc dữ liệu đồng bộ như trước
nạp_dữ_liệu_từ_google_sheet().finally(() => {
  app.use(router)
  app.mount('#app')
})
