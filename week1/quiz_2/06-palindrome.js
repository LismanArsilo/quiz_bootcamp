function isPalindrome(word) {
  const oldText = word.toLowerCase();
  const text = word.trim().toLowerCase().split("").reverse().join("");
  if (oldText === text) {
    return true;
  }
  return false;
}
console.log(isPalindrome("kasur ini rUsak")); //true
