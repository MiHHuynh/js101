// What is the return value of map in the following code ? Why ?

[1, 2, 3].map(num => {
  num * num;
});

// The return value is [undefined, undefined, undefined]. map relies on the return value of the callback to determine what the resulting value will be. There is no explicit return value in this callback, thus the callback function would return undefined for each iteration.