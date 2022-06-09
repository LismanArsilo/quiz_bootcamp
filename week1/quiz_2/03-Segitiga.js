/** buat segitiga  */
// i untuk mencetak ke kanan
// j untuk mencetak ke bawah
let hasil = "";
for (let i = 5; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    hasil += j;
    hasil += " ";
  }
  hasil += "\n";
}
console.info(hasil);
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// z untuk mencetak ke kanan
// y untuk mencetak ke bawah
let nilai = "";
for (let y = 5; y >= 1; y--) {
  for (let z = y; z >= 1; z--) {
    nilai += z;
    nilai += " ";
  }
  nilai += "\n";
}
console.info(nilai);

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
