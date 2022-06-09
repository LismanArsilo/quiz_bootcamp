//soal 3
// Buat script program supaya bisa muncul output seperti di bawah

let angka = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    angka += i + j;
    angka += " ";
  }
  angka += "\n";
}
console.info(angka);

// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
