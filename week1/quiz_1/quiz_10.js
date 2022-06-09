/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  if (!type) {
    return `no match type currency`;
  } else {
    if (type === "yen") {
      const yen = parseFloat(130.12) * money;
      return `${money} yen = Rp.${yen.toLocaleString("id-id")}`;
    } else if (type === "usd") {
      const usd = parseFloat(14382.5) * money;
      return `${money} usd = Rp.${usd.toLocaleString("id-id")}`;
    } else if (type === "euro") {
      const euro = 16000 * money;
      return `${money} euro = Rp.${euro.toLocaleString("id-id")}`;
    } else {
      return `Kami belum menyediakan konversi mata uang tersebut`;
    }
  }
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
