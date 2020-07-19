// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let counter = {};

for (let i = 0; i < statement.length; i++) {
  if (statement[i] === ' ') continue;
  if (!counter[statement[i]]) {
    counter[statement[i]] = 1;
  }
  // Can also be expressed with this short-circuit statement:
  // counter[statement[i]] = counter[statement[i]] || 0;
  counter[statement[i]]++;
}