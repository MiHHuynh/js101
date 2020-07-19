// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// This returns [undefined, 'bear']. An element is chosen if its length is greater than 3, as indicated by the callback function. In that case, only 'bear' has a length that is greater than 3. When the condition is NOT met, the callback returns undefined.