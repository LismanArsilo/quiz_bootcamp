//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas
function deretAngka(n) {
  let angka = [];
  for (let i = 12; i <= n; i += 12) {
    angka.push(i);
  }
  return angka;
}
console.info(deretAngka(60));
