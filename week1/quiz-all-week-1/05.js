//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.

const penduduk = 30000;
for (let i = 1; i <= 100000; i++) {
  penduduk += penduduk * 0.03;
  console.log(i + "Tahun");
  if (penduduk > 100000) {
    break;
  }
}
