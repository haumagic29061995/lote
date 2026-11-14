// Nguồn dữ liệu kết quả xổ số: Google Sheet xuất bản dạng CSV (Publish to web, tự xuất bản lại khi sửa sheet).
// Nếu không tải được thì app dùng file CSV có sẵn trong src/assets/csv làm dự phòng.
export const LINK_CSV_LOTE_45 =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuQHHFRzAmMC_tHRnu8cCrr1k2eofH6e3cyk2_YqFfNmREGfR6cSyuIQJnr7OulqrBHF9wMueqpCsY/pub?gid=1819524273&single=true&output=csv'

export const LINK_CSV_LOTE_55 =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvXzBIgByEQchrAuLnQJsBrzcm1V64WMbQvDURph3nk7eMz13T26APw3jo466Ijt4m9Gg4q6zgT3bx/pub?gid=974883964&single=true&output=csv'

// Danh sách loto (ngày, số, kết quả có/không) do Apps Script ghi vào Google Sheet, hiển thị ở trang /loto.
// Link Publish to web dạng CSV của Google Sheet.
export const LINK_GOOGLE_SHEET_LOTO =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS22O-AhO6JObxE84rRkY4axpRWLrdtY7-saZa5dRBs94GmOfkt07G5DZ4d-YUdmSiIYWl9RCjLJM9w/pub?gid=0&single=true&output=csv'
