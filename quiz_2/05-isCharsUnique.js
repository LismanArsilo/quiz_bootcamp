function isCharsUnique(string) {
  const char = string.split("").sort().join("");
  if (char === string) {
    return true;
  } else {
    return false;
  }
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
