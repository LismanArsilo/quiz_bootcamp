/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  var tahun = 0;
  for (let i = year1; i <= year2; i++) {
    tahun += isKabisat([i]);
  }
  return tahun;
}

function isKabisat(year) {
  if (
    (year % 4 == 0 && year % 100 !== 0) ||
    (year % 100 == 0 && year % 400 == 0)
  ) {
    return 1;
  } else {
    return 0;
  }
}
// console.info(isKabisat(2012));
console.log(howManyKabisat(1997, 2021));
