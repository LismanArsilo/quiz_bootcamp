//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// let angka1 = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     angka += i;
//     angka += " ";
//   }
//   angka += "\n";
// }
// console.info(angka1);
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let angka2 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j >= 1; j--) {
    angka2 += j;
    angka2 += " ";
  }
  angka2 += "\n";
}
console.info(angka2);

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

let angka3 = "";
let n = 5;
let count = 1;
let descend = 2;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (count < n + 1) {
      angka3 += count + " ";
      count++;
    } else if (count >= n + 1 && count - descend !== 1) {
      angka3 += count - descend + " ";
      count++;
      descend += 2;
    } else if (count >= n + 1 && count - descend == 1) {
      count = 1;
      descend = 2;
      angka3 += count + " ";
      count++;
    }
  }
  angka3 += "\n";
}
console.info(angka3);
// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

let angka4 = "";
let a = 1,
  b = n * 2 - 1;
for (let i = 1; i <= n; i++) {
  let startValue = i;
  for (let j = 1; j <= n; j++) {
    if (j == 1) {
      angka4 += i + " ";
    } else if (j > 1 && j % 2 != 0) {
      startValue += a;
      angka4 += startValue + " ";
    }
  }
  a += 2;
  b -= 2;
}
console.info(angka4);

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25
