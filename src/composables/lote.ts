import moment from 'moment'

import csv_dữ_liệu_55 from '@/assets/csv/lote55.csv?raw'
import csv_dữ_liệu_45 from '@/assets/csv/lote45.csv?raw'

import { Đối_Tượng_Xổ_Số } from '@/types/lote'

import { lấy_dấu_thời_gian_của_các_kỳ_tiếp_theo } from '@/utils'

export function lấy_dữ_liệu_xổ_số_45(): Array<Đối_Tượng_Xổ_Số> {
  const loại_xổ_số = 45
  const nhiều_dòng = csv_dữ_liệu_45.split('\n').map((dòng) =>
    dòng
      .split('\t')
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
  const nhiều_dòng = csv_dữ_liệu_55.split('\n').map((dòng) =>
    dòng
      .split(/\t| \|/)
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

export const tạo_ds_xuất_hiện = (
  danh_sách_dữ_liệu: Array<Đối_Tượng_Xổ_Số>,
  danh_sách_dữ_liệu_khác: Array<Đối_Tượng_Xổ_Số>,
  đối_tượng: Đối_Tượng_Xổ_Số,
  vị_trí: number,
  bao_nhiêu_xuất_hiện: number = 46,
): string[][] => {
  const kết_quả_xuất_hiện: string[][] = []

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
      const kết_quả = [...thứ_tự_xuất_hiện]
        .sort((a, b) => tổng_xuất_hiện[a] - tổng_xuất_hiện[b])
        .map((số) => nhãn_theo_số[số])
      kết_quả_xuất_hiện.push(kết_quả)
    }

    danh_sách_đã_thêm.forEach((số) => tổng_xuất_hiện[số]--)
    thứ_tự_xuất_hiện.length = độ_dài_trước_khi_thêm
  }
  return kết_quả_xuất_hiện
}
