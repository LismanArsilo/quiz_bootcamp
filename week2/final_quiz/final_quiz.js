// //1.
// function totalLompat(x, y, k) {
//   let total = 0;
//   for (let i = x; i < y; i += k) {
//     total += 1;
//   }
//   return total;
// }
// console.info(totalLompat(10, 85, 30));

// 2.
// const arr = [3, 8, 9, 7, 6];
// function rotateArray(array, n) {
//   let hasil = array; // menampung array
//   let hasilAkhir = "";
//   for (let i = 1; i <= n; i++) {
//     hasilAkhir += `[${hasil}] => `;
//     const item = array.pop();
//     array.unshift(item);
//     hasilAkhir += `[${hasil}] \n`;
//   }
//   return hasilAkhir;
// }
// console.info(rotateArray(arr, 3));

// // 3.
// const array1 = [
//   "Mangga",
//   "Apel",
//   "Melon",
//   "Pisang",
//   "Sirsak",
//   "Tomat",
//   "Nanas",
//   "Nangka",
//   "Timun",
//   "Mangga",
// ];
// const array2 = [
//   "Bayam",
//   "Wortel",
//   "Kangkung",
//   "Mangga",
//   "Tomat",
//   "Kembang Kol",
//   "Nangka",
//   "Timun",
// ];

// function membedakanArray(arr1, arr2) {
//   let same = new Set();
//   let hasil = "";
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         same.add(array1[i]);
//       }
//     }
//   }

//   let different = new Set(
//     [...array1, ...array2].filter((value) => !same.has(value))
//   );
//   hasil += `
//   Same = [ ${Array.from(same).join(", ")} ]
//   Different = [ ${Array.from(different).join(", ")} ]`;
//   return hasil;
// }
// console.info(membedakanArray(array1, array2));

// // 4.
// function piramid2(start, end) {
//   let baris = "";
//   let down = 0;
//   for (let index = start; index <= Math.ceil((end + start) / 2); index++) {
//     for (let index2 = index; index2 <= index + down; index2++) {
//       baris += index2 + " ";
//     }
//     baris += "\n";
//     down++;
//   }
//   return baris;
// }

// console.log(piramid2(1, 13));
// // // 1
// // // 2 3
// // // 3 4 5
// // // 4 5 6 7
// // // 5 6 7 8 9
// // // 6 7 8 9 10 11
// // // 7 8 9 10 11 12 13

// console.log(piramid2(5, 17));
// // // 5
// // // 6 7
// // // 7 8 9
// // // 8 9 10 11
// // // 9 10 11 12 13
// // // 10 11 12 13 14 15
// // // 11 12 13 14 15 16 17
