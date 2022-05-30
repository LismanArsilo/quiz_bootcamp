function maxWordLength(params) {
  // split untuk memecah string panjang menjadi per kata " "
  const nilai = params.split(" ");
  let angka = 0;
  let kalimat = "";
  for (let i = 0; i < nilai.length; i++) {
    if (nilai[i].length >= angka) {
      angka = nilai[i].length;
      kalimat = nilai[i];
    }
  }
  return kalimat;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
