const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false
  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  if (stringOne.length !== stringTwo.length) {
    return false;
  }
  const satu = stringOne.split("").sort().join("");
  const dua = stringTwo.split("").sort().join("");
  if (satu === dua) {
    return true;
  }
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
