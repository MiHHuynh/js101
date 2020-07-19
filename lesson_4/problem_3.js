// What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

// The return value is [1, 4, 9]. map transforms each value in an array according to what the callback function specifies. In this case, the callback function is squaring each number (multiplying it by itself).