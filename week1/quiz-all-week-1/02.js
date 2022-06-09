//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15
function nilai(angka) {
  const nilai = [];
  for (let i = 1; i <= angka; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      nilai.push("OKYES");
    } else if (i % 3 === 0) {
      nilai.push("OK");
    } else if (i % 4 === 0) {
      nilai.push("YES");
    } else {
      nilai.push(i);
    }
  }
  return nilai;
}
console.info(nilai(15));
