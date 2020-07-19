// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"]; // At this point, numArray is [1]
numArray.push(2); // numArray is now [1, 2]

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Try to answer without running the code or looking at the solution.

// object should be { first: [1,2] }. Line 4 creates a pointer variable to the array within the object, and then line 5 mutates it by adding a new value to it. This directly mutates the array within the object. If we wanted to leave the original object alone and create a separate array copy, we can do that by making a copy before pushing.