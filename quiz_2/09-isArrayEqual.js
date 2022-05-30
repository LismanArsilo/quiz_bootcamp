function isArraysEqual(arrayA, arrayB) {
  if (arrayA.length === arrayB.length) {
    return arrayA.every((element, index) => element === arrayB[index]);
  }
  return false;
}

function isSame(element, index, array) {
  return element === array[index];
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
