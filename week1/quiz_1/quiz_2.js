/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t),
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t) {
  if (isNaN(a) && isNaN(t)) {
    return `input must an number`;
  } else if (a < 0 || t < 0) {
    return `Accelaration or time must be >= 0`;
  } else {
    const s = (1 / 2) * a * t ** 2;
    return `Jarak yang ditempuh adalah ${s} meter/s`;
  }
}

console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50, 60)); //Jarak yang ditempuh adalah 90000 meter/s
