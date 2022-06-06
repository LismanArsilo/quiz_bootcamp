//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.

const penduduk = 30000;
let jumlahTahun = 0;
for (let i = penduduk; i <= 100000; i = i + 900) {
  jumlahTahun += 1;
}
console.info(jumlahTahun);
