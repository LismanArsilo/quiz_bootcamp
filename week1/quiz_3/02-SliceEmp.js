// terdapat array employees
const cities = [
  "merak",
  "tangerang",
  "jakarta",
  "bogor",
  "cianjur",
  "cimahi",
  "bandung",
];

const bogor = cities.indexOf("bogor");

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)];

// slice(awal, akhir) yang awal akan terbawa yang nilai akhir tidak terbawa

function citiesSlice(arrays, cityBetween) {
  const city = arrays.indexOf(cityBetween);
  const newCity = [...cities.slice(0, city), ...cities.slice(city + 1)];
  return newCity;
}

console.log(citiesSlice(cities, "jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']
