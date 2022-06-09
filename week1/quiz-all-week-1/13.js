//soal 13
const findSum = (arr, weight) => {
  let nilai = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] + arr[j] == weight) {
        nilai = `${arr[j]} & ${arr[i]}`;
      }
    }
  }
  return nilai;
};

console.log(findSum([1, 2, 3, 4, 5], 9)); // 4 & 5
