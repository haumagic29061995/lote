const SỐ_LƯỢNG_SỐ_MỖI_VÉ = 6
const GIÁ_VÉ = 10000
const KÍCH_THƯỚC_NHÓM_TỐI_ĐA = 20 // C(20,6) = 38760 vé ứng viên, vẫn tính nhanh

export type Bộ_Vé_Phủ = {
  loại_xổ_số: number
  nhóm_số: number[]
  mức_đảm_bảo: number
  vé: number[][]
  chi_phí: number
  // xác suất để ít nhất `mức_đảm_bảo` số trong 6 số trúng nằm trong nhóm số (lúc đó bộ vé chắc chắn có vé trúng ≥ mức này)
  xác_suất_đạt_đảm_bảo: number
  điểm_phổ_biến_trung_bình: number
  điểm_phổ_biến_vé_ngẫu_nhiên: number
}

function tổ_hợp_số(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let kết_quả = 1
  for (let i = 1; i <= k; i++) {
    kết_quả = (kết_quả * (n - k + i)) / i
  }
  return kết_quả
}

export function tạo_tổ_hợp<T>(mảng: T[], k: number): T[][] {
  const kết_quả: T[][] = []
  const hiện_tại: T[] = []
  const chọn = (bắt_đầu: number) => {
    if (hiện_tại.length === k) {
      kết_quả.push([...hiện_tại])
      return
    }
    for (let i = bắt_đầu; i <= mảng.length - (k - hiện_tại.length); i++) {
      hiện_tại.push(mảng[i])
      chọn(i + 1)
      hiện_tại.pop()
    }
  }
  chọn(0)
  return kết_quả
}

/**
 * Điểm "phổ biến" của một vé: càng cao càng nhiều người có khả năng chọn trùng
 * (jackpot sẽ bị chia nhỏ hơn nếu trúng). Chỉ là heuristic về hành vi người chơi, không ảnh hưởng xác suất trúng.
 * - số ≤ 31: người chơi hay chọn theo ngày sinh
 * - dãy 3 số liên tiếp trở lên, hoặc cấp số cộng: các mẫu "đẹp" hay bị chọn
 */
export function điểm_phổ_biến(vé: number[]): number {
  const đã_sắp_xếp = [...vé].sort((a, b) => a - b)
  let điểm = đã_sắp_xếp.filter((số) => số <= 31).length

  let dãy_dài_nhất = 1
  let dãy_hiện_tại = 1
  for (let i = 1; i < đã_sắp_xếp.length; i++) {
    dãy_hiện_tại = đã_sắp_xếp[i] === đã_sắp_xếp[i - 1] + 1 ? dãy_hiện_tại + 1 : 1
    dãy_dài_nhất = Math.max(dãy_dài_nhất, dãy_hiện_tại)
  }
  if (dãy_dài_nhất >= 3) điểm += 2

  const bước = đã_sắp_xếp[1] - đã_sắp_xếp[0]
  if (đã_sắp_xếp.every((số, i) => i === 0 || số - đã_sắp_xếp[i - 1] === bước)) điểm += 3

  return điểm
}

function điểm_phổ_biến_vé_ngẫu_nhiên_kỳ_vọng(tổng_số: number): number {
  // chỉ tính phần "số ≤ 31"; các mẫu đẹp hiếm với vé ngẫu nhiên nên bỏ qua
  return (SỐ_LƯỢNG_SỐ_MỖI_VÉ * Math.min(31, tổng_số)) / tổng_số
}

/**
 * Chọn ngẫu nhiên `kích_thước` số trong 1..tổng_số, ưu tiên số lớn (ít người chọn).
 * Lấy mẫu có trọng số không hoàn lại (Efraimidis-Spirakis).
 */
export function chọn_nhóm_số_ít_phổ_biến(tổng_số: number, kích_thước: number): number[] {
  const trọng_số = (số: number) => (số > 31 ? 3 : số > 12 ? 1.5 : 1)
  return Array.from({ length: tổng_số }, (_, i) => i + 1)
    .map((số) => ({ số, khóa: Math.random() ** (1 / trọng_số(số)) }))
    .sort((a, b) => b.khóa - a.khóa)
    .slice(0, kích_thước)
    .map((mục) => mục.số)
    .sort((a, b) => a - b)
}

/**
 * Tạo bộ vé phủ (covering design): với nhóm số cho trước, mọi tập `mức_đảm_bảo` số của nhóm đều
 * nằm trọn trong ít nhất một vé. Nên nếu ≥ mức_đảm_bảo số trúng thuộc nhóm số thì chắc chắn có vé
 * trúng ≥ mức_đảm_bảo số. Dùng thuật toán tham lam: mỗi bước chọn vé phủ thêm nhiều tập chưa phủ nhất,
 * hòa thì chọn vé ít phổ biến hơn.
 */
export function tạo_bộ_vé_phủ(
  loại_xổ_số: number,
  kích_thước_nhóm: number,
  mức_đảm_bảo: number,
  nhóm_số_cho_trước?: number[],
): Bộ_Vé_Phủ {
  const tổng_số = loại_xổ_số === 55 ? 55 : 45

  if (!Number.isInteger(kích_thước_nhóm) || kích_thước_nhóm < SỐ_LƯỢNG_SỐ_MỖI_VÉ + 1) {
    throw new Error(`Nhóm số phải có ít nhất ${SỐ_LƯỢNG_SỐ_MỖI_VÉ + 1} số`)
  }
  if (kích_thước_nhóm > KÍCH_THƯỚC_NHÓM_TỐI_ĐA) {
    throw new Error(`Nhóm số tối đa ${KÍCH_THƯỚC_NHÓM_TỐI_ĐA} số`)
  }
  if (!Number.isInteger(mức_đảm_bảo) || mức_đảm_bảo < 2 || mức_đảm_bảo >= SỐ_LƯỢNG_SỐ_MỖI_VÉ) {
    throw new Error(`Mức đảm bảo phải từ 2 đến ${SỐ_LƯỢNG_SỐ_MỖI_VÉ - 1}`)
  }

  const nhóm_số = nhóm_số_cho_trước ?? chọn_nhóm_số_ít_phổ_biến(tổng_số, kích_thước_nhóm)

  // mỗi tập con của nhóm số được mã hóa thành bitmask theo vị trí trong nhóm
  const mã_hóa = (vị_trí: number[]) => vị_trí.reduce((mask, vt) => mask | (1 << vt), 0)
  const chỉ_số_nhóm = Array.from({ length: kích_thước_nhóm }, (_, i) => i)
  const mã_tập_con = new Map<number, number>()
  tạo_tổ_hợp(chỉ_số_nhóm, mức_đảm_bảo).forEach((tập, id) => mã_tập_con.set(mã_hóa(tập), id))

  const ứng_viên = tạo_tổ_hợp(chỉ_số_nhóm, SỐ_LƯỢNG_SỐ_MỖI_VÉ).map((vé_vị_trí) => ({
    vé: vé_vị_trí.map((vt) => nhóm_số[vt]),
    phủ: tạo_tổ_hợp(vé_vị_trí, mức_đảm_bảo).map((tập) => mã_tập_con.get(mã_hóa(tập))!),
  }))
  const điểm_ứng_viên = ứng_viên.map((ứng) => điểm_phổ_biến(ứng.vé))

  const đã_phủ = new Uint8Array(mã_tập_con.size)
  let còn_lại = mã_tập_con.size
  const vé_đã_chọn: number[][] = []

  while (còn_lại > 0) {
    let tốt_nhất = -1
    let phủ_nhiều_nhất = -1
    for (let i = 0; i < ứng_viên.length; i++) {
      let phủ_mới = 0
      for (const id of ứng_viên[i].phủ) if (!đã_phủ[id]) phủ_mới++
      if (
        phủ_mới > phủ_nhiều_nhất ||
        (phủ_mới === phủ_nhiều_nhất && điểm_ứng_viên[i] < điểm_ứng_viên[tốt_nhất])
      ) {
        tốt_nhất = i
        phủ_nhiều_nhất = phủ_mới
      }
    }
    for (const id of ứng_viên[tốt_nhất].phủ) {
      if (!đã_phủ[id]) {
        đã_phủ[id] = 1
        còn_lại--
      }
    }
    vé_đã_chọn.push(ứng_viên[tốt_nhất].vé)
  }

  // P(X ≥ mức_đảm_bảo), X = số trong 6 số trúng thuộc nhóm số (siêu bội)
  let xác_suất = 0
  const tất_cả = tổ_hợp_số(tổng_số, SỐ_LƯỢNG_SỐ_MỖI_VÉ)
  for (let x = mức_đảm_bảo; x <= SỐ_LƯỢNG_SỐ_MỖI_VÉ; x++) {
    xác_suất +=
      (tổ_hợp_số(kích_thước_nhóm, x) *
        tổ_hợp_số(tổng_số - kích_thước_nhóm, SỐ_LƯỢNG_SỐ_MỖI_VÉ - x)) /
      tất_cả
  }

  return {
    loại_xổ_số,
    nhóm_số,
    mức_đảm_bảo,
    vé: vé_đã_chọn.map((vé) => [...vé].sort((a, b) => a - b)),
    chi_phí: vé_đã_chọn.length * GIÁ_VÉ,
    xác_suất_đạt_đảm_bảo: xác_suất,
    điểm_phổ_biến_trung_bình: Number(
      (vé_đã_chọn.reduce((tổng, vé) => tổng + điểm_phổ_biến(vé), 0) / vé_đã_chọn.length).toFixed(2),
    ),
    điểm_phổ_biến_vé_ngẫu_nhiên: Number(điểm_phổ_biến_vé_ngẫu_nhiên_kỳ_vọng(tổng_số).toFixed(2)),
  }
}
