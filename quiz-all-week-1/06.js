//soal 6
function isPalindrome(word) {
  // buat isi function untuk menentukan nilai palindrome di console true atau false
  const kalimat = word.toLowerCase();
  let pembanding = "";
  for (let i = kalimat.length - 1; i >= 0; i--) {
    pembanding += kalimat[i];
  }
  if (kalimat !== pembanding) {
    return false;
  }
  return true;
}
console.log(isPalindrome("kasur ini rUsak")); //true
