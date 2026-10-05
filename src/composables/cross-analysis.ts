import type { Đối_Tượng_Xổ_Số } from '@/types/lote'

export type Dòng_Ghép_Chéo = {
  giả_thuyết: string
  số_phép_thử: number
  thực_tế: number
  kỳ_vọng_ngẫu_nhiên: number
  z: number
}

export type Kết_Quả_Ghép_Chéo = {
  loại_xổ_số: number
  số_bộ_ba_kỳ: number
  các_dòng: Dòng_Ghép_Chéo[]
}

type Bộ_Đếm = { phép_thử: number; thực_tế: number }

const SỐ_LƯỢNG_SỐ_MỖI_KỲ = 6

function tạo_dòng_nhị_thức(giả_thuyết: string, bộ_đếm: Bộ_Đếm, xác_suất: number): Dòng_Ghép_Chéo {
  const kỳ_vọng = bộ_đếm.phép_thử * xác_suất
  const độ_lệch = Math.sqrt(bộ_đếm.phép_thử * xác_suất * (1 - xác_suất))
  return {
    giả_thuyết,
    số_phép_thử: bộ_đếm.phép_thử,
    thực_tế: bộ_đếm.thực_tế,
    kỳ_vọng_ngẫu_nhiên: Number(kỳ_vọng.toFixed(2)),
    z: độ_lệch > 0 ? Number(((bộ_đếm.thực_tế - kỳ_vọng) / độ_lệch).toFixed(2)) : 0,
  }
}

/**
 * Với mỗi kỳ C (loại T), lấy kỳ A gần nhất cùng loại T và kỳ B gần nhất khác loại nằm giữa A và C
 * (lịch 45 và 55 xen kẽ nhau). Rồi kiểm tra các số của A, B hoặc A∩B có lặp lại ở C nhiều hơn
 * mức ngẫu nhiên (mỗi số có xác suất 6/T xuất hiện ở một kỳ loại T) hay không.
 *
 * Chỉ dùng kỳ cũ hơn C để dự đoán C nên không nhìn trước tương lai.
 */
export function phân_tích_ghép_chéo(
  danh_sách_45: Array<Đối_Tượng_Xổ_Số>,
  danh_sách_55: Array<Đối_Tượng_Xổ_Số>,
): Kết_Quả_Ghép_Chéo[] {
  const tất_cả_kỳ = [...danh_sách_45, ...danh_sách_55].sort(
    (a, b) => a.dấu_thời_gian_của_ngày - b.dấu_thời_gian_của_ngày,
  )

  const loại_xổ_số_cần_xét = [45, 55]
  const kỳ_gần_nhất = new Map<number, Đối_Tượng_Xổ_Số>()
  const bộ_đếm = new Map<number, Record<'A' | 'B' | 'AB', Bộ_Đếm> & { bộ_ba: number; trùng: number }>()
  loại_xổ_số_cần_xét.forEach((loại) =>
    bộ_đếm.set(loại, {
      A: { phép_thử: 0, thực_tế: 0 },
      B: { phép_thử: 0, thực_tế: 0 },
      AB: { phép_thử: 0, thực_tế: 0 },
      bộ_ba: 0,
      trùng: 0,
    }),
  )

  for (const kỳ_c of tất_cả_kỳ) {
    const loại_c = kỳ_c.loại_xổ_số
    const loại_b = loại_c === 45 ? 55 : 45
    const kỳ_a = kỳ_gần_nhất.get(loại_c)
    const kỳ_b = kỳ_gần_nhất.get(loại_b)

    // chỉ nhận khi B nằm giữa A và C, tránh trường hợp thiếu kỳ trong dữ liệu
    if (kỳ_a && kỳ_b && kỳ_b.dấu_thời_gian_của_ngày > kỳ_a.dấu_thời_gian_của_ngày) {
      const đếm = bộ_đếm.get(loại_c)!
      const số_của_c = new Set(kỳ_c.kết_quả_xổ_số)
      const số_của_a = new Set(kỳ_a.kết_quả_xổ_số)
      // số của B vượt quá phạm vi loại C thì không thể xuất hiện ở C nên không tính là phép thử
      const số_của_b = kỳ_b.kết_quả_xổ_số.filter((số) => Number(số) <= loại_c)
      const số_trùng_a_b = số_của_b.filter((số) => số_của_a.has(số))

      đếm.bộ_ba++
      đếm.trùng += số_trùng_a_b.length

      đếm.A.phép_thử += số_của_a.size
      đếm.A.thực_tế += kỳ_a.kết_quả_xổ_số.filter((số) => số_của_c.has(số)).length

      đếm.B.phép_thử += số_của_b.length
      đếm.B.thực_tế += số_của_b.filter((số) => số_của_c.has(số)).length

      đếm.AB.phép_thử += số_trùng_a_b.length
      đếm.AB.thực_tế += số_trùng_a_b.filter((số) => số_của_c.has(số)).length
    }

    kỳ_gần_nhất.set(loại_c, kỳ_c)
  }

  return loại_xổ_số_cần_xét.map((loại) => {
    const đếm = bộ_đếm.get(loại)!
    const xác_suất = SỐ_LƯỢNG_SỐ_MỖI_KỲ / loại
    // 2 kỳ khác loại: số n (≤45) có mặt ở cả hai với xác suất (6/45)(6/55), có 45 số như vậy => 36/55
    const kỳ_vọng_trùng = (đếm.bộ_ba * SỐ_LƯỢNG_SỐ_MỖI_KỲ * SỐ_LƯỢNG_SỐ_MỖI_KỲ) / 55

    return {
      loại_xổ_số: loại,
      số_bộ_ba_kỳ: đếm.bộ_ba,
      các_dòng: [
        {
          giả_thuyết: 'số trùng giữa A và B (tổng)',
          số_phép_thử: đếm.bộ_ba,
          thực_tế: đếm.trùng,
          kỳ_vọng_ngẫu_nhiên: Number(kỳ_vọng_trùng.toFixed(2)),
          z: kỳ_vọng_trùng > 0 ? Number(((đếm.trùng - kỳ_vọng_trùng) / Math.sqrt(kỳ_vọng_trùng)).toFixed(2)) : 0,
        },
        tạo_dòng_nhị_thức('số của A lặp lại ở C (đối chứng)', đếm.A, xác_suất),
        tạo_dòng_nhị_thức('số của B lặp lại ở C', đếm.B, xác_suất),
        tạo_dòng_nhị_thức('số trùng A∩B lặp lại ở C', đếm.AB, xác_suất),
      ],
    }
  })
}
