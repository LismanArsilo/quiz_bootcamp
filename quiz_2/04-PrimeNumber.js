function showPrimeNumber(n) {
  var hasil = [];
  for (let index = 1; index <= n; index++) {
    if (isPrime(index)) {
      hasil.push(index);
    }
  }
  return hasil;
}

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let index = 2; index < n; index++) {
      if (n % index === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(showPrimeNumber(100));
/**
2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97
*/
