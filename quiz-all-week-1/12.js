//soal 12
function range(startOrEnd, end, step) {
  if (end == null) {
    end = startOrEnd;
    startOrEnd = 0;
  }
  const hasil = rangeFromStartToEnd(startOrEnd, end);
  return hasil;
}

function rangeFromStartToEnd(start, end, step = 1) {
  const hasil = [];
  for (let i = start; i < end; i += step) {
    hasil.push(i);
  }
  return hasil;
}
console.log(range(9)); //(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5, 9)); //(4) [5, 6, 7, 8]
