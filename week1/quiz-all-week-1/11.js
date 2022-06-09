// soal 11
function startsWithE(animal) {
  const animalE = animal.filter((value) => value.startsWith("e"));
  return animalE;
}
const animals = [
  "elephant",
  "tiger",
  "emu",
  "zebra",
  "cat",
  "dog",
  "eel",
  "rabbit",
  "goose",
  "earwig",
];

console.log(startsWithE(animals)); // ["elephant", "emu", "eel", "earwig"]
