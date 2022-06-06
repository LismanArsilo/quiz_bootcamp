//soal 8
function checkPermute(stringOne, stringTwo) {
  //buat isi function untuk menentukan nilai checkPermute di console jika length
  //kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
  //jumlah kata dari masing2 input an perjumlah sama atau tidak
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    const params1 = stringOne.split("").sort().join("");
    const params2 = stringTwo.split("").sort().join("");
    if (params1 !== params2) {
      return false;
    }
    return true;
  }
}
console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aaa")); //false;
