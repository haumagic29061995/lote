// Nguồn dữ liệu kết quả xổ số: Google Sheet xuất bản dạng CSV (Publish to web, tự xuất bản lại khi sửa sheet).
// Không có dữ liệu dự phòng: nếu không tải được thì app báo lỗi và cho tải lại.
export const LINK_CSV_LOTE_45 =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuQHHFRzAmMC_tHRnu8cCrr1k2eofH6e3cyk2_YqFfNmREGfR6cSyuIQJnr7OulqrBHF9wMueqpCsY/pub?gid=1819524273&single=true&output=csv'

export const LINK_CSV_LOTE_55 =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvXzBIgByEQchrAuLnQJsBrzcm1V64WMbQvDURph3nk7eMz13T26APw3jo466Ijt4m9Gg4q6zgT3bx/pub?gid=974883964&single=true&output=csv'

// Kết quả XSMN (Tỉnh | Ngày | 18 số) do Apps Script ghi vào Google Sheet, mỗi năm 1 tab.
// Đã Publish to web "Entire document" nên tab mới tự được xuất bản, không cần xuất bản lại.
// Năm mới: tạo tab, lấy gid ở thanh địa chỉ (sau #gid=) rồi thêm 1 dòng, ví dụ:
//   2027: 'https://docs.google.com/spreadsheets/d/e/<KEY>/pub?gid=<GID_2027>&single=true&output=csv',
// Luôn phải có gid: link không có gid chỉ trả về tab đầu tiên trong sheet (không phải năm nào cũng có dữ liệu).
const KHÓA_XUẤT_BẢN_XSMN =
  '2PACX-1vSKJmxPPwbuVU8u8sGZp-Q7Mt5LX5yprCZIaT8LGom1NyuWIm5j2NjOnr6KZbj-9nRQKAPcDFkTeR8a'
const link_xsmn = (gid: string) =>
  `https://docs.google.com/spreadsheets/d/e/${KHÓA_XUẤT_BẢN_XSMN}/pub?gid=${gid}&single=true&output=csv`

export const LINK_CSV_XSMN_THEO_NĂM: Record<string, string> = {
  '2024': link_xsmn('2083267115'),
  '2025': link_xsmn('1905671078'),
  '2026': link_xsmn('809052019'),
  '2027': link_xsmn('2073046506'),
}
