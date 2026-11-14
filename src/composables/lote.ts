import moment from 'moment'

import { LINK_CSV_LOTE_45, LINK_CSV_LOTE_55 } from '@/constants/lote'
import { tải_csv_từ_link } from '@/composables/data-source'
import { Đối_Tượng_Xổ_Số, type Loại_Dữ_Liệu_Xuât_Hiện } from '@/types/lote'

import { lấy_dấu_thời_gian_của_các_kỳ_tiếp_theo } from '@/utils'

// nội dung CSV đang dùng, được thay bằng dữ liệu Google Sheet khi nạp thành công
let csv_45_hiện_tại: string = ''
let csv_55_hiện_tại: string = ''

/**
 * Tải dữ liệu mới nhất từ Google Sheet, gọi một lần trước khi app khởi động.
 * Không còn file CSV dự phòng: lỗi (mất mạng, link sai, dữ liệu không hợp lệ) thì ném Error để nơi gọi báo cho người dùng.
 */
export async function nạp_dữ_liệu_từ_google_sheet(): Promise<void> {
  const nguồn = [
    { tên: '45', link: LINK_CSV_LOTE_45, tổng_số: 45, đặt: (csv: string) => (csv_45_hiện_tại = csv) },
    { tên: '55', link: LINK_CSV_LOTE_55, tổng_số: 55, đặt: (csv: string) => (csv_55_hiện_tại = csv) },
  ]

  await Promise.all(
    nguồn.map(async ({ tên, link, tổng_số, đặt }) => {
      try {
        const dữ_liệu = await tải_csv_từ_link(link, tổng_số)
        đặt(dữ_liệu.csv)
        console.log(
          `dữ liệu ${tên}: Google Sheet, ${dữ_liệu.số_kỳ} kỳ, mới nhất ${dữ_liệu.ngày_mới_nhất}`,
        )
        dữ_liệu.cảnh_báo.forEach((cảnh_báo) => console.warn(`dữ liệu ${tên}: ${cảnh_báo}`))
      } catch (lỗi) {
        throw new Error(`không tải được dữ liệu ${tên} từ Google Sheet: ${(lỗi as Error).message}`)
      }
    }),
  )
}

export function lấy_dữ_liệu_xổ_số_45(): Array<Đối_Tượng_Xổ_Số> {
  const loại_xổ_số = 45
  const nhiều_dòng = csv_45_hiện_tại.split('\n').map((dòng) =>
    dòng
      .split(/\t|,/)
      .map((mục) => mục.trim())
      .filter((mục) => mục !== ''),
  )
  const dữ_liệu: Array<Đối_Tượng_Xổ_Số> = []
  for (let i = 0; i < nhiều_dòng.length / 2; i++) {
    const danh_sách_1: Array<string> = nhiều_dòng[2 * i]
    const danh_sách_2: Array<string> = nhiều_dòng[2 * i + 1]
    const [ngày_xổ_số, kỳ_xổ_số] = danh_sách_1
    const kết_quả_xổ_số: string[] = danh_sách_2[0].match(/.{2}/g) || []
    const ngày_xổ_số_việt_nam = moment(ngày_xổ_số, 'DD/MM/YYYY')
    const tuần_xổ_số = ngày_xổ_số_việt_nam.format('dddd')
    const số_jacpot_2: string = ''
    const giá_trị_ngày = ngày_xổ_số_việt_nam.day().toString()
    const giá_trị_tháng = (ngày_xổ_số_việt_nam.month() + 1).toString()
    const giá_trị_năm = ngày_xổ_số_việt_nam.year().toString()
    const dấu_thời_gian_của_ngày = moment(ngày_xổ_số_việt_nam, 'DD/MM/YYYY').valueOf()

    const dữ_liệu_kỳ_sau_đó: Đối_Tượng_Xổ_Số | undefined = dữ_liệu[dữ_liệu.length - 1]
    const vị_trí_dữ_liệu: number = dữ_liệu.length
    const dấu_thời_gian_kỳ_sau_đó: number[] = lấy_dấu_thời_gian_của_các_kỳ_tiếp_theo(
      dấu_thời_gian_của_ngày,
      loại_xổ_số,
    )

    // construction
    const đối_tượng = new Đối_Tượng_Xổ_Số({
      loại_xổ_số,
      vị_trí_dữ_liệu,
      ngày_xổ_số,
      kết_quả_xổ_số,
      số_jacpot_2,
      kỳ_xổ_số,
      tuần_xổ_số,
      giá_trị_ngày,
      giá_trị_tháng,
      giá_trị_năm,
      dấu_thời_gian_của_ngày,
      dấu_thời_gian_kỳ_sau_đó,
      dữ_liệu_kỳ_sau_đó,
    })
    dữ_liệu.push(đối_tượng)
  }
  return dữ_liệu
}

export function lấy_dữ_liệu_xổ_số_55(): Array<Đối_Tượng_Xổ_Số> {
  const loại_xổ_số = 55
  const nhiều_dòng = csv_55_hiện_tại.split('\n').map((dòng) =>
    dòng
      .split(/\t|,| \|/)
      .map((mục) => mục.trim())
      .filter((mục) => mục !== ''),
  )

  const dữ_liệu: Array<Đối_Tượng_Xổ_Số> = []

  for (let i = 0; i < nhiều_dòng.length / 2; i++) {
    const danh_sách_1: Array<string> = nhiều_dòng[2 * i]
    const danh_sách_2: Array<string> = nhiều_dòng[2 * i + 1]
    const [ngày_xổ_số, kỳ_xổ_số] = danh_sách_1
    const [ket_qua, số_jacpot_2] = danh_sách_2
    const kết_quả_xổ_số: string[] = ket_qua.match(/.{2}/g) || []
    const ngày_xổ_số_việt_nam = moment(ngày_xổ_số, 'DD/MM/YYYY')
    const tuần_xổ_số = ngày_xổ_số_việt_nam.format('dddd')
    const giá_trị_ngày = ngày_xổ_số_việt_nam.day().toString()
    const giá_trị_tháng = (ngày_xổ_số_việt_nam.month() + 1).toString()
    const giá_trị_năm = ngày_xổ_số_việt_nam.year().toString()
    const dấu_thời_gian_của_ngày = moment(ngày_xổ_số_việt_nam, 'DD/MM/YYYY').valueOf()

    const dữ_liệu_kỳ_sau_đó: Đối_Tượng_Xổ_Số | undefined = dữ_liệu[dữ_liệu.length - 1]
    const dấu_thời_gian_kỳ_sau_đó: number[] = lấy_dấu_thời_gian_của_các_kỳ_tiếp_theo(
      dấu_thời_gian_của_ngày,
      loại_xổ_số,
    )
    const vị_trí_dữ_liệu: number = dữ_liệu.length

    // construction
    const đối_tượng = new Đối_Tượng_Xổ_Số({
      loại_xổ_số,
      vị_trí_dữ_liệu,
      ngày_xổ_số,
      kết_quả_xổ_số,
      kỳ_xổ_số,
      số_jacpot_2,
      tuần_xổ_số,
      giá_trị_ngày,
      giá_trị_tháng,
      giá_trị_năm,
      dấu_thời_gian_của_ngày,
      dấu_thời_gian_kỳ_sau_đó,
      dữ_liệu_kỳ_sau_đó,
    })
    dữ_liệu.push(đối_tượng)
  }
  return dữ_liệu
}

// Bộ nhớ đệm: kết quả của từng kỳ dưới dạng số, để không phải Number() lặp lại hàng triệu lần
const bộ_nhớ_đệm_số_theo_kỳ = new WeakMap<Array<Đối_Tượng_Xổ_Số>, number[][]>()
const nhãn_theo_số: string[] = []

function lấy_số_theo_kỳ(danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>): number[][] {
  let số_theo_kỳ = bộ_nhớ_đệm_số_theo_kỳ.get(danh_sách_dữ_liệu)
  if (!số_theo_kỳ) {
    số_theo_kỳ = danh_sách_dữ_liệu.map((dữ_liệu) =>
      dữ_liệu.kết_quả_xổ_số.map((số) => {
        const giá_trị = Number(số)
        nhãn_theo_số[giá_trị] = số
        return giá_trị
      }),
    )
    bộ_nhớ_đệm_số_theo_kỳ.set(danh_sách_dữ_liệu, số_theo_kỳ)
  }
  return số_theo_kỳ
}

export type Ds_Xuất_Hiện_Kèm_Số_Lần = {
  danh_sách: string[][]
  // số_lần[a][b] là số lần xuất hiện của số danh_sách[a][b]
  số_lần: number[][]
}

export const tạo_ds_xuất_hiện_kèm_số_lần = (
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  danh_sách_dữ_liệu_khác: Array<Đối_Tượng_Xổ_Số>,
  đối_tượng: Đối_Tượng_Xổ_Số,
  vị_trí: number,
  bao_nhiêu_xuất_hiện: number = 46,
): Ds_Xuất_Hiện_Kèm_Số_Lần => {
  const kết_quả_xuất_hiện: string[][] = []
  const số_lần_xuất_hiện: number[][] = []

  const số_theo_kỳ = lấy_số_theo_kỳ(danh_sách_dữ_liệu)
  const số_theo_kỳ_khác = lấy_số_theo_kỳ(danh_sách_dữ_liệu_khác)

  // phần chính không đổi theo i nên tính một lần; phần phụ cộng vào rồi trừ ra sau mỗi vòng
  const tổng_xuất_hiện = new Uint16Array(128)
  const thứ_tự_xuất_hiện: number[] = []
  const thêm_số = (số: number) => {
    if (tổng_xuất_hiện[số]++ === 0) thứ_tự_xuất_hiện.push(số)
  }

  đối_tượng.kết_quả_xổ_số.forEach((số) => {
    số_theo_kỳ[vị_trí + Number(số)]?.forEach(thêm_số)
  })

  const danh_sách_đã_thêm: number[] = []
  for (let i = vị_trí; i < danh_sách_dữ_liệu.length; i++) {
    const độ_dài_trước_khi_thêm = thứ_tự_xuất_hiện.length
    danh_sách_đã_thêm.length = 0

    số_theo_kỳ_khác[i]?.forEach((số_phụ) => {
      số_theo_kỳ[vị_trí + số_phụ]?.forEach((số) => {
        thêm_số(số)
        danh_sách_đã_thêm.push(số)
      })
    })

    if (thứ_tự_xuất_hiện.length === bao_nhiêu_xuất_hiện) {
      // sort ổn định: số bằng tổng giữ nguyên thứ tự xuất hiện lần đầu
      const đã_sắp_xếp = [...thứ_tự_xuất_hiện].sort((a, b) => tổng_xuất_hiện[a] - tổng_xuất_hiện[b])
      kết_quả_xuất_hiện.push(đã_sắp_xếp.map((số) => nhãn_theo_số[số]))
      số_lần_xuất_hiện.push(đã_sắp_xếp.map((số) => tổng_xuất_hiện[số]))
    }

    danh_sách_đã_thêm.forEach((số) => tổng_xuất_hiện[số]--)
    thứ_tự_xuất_hiện.length = độ_dài_trước_khi_thêm
  }
  return { danh_sách: kết_quả_xuất_hiện, số_lần: số_lần_xuất_hiện }
}

// chỉ lấy các danh sách, không cần số lần xuất hiện
export const tạo_ds_xuất_hiện = (
  ...tham_số: Parameters<typeof tạo_ds_xuất_hiện_kèm_số_lần>
): string[][] => tạo_ds_xuất_hiện_kèm_số_lần(...tham_số).danh_sách

// danh sách chính của một kỳ: các số xuất hiện ở những kỳ nằm cách kỳ này đúng bằng giá trị từng số (cả kỳ của loại kia liền kề)
export function xữ_lý_dữ_liệu_xuất_hiện(
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  dữ_liệu_1: Đối_Tượng_Xổ_Số,
  dữ_liệu_2: Đối_Tượng_Xổ_Số | undefined,
  vị_trí_dữ_liệu: number,
) {
  // xữ lý dữ liệu 1
  dữ_liệu_1.kết_quả_xổ_số.forEach((số: string) => {
    const vị_trí_từ_số_và_vị_trí_dữ_liệu: number = Number(số) + vị_trí_dữ_liệu
    const dữ_liệu_từ_vị_trí_mới: Đối_Tượng_Xổ_Số = danh_sách_dữ_liệu[vị_trí_từ_số_và_vị_trí_dữ_liệu]
    if (dữ_liệu_từ_vị_trí_mới) {
      dữ_liệu_1.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số)
      dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số.forEach((số2: string) => {
        dữ_liệu_1.tập_các_số_đã_xuất_hiện.add(số2)
        const dữ_liệu_tìm_thấy = dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(
          (mục) => mục.số_xuất_hiện === số2,
        )
        if (dữ_liệu_tìm_thấy) {
          dữ_liệu_tìm_thấy.tổng_xuất_hiện++
        } else {
          const dữ_liệu_xuất_hiện: Loại_Dữ_Liệu_Xuât_Hiện = {
            số_xuất_hiện: số2,
            tổng_xuất_hiện: 1,
            là_số_kết_quả: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.includes(số2) || false,
            là_số_jackpot_2: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.số_jacpot_2 === số2,
            là_số_trùng: dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(số2),
          }
          dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(dữ_liệu_xuất_hiện)
        }
      })
    }
  })

  // xữ lý dữ liệu 2
  if (dữ_liệu_2) {
    dữ_liệu_2.kết_quả_xổ_số
      .filter((số0) => !dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(số0))
      .forEach((số1: string) => {
        const vị_trí_từ_số_và_vị_trí_dữ_liệu: number = Number(số1) + vị_trí_dữ_liệu
        const dữ_liệu_từ_vị_trí_mới: Đối_Tượng_Xổ_Số =
          danh_sách_dữ_liệu[vị_trí_từ_số_và_vị_trí_dữ_liệu]
        if (dữ_liệu_từ_vị_trí_mới) {
          dữ_liệu_1.danh_sách_các_kết_quả_xổ_số_đã_xuất_hiện.push(
            dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số,
          )
          dữ_liệu_từ_vị_trí_mới.kết_quả_xổ_số.forEach((số2: string) => {
            dữ_liệu_1.tập_các_số_đã_xuất_hiện.add(số2)
            const dữ_liệu_tìm_thấy = dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.find(
              (mục) => mục.số_xuất_hiện === số2,
            )
            if (dữ_liệu_tìm_thấy) {
              dữ_liệu_tìm_thấy.tổng_xuất_hiện++
            } else {
              const dữ_liệu_xuất_hiện: Loại_Dữ_Liệu_Xuât_Hiện = {
                số_xuất_hiện: số2,
                tổng_xuất_hiện: 1,
                là_số_kết_quả: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.includes(số2) || false,
                là_số_jackpot_2: dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.số_jacpot_2 === số2,
                là_số_trùng: dữ_liệu_1.các_số_trùng_giữa_2_kết_quả_45_và_55_gần_nhau.includes(số2),
              }
              dữ_liệu_1.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện.push(dữ_liệu_xuất_hiện)
            }
          })
        }
      })
  }

  // Số kết quả
  dữ_liệu_1.số_kết_quả_trong_các_số_đã_xuất_hiện =
    dữ_liệu_1.dữ_liệu_kỳ_sau_đó?.kết_quả_xổ_số.filter((num) =>
      dữ_liệu_1.tập_các_số_đã_xuất_hiện.has(num),
    ).length || 0
}


// tính danh sách chính của kỳ ở `vị_trí_kỳ` trong dữ liệu vừa nạp, giống cách trang chính tính;
// dùng cho trang chỉ cần xem lại một kỳ mà không chạy lại toàn bộ
export function tính_danh_sách_chính_của_kỳ(
  loại_xổ_số: 45 | 55,
  vị_trí_kỳ: number,
): Loại_Dữ_Liệu_Xuât_Hiện[] | undefined {
  const dữ_liệu_45 = lấy_dữ_liệu_xổ_số_45()
  const dữ_liệu_55 = lấy_dữ_liệu_xổ_số_55()
  // loại nào quay kế tiếp thì không cần bù trừ vị trí, loại còn lại lệch 1 kỳ
  const loại_quay_tiếp = moment(dữ_liệu_45[0].ngày_xổ_số, 'DD/MM/YYYY') > moment(dữ_liệu_55[0].ngày_xổ_số, 'DD/MM/YYYY') ? 55 : 45
  const bù_trừ = loại_quay_tiếp === loại_xổ_số ? 0 : -1
  const danh_sách = loại_xổ_số === 45 ? dữ_liệu_45 : dữ_liệu_55
  const danh_sách_khác = loại_xổ_số === 45 ? dữ_liệu_55 : dữ_liệu_45
  const dữ_liệu = danh_sách[vị_trí_kỳ]
  if (!dữ_liệu) return undefined
  xữ_lý_dữ_liệu_xuất_hiện(danh_sách, dữ_liệu, danh_sách_khác[vị_trí_kỳ + bù_trừ], vị_trí_kỳ)
  return dữ_liệu.danh_sách_nguyên_mẫu_dữ_liệu_đã_xuất_hiện
}
