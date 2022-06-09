// soal 9
function maxWordLength(params) {
  //buat function menentukan kata mana yang paling panjang lengthnya
  const kalimat = params.split(" ");
  let panjang = 0;
  let terpanjang = "";
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i].length > terpanjang.length) {
      panjang = kalimat[i].length;
      terpanjang = kalimat[i];
    }
  }
  return terpanjang;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
