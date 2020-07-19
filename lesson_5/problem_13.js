// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Select current subarray
// sum up odd numbers

arr.sort((a, b) => {
  let sumOfOddNumbersA = a.reduce((acc, val) => {
    if (val % 2 !== 0) {
      return acc + val;
    }
    return acc;
  }, 0);
  let sumOfOddNumbersB = b.reduce((acc, val) => {
    if (val % 2 !== 0) {
      return acc + val;
    }
    return acc;
  }, 0);
  return sumOfOddNumbersA - sumOfOddNumbersB;
});