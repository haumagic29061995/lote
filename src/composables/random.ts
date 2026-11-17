// đổi một chuỗi (ví dụ "55|15/10/2026") thành seed số nguyên 32 bit, cùng chuỗi thì cùng seed
export function tạo_seed_từ_chuỗi(chuỗi: string): number {
  let băm = 5381
  for (let i = 0; i < chuỗi.length; i++) {
    băm = ((băm << 5) + băm + chuỗi.charCodeAt(i)) | 0
  }
  return băm >>> 0
}

// bộ sinh số ngẫu nhiên có seed, để kết quả lặp lại được
export function tạo_bộ_sinh_ngẫu_nhiên(seed: number): () => number {
  let trạng_thái = seed >>> 0
  return () => {
    trạng_thái = (trạng_thái + 0x6d2b79f5) >>> 0
    let t = trạng_thái
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
