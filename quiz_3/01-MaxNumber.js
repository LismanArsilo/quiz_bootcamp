const numbers = [44, 131, 335, 223, 21, 66, 87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays) {
  // untuk mengecek apakah array berupa number atau bukan jika iya maka kembalikan nilai This syntax is not allowed. The result is NaN.
  var max = 0;
  if (isNaN(...arrays)) {
    return `This syntax is not allowed. The result is NaN.`;
  } else {
    arrays.forEach((el) => {
      if (el > max) {
        max = el;
      }
    });
  }
  return max;
}

console.log(maxNumber(numbers));
