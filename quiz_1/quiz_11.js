/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1, wg2, wg3) {
  let palingTinggi = 0;
  for (let i = 0; i < arguments.length; i++) {
    let nilai = arguments[i];
    if (nilai > palingTinggi) {
      palingTinggi = nilai;
    }
  }
  return palingTinggi;
}

console.log(getHeavier(12, 45, 70)); //70
