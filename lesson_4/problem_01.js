// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

// This should return [1, 2, 3]. filter() relies on the truthiness of the callback's return value in order to filter. In other words, if the callback returns true, the current value it is looking at will be included in the resulting filtered array of values. If the callback's return value is false, that value will be excluded. In this case, the callback is always returning "hi", which would get coerced into a true.