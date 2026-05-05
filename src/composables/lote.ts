import moment from 'moment'

import csv_dữ_liệu_55 from '@/assets/csv/lote55.csv?raw'
import csv_dữ_liệu_45 from '@/assets/csv/lote45.csv?raw'

import { Đối_Tượng_Xổ_Số } from '@/types/lote'

import { lấy_dấu_thời_gian_của_kỳ_sau } from '@/utils'

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
    const dấu_thời_gian_kỳ_sau_đó: number = lấy_dấu_thời_gian_của_kỳ_sau(
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
    const dấu_thời_gian_kỳ_sau_đó: number = lấy_dấu_thời_gian_của_kỳ_sau(
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
