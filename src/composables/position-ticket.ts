import { tạo_bộ_sinh_ngẫu_nhiên } from '@/composables/ticket-portfolio'

const SỐ_VỊ_TRÍ_MỖI_VÉ = 6
const SỐ_VỊ_TRÍ_MỖI_HÀNG = 6
const SỐ_VỊ_TRÍ_TỐI_ĐA_MỖI_HÀNG_TRONG_VÉ = 3
// seed cố định: cùng (số_vị_trí, số_vé) thì luôn ra đúng cùng một bộ vị trí, đó là "công thức không đổi"
const SEED_CÔNG_THỨC = 20261008

/**
 * Vé hợp lệ khi: có ít nhất 1 cột chứa từ 2 vị trí trở lên, và mỗi hàng chứa tối đa 3 vị trí.
 * Cột của vị trí v là v % 6, hàng là floor(v / 6) (danh sách xếp theo hàng, mỗi hàng 6 số).
 */
export function thỏa_điều_kiện_vị_trí(ds_vị_trí: number[]): boolean {
  const đếm_cột = new Map<number, number>()
  const đếm_hàng = new Map<number, number>()
  ds_vị_trí.forEach((vị_trí) => {
    const cột = vị_trí % SỐ_VỊ_TRÍ_MỖI_HÀNG
    const hàng = Math.floor(vị_trí / SỐ_VỊ_TRÍ_MỖI_HÀNG)
    đếm_cột.set(cột, (đếm_cột.get(cột) ?? 0) + 1)
    đếm_hàng.set(hàng, (đếm_hàng.get(hàng) ?? 0) + 1)
  })
  return (
    [...đếm_cột.values()].some((số) => số >= 2) &&
    [...đếm_hàng.values()].every((số) => số <= SỐ_VỊ_TRÍ_TỐI_ĐA_MỖI_HÀNG_TRONG_VÉ)
  )
}

// 15 cách chọn 4 trong 6 chỉ số, dùng để bảo đảm không 2 vé nào chung ≥4 vị trí
const CÁC_TẬP_4_TRONG_6: number[][] = (() => {
  const kết_quả: number[][] = []
  for (let a = 0; a < 6; a++)
    for (let b = a + 1; b < 6; b++)
      for (let c = b + 1; c < 6; c++) for (let d = c + 1; d < 6; d++) kết_quả.push([a, b, c, d])
  return kết_quả
})()

const bộ_nhớ_đệm = new Map<string, number[][]>()

/**
 * Tạo `số_vé` bộ 6 vị trí trong 0..số_vị_trí-1 thỏa điều kiện cột/hàng và đôi một chung nhau tối đa 3 vị trí.
 * Chung tối đa 3 vị trí nghĩa là chung tối đa 3 số với mọi danh sách, nên các biến cố "vé trúng ≥5 số" loại
 * trừ nhau và xác suất có vé trúng ≥5 đạt mức tối đa. Kết quả chỉ phụ thuộc (số_vị_trí, số_vé), không đổi giữa các lần.
 */
export function tạo_bộ_vị_trí_cố_định(số_vị_trí: number, số_vé: number): number[][] {
  const khóa_đệm = `${số_vị_trí}-${số_vé}`
  const đã_có = bộ_nhớ_đệm.get(khóa_đệm)
  if (đã_có) return đã_có

  const ngẫu_nhiên = tạo_bộ_sinh_ngẫu_nhiên(SEED_CÔNG_THỨC)
  const bộ_vị_trí: number[][] = []
  const đã_dùng = new Set<number>()
  const số_lần_thử_tối_đa = số_vé * 3000
  const nguồn = Array.from({ length: số_vị_trí }, (_, i) => i)

  for (let lần_thử = 0; lần_thử < số_lần_thử_tối_đa && bộ_vị_trí.length < số_vé; lần_thử++) {
    // chọn ngẫu nhiên 6 vị trí không lặp (Fisher-Yates từng phần)
    for (let i = 0; i < SỐ_VỊ_TRÍ_MỖI_VÉ; i++) {
      const j = i + Math.floor(ngẫu_nhiên() * (số_vị_trí - i))
      ;[nguồn[i], nguồn[j]] = [nguồn[j], nguồn[i]]
    }
    const vé = nguồn.slice(0, SỐ_VỊ_TRÍ_MỖI_VÉ).sort((a, b) => a - b)
    if (!thỏa_điều_kiện_vị_trí(vé)) continue

    const các_khóa = CÁC_TẬP_4_TRONG_6.map(
      (tập) => ((vé[tập[0]] * 64 + vé[tập[1]]) * 64 + vé[tập[2]]) * 64 + vé[tập[3]],
    )
    if (các_khóa.some((khóa) => đã_dùng.has(khóa))) continue
    các_khóa.forEach((khóa) => đã_dùng.add(khóa))
    bộ_vị_trí.push(vé)
  }

  bộ_nhớ_đệm.set(khóa_đệm, bộ_vị_trí)
  return bộ_vị_trí
}

// Áp bộ vị trí cố định lên một danh sách xuất hiện cụ thể để ra các vé (mỗi vé là 6 số)
export function tạo_vé_từ_danh_sách(danh_sách: string[], bộ_vị_trí: number[][]): string[][] {
  return bộ_vị_trí.map((ds_vị_trí) => ds_vị_trí.map((vị_trí) => danh_sách[vị_trí]).sort())
}
