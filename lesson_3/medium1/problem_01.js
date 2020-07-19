/*
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
*/

let phrase = 'The Flintstones Rock!';
let space = ' ';
for (let i = 1; i <= 10; i++) {
  console.log(`${space.repeat(i)}${phrase}`);
}