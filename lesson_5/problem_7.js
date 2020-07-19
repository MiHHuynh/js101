// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2;
arr[1][0] -= a;

// a stays as 2 because we don't directly mutate it.
// b becomes [3, 8] because we mutate it through arr.