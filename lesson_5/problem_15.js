// Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let containsAllEvens = obj => {
  for (let key in obj) {
    let containsEvens = obj[key].every(number => number % 2 === 0);
    if (!containsEvens) return false;
  }
  return true;
};
arr.filter(entry => containsAllEvens(entry));