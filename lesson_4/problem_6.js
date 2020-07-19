// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// fill takes a value and two indices and replaces the indices in between those two given indices with the given value. We can also verify that it's a destructive method.