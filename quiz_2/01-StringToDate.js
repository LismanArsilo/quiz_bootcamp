/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */

function strToDate(s) {
  // split dengan / untuk menghilangkan / pada string dan memisahkannya menjadi array
  const date = s.split("/");
  // kondisi untuk memeriksa apakah input berupa number atau bukan
  if (isNaN(date[0] && date[1] && date[2])) {
    return `${s} bad format date`;
  }
  // setelah sesuai number maka di gabungkan kembali dengan join /
  const format = date.join("/");
  const newDate = new Date(format);
  return newDate;
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
