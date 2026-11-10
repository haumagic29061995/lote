<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'

import {
  lấy_dữ_liệu_xổ_số_45,
  lấy_dữ_liệu_xổ_số_55,
  tính_danh_sách_chính_của_kỳ,
} from '@/composables/lote'
import {
  đọc_bộ_nhớ_đệm,
  liệt_kê_bộ_nhớ_đệm_theo_tiền_tố,
  TIỀN_TỐ_DS_DỰ_ĐOÁN,
  TIỀN_TỐ_DỰ_ĐOÁN_THEO_SỐ_LẦN,
  type Dự_Đoán_Đã_Lưu,
  type Dự_Đoán_Theo_Số_Lần_Đã_Lưu,
} from '@/composables/prediction-cache'

const route = useRoute()
// ngày và danh sách truyền qua query khi mở từ trang chính, '' là tất cả
const ngày_chọn = ref<string>(String(route.query.ngay ?? ''))
const danh_sách_chọn = ref<string>(String(route.query.ds ?? ''))

const dữ_liệu_xổ_số = { 45: lấy_dữ_liệu_xổ_số_45(), 55: lấy_dữ_liệu_xổ_số_55() }
const các_bản_ghi = ref<Dự_Đoán_Theo_Số_Lần_Đã_Lưu[]>([])
const đang_tải = ref(true)
// danh sách xuất hiện (các danh sách phụ) đã tính sẵn của từng kỳ, dùng lại để vẽ lưới, không tính lại
const ds_dự_đoán_đã_tính = ref<Partial<Record<number, Dự_Đoán_Đã_Lưu>>>({})
Promise.all(
  [45, 55].map(async (loại) => {
    const đã_lưu = await đọc_bộ_nhớ_đệm<Dự_Đoán_Đã_Lưu>(`${TIỀN_TỐ_DS_DỰ_ĐOÁN}${loại}`)
    if (đã_lưu) ds_dự_đoán_đã_tính.value[loại] = đã_lưu
  }),
)

liệt_kê_bộ_nhớ_đệm_theo_tiền_tố<Dự_Đoán_Theo_Số_Lần_Đã_Lưu>(TIỀN_TỐ_DỰ_ĐOÁN_THEO_SỐ_LẦN)
  .then((kết_quả) => {
    các_bản_ghi.value = kết_quả.map((mục) => mục.giá_trị)
  })
  .finally(() => {
    đang_tải.value = false
  })

const các_ngày = computed(() =>
  [...new Set(các_bản_ghi.value.map((bản) => bản.ngày_dự_đoán))].sort(
    (a, b) => moment(b, 'DD/MM/YYYY').valueOf() - moment(a, 'DD/MM/YYYY').valueOf(),
  ),
)
const các_tên_danh_sách = computed(() => [
  ...new Set(
    các_bản_ghi.value
      .filter((bản) => !ngày_chọn.value || bản.ngày_dự_đoán === ngày_chọn.value)
      .flatMap((bản) => bản.các_danh_sách.map((danh_sách) => danh_sách.tên)),
  ),
])

// kết quả thật của kỳ ngay sau kỳ cơ sở nếu đã có trong dữ liệu (danh sách xếp mới nhất trước)
function lấy_kết_quả_kỳ_sau(bản: Dự_Đoán_Theo_Số_Lần_Đã_Lưu): string[] | undefined {
  const danh_sách = dữ_liệu_xổ_số[bản.loại_xổ_số === 55 ? 55 : 45]
  const vị_trí_cơ_sở = danh_sách.findIndex((kỳ) => kỳ.ngày_xổ_số === bản.ngày_cơ_sở)
  return vị_trí_cơ_sở > 0 ? danh_sách[vị_trí_cơ_sở - 1].kết_quả_xổ_số : undefined
}

// vé đang bấm chọn của từng danh sách (khóa là thời điểm lưu và tên danh sách), bấm lần nữa để bỏ chọn
const vé_đang_chọn = ref<Record<string, number | undefined>>({})
function chọn_vé(khóa: string, thứ_tự: number) {
  vé_đang_chọn.value[khóa] = vé_đang_chọn.value[khóa] === thứ_tự ? undefined : thứ_tự
}

type Ô_Lưới = { số: string; lần: number; trong_khoảng: boolean; số_vé_chứa: number; trúng: boolean }

// lưới 6 cột của một danh sách: ô nào có trong vé thì tô, ô ngoài khoảng số lần thì mờ.
// Danh sách chính tính lại từ dữ liệu (xếp tăng dần theo số lần như lúc tạo vé), danh sách phụ lấy từ bộ nhớ đệm
// và chỉ dùng khi bộ nhớ đệm còn khớp số kỳ.
function dựng_lưới(
  bản: Dự_Đoán_Theo_Số_Lần_Đã_Lưu,
  tên: string,
  vé: string[][],
  tập_kết_quả: Set<string>,
): Ô_Lưới[] | undefined {
  const loại = bản.loại_xổ_số === 55 ? 55 : 45
  const danh_sách_kỳ = dữ_liệu_xổ_số[loại]
  const vị_trí_kỳ = danh_sách_kỳ.findIndex((kỳ) => kỳ.ngày_xổ_số === bản.ngày_cơ_sở)
  if (vị_trí_kỳ < 0) return

  let số: string[] | undefined
  let số_lần: number[] | undefined
  if (tên === 'danh sách chính') {
    const danh_sách_chính = tính_danh_sách_chính_của_kỳ(loại, vị_trí_kỳ)
    if (!danh_sách_chính) return
    const đã_sắp_xếp = [...danh_sách_chính].sort((a, b) => a.tổng_xuất_hiện - b.tổng_xuất_hiện)
    số = đã_sắp_xếp.map((mục) => mục.số_xuất_hiện)
    số_lần = đã_sắp_xếp.map((mục) => mục.tổng_xuất_hiện)
  } else {
    const chỉ_số = /^danh sách phụ (\d+)$/.exec(tên)?.[1]
    const đã_tính = ds_dự_đoán_đã_tính.value[bản.loại_xổ_số]
    if (chỉ_số === undefined || !đã_tính || đã_tính.dự_đoán_ds_xuất_hiện.length !== danh_sách_kỳ.length) return
    số = đã_tính.dự_đoán_ds_xuất_hiện[vị_trí_kỳ]?.[Number(chỉ_số)]
    số_lần = đã_tính.số_lần_xuất_hiện_ds[vị_trí_kỳ]?.[Number(chỉ_số)]
  }
  if (!số || !số_lần) return

  const khoảng = /số lần (\d+)-(\d+)/.exec(bản.điều_kiện)
  const từ = Number(khoảng?.[1] ?? 1)
  const tới = Number(khoảng?.[2] ?? 6)
  const đếm_vé = new Map<string, number>()
  vé.forEach((một_vé) => một_vé.forEach((s) => đếm_vé.set(s, (đếm_vé.get(s) ?? 0) + 1)))
  return số.map((s, vị_trí) => ({
    số: s,
    lần: số_lần[vị_trí],
    trong_khoảng: số_lần[vị_trí] >= từ && số_lần[vị_trí] <= tới,
    số_vé_chứa: đếm_vé.get(s) ?? 0,
    trúng: tập_kết_quả.has(s),
  }))
}

const các_nhóm_hiển_thị = computed(() =>
  các_bản_ghi.value
    .filter((bản) => !ngày_chọn.value || bản.ngày_dự_đoán === ngày_chọn.value)
    .sort((a, b) => b.thời_điểm_tạo - a.thời_điểm_tạo)
    .map((bản) => {
      const kết_quả = lấy_kết_quả_kỳ_sau(bản)
      const tập_kết_quả = new Set(kết_quả ?? [])
      const các_danh_sách = bản.các_danh_sách
        .filter((danh_sách) => !danh_sách_chọn.value || danh_sách.tên === danh_sách_chọn.value)
        .map((danh_sách) => {
          const vé = danh_sách.vé.map((một_vé) => ({
            số: một_vé.map((số) => ({ số, trúng: tập_kết_quả.has(số) })),
            số_trúng: một_vé.filter((số) => tập_kết_quả.has(số)).length,
          }))
          return {
            tên: danh_sách.tên,
            lưới: dựng_lưới(bản, danh_sách.tên, danh_sách.vé, tập_kết_quả),
            vé,
            tổng_theo_mức: [3, 4, 5, 6].map((mức) => ({
              mức,
              số_vé: vé.filter((một_vé) => một_vé.số_trúng === mức).length,
            })),
          }
        })
      return { bản, kết_quả, các_danh_sách }
    })
    .filter((nhóm) => nhóm.các_danh_sách.length > 0),
)
</script>

<template>
  <div :style="{ padding: '12px' }">
    <h3>Dự đoán đã lưu</h3>
    <div>
      ngày dự đoán
      <select v-model="ngày_chọn">
        <option value="">tất cả</option>
        <option v-for="ngày in các_ngày" :key="ngày" :value="ngày">{{ ngày }}</option>
      </select>
      danh sách
      <select v-model="danh_sách_chọn">
        <option value="">tất cả</option>
        <option v-for="tên in các_tên_danh_sách" :key="tên" :value="tên">{{ tên }}</option>
      </select>
    </div>

    <div v-if="đang_tải">Đang tải...</div>
    <div v-else-if="các_nhóm_hiển_thị.length === 0">Không có dự đoán nào đã lưu khớp lựa chọn</div>

    <div v-for="nhóm in các_nhóm_hiển_thị" :key="nhóm.bản.thời_điểm_tạo" :style="{ marginTop: '16px' }">
      <b>
        {{ nhóm.bản.loại_xổ_số }} - dự đoán cho kỳ {{ nhóm.bản.ngày_dự_đoán }} (dữ liệu đến
        {{ nhóm.bản.ngày_cơ_sở }})
      </b>
      <div>{{ nhóm.bản.điều_kiện }}, lưu lúc {{ moment(nhóm.bản.thời_điểm_tạo).format('DD/MM/YYYY HH:mm') }}</div>
      <div v-if="nhóm.kết_quả">kết quả kỳ {{ nhóm.bản.ngày_dự_đoán }}: {{ nhóm.kết_quả.join(' ') }}</div>
      <div v-else>chưa có kết quả để đối chiếu</div>

      <div v-for="danh_sách in nhóm.các_danh_sách" :key="danh_sách.tên" :style="{ marginTop: '8px' }">
        <b>{{ danh_sách.tên }}</b> ({{ danh_sách.vé.length }} vé)
        <span v-if="nhóm.kết_quả">
          —
          <span v-for="mục in danh_sách.tổng_theo_mức" :key="mục.mức">
            trúng {{ mục.mức }}: {{ mục.số_vé }}{{ mục.mức < 6 ? ', ' : '' }}
          </span>
        </span>
        <div
          v-if="danh_sách.lưới"
          :style="{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2px',
            maxWidth: '360px',
            margin: '6px 0',
            fontFamily: 'monospace',
            fontSize: '12px',
          }"
        >
          <div
            v-for="(ô, vị_trí) in danh_sách.lưới"
            :key="vị_trí"
            :style="{
              textAlign: 'center',
              padding: '3px 0',
              borderRadius: '3px',
              opacity: ô.trong_khoảng ? 1 : 0.35,
              background: ô.số_vé_chứa > 0 ? `rgba(56, 189, 248, ${0.25 + Math.min(ô.số_vé_chứa, 20) / 30})` : 'transparent',
              border: ô.trúng ? '2px solid #dc2626' : '1px solid #555',
              outline:
                vé_đang_chọn[`${nhóm.bản.thời_điểm_tạo}|${danh_sách.tên}`] !== undefined &&
                danh_sách.vé[vé_đang_chọn[`${nhóm.bản.thời_điểm_tạo}|${danh_sách.tên}`]!].số.some(
                  (mục) => mục.số === ô.số,
                )
                  ? '3px solid #f59e0b'
                  : 'none',
            }"
            :title="`${ô.số_vé_chứa} vé chứa số này`"
          >
            {{ ô.số }}:{{ ô.lần }}
          </div>
        </div>
        <div :style="{ fontFamily: 'monospace', columnWidth: '17em', fontSize: '15px', lineHeight: 1.7 }">
          <div
            v-for="(một_vé, thứ_tự) in danh_sách.vé"
            :key="thứ_tự"
            :style="{
              cursor: 'pointer',
              background:
                vé_đang_chọn[`${nhóm.bản.thời_điểm_tạo}|${danh_sách.tên}`] === thứ_tự
                  ? 'rgba(245, 158, 11, 0.35)'
                  : 'transparent',
            }"
            @click="chọn_vé(`${nhóm.bản.thời_điểm_tạo}|${danh_sách.tên}`, thứ_tự)"
          >
            <span
              v-for="mục in một_vé.số"
              :key="mục.số"
              :style="{
                display: 'inline-block',
                width: '2.2em',
                textAlign: 'center',
                ...(mục.trúng ? { color: '#dc2626', fontWeight: 'bold' } : {}),
              }"
            >
              {{ mục.số }}
            </span>
            <span v-if="nhóm.kết_quả && một_vé.số_trúng >= 3">({{ một_vé.số_trúng }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
