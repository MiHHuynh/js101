// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// This should log to the console 34. The messWithIt function does not actually mutate the original answer value because numbers are inherently immutable. Because of this, answer gets passed into messWithIt by value, meaning the number is turned into a copy that can be manipulated within the function scope (and it is stored in the parameter variable someNumber).

