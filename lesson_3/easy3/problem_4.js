// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// The output will be [{first: 42}, {second: 'value2'}, 3, 4, 5]
// slice only does a shallow copy, so in the end the values still point to the same array and objects.