// Will the code below raise an error ?

let numbers = [1, 2, 3];
numbers[6] = 5;

// No, it won't. The array will just be extended and the values that are unfilled will contain empty slots.

// Bonus:

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// This will be empty.