import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { nạp_dữ_liệu_từ_google_sheet } from './composables/lote'

const app = createApp(App)

// tải dữ liệu mới nhất trước khi khởi động, để các trang đọc dữ liệu đồng bộ như trước
nạp_dữ_liệu_từ_google_sheet()
  .then(() => {
    app.use(router)
    app.mount('#app')
  })
  .catch((lỗi: Error) => {
    console.error(lỗi)
    const vùng = document.getElementById('app')!
    vùng.textContent = ''

    const thông_báo = document.createElement('p')
    thông_báo.style.color = '#dc2626'
    thông_báo.textContent = lỗi.message

    const nút = document.createElement('button')
    nút.textContent = 'Tải lại'
    nút.onclick = () => location.reload()

    vùng.style.padding = '12px'
    vùng.append(thông_báo, nút)
  })
