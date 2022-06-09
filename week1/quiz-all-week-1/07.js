// soal 7
function countingValleys(s) {
  //buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
  //jika total nilai akhir adalah 0 dan U maka = +1
  const value = s.split("");
  let nilaiAkhir = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] == "D") {
      nilaiAkhir -= 1;
    } else if (value[i] == "U") {
      nilaiAkhir += 1;
    }
  }
  if (nilaiAkhir == 0) {
    nilaiAkhir += 1;
  }
  return nilaiAkhir;
}
console.log(countingValleys("UDDDUDUU")); //1
