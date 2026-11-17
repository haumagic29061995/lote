export type Mức_Trúng = 'trúng_3' | 'trúng_4' | 'trúng_5' | 'jackpot_2' | 'jackpot_1'

export const CÁC_MỨC_TRÚNG: Mức_Trúng[] = ['trúng_3', 'trúng_4', 'trúng_5', 'jackpot_2', 'jackpot_1']

// Giá vé và giá trị giải (VND). Jackpot dùng mức tối thiểu công bố, thực tế có thể cao hơn.
export const GIÁ_VÉ = 10000
// phí mua vé 3% và thuế 10% phần giải vượt 10 triệu (40 triệu thì nộp 3 triệu)
export const PHÍ_MUA_VÉ = 0.03
export const GIÁ_VÉ_THỰC_TẾ = GIÁ_VÉ * (1 + PHÍ_MUA_VÉ)
const NGƯỠNG_THUẾ = 10_000_000
export function tiền_thực_nhận(giải: number): number {
  return giải > NGƯỠNG_THUẾ ? giải - 0.1 * (giải - NGƯỠNG_THUẾ) : giải
}

export const GIẢI_THƯỞNG: Record<number, Record<Mức_Trúng, number>> = {
  45: {
    trúng_3: 30_000,
    trúng_4: 300_000,
    trúng_5: 10_000_000,
    jackpot_2: 0, // 6/45 không có jackpot 2
    jackpot_1: 12_000_000_000,
  },
  55: {
    trúng_3: 50_000,
    trúng_4: 500_000,
    trúng_5: 40_000_000,
    jackpot_2: 3_000_000_000,
    jackpot_1: 30_000_000_000,
  },
}

function tổ_hợp(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let kết_quả = 1
  for (let i = 1; i <= k; i++) {
    kết_quả = (kết_quả * (n - k + i)) / i
  }
  return kết_quả
}

// Xác suất ngẫu nhiên của 1 vé 6 số (trong 1..tổng_số) ở mỗi mức trúng
export function xác_suất_ngẫu_nhiên(tổng_số: number, có_jackpot_2: boolean): Record<Mức_Trúng, number> {
  const tất_cả = tổ_hợp(tổng_số, 6)
  const đúng_k = (k: number) => (tổ_hợp(6, k) * tổ_hợp(tổng_số - 6, 6 - k)) / tất_cả
  const jackpot_2 = có_jackpot_2 ? 6 / tất_cả : 0
  return {
    trúng_3: đúng_k(3),
    trúng_4: đúng_k(4),
    trúng_5: đúng_k(5) - jackpot_2, // 5 số thường, không tính trường hợp 5 + số phụ
    jackpot_2,
    jackpot_1: đúng_k(6),
  }
}
