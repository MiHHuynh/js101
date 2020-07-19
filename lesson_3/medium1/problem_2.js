
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

/*
Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`
*/

munstersDescription.split('').map(letter => {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  }
  return letter.toUpperCase();
}).join('');