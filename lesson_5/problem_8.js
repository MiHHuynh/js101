// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

Object.values(obj).forEach(element => {
  element.forEach(word => {
    let splitWord = word.split('');
    splitWord.forEach(letter => {
      if (VOWELS.includes(letter)) {
        console.log(letter);
      }
    });
  })
})