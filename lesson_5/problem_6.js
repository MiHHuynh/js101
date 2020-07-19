// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};
// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

Object.entries(munsters).forEach(person => {
  let name = person[0][0].toUpperCase() + person[0].slice(1);
  let age = person[1]['age'];
  let gender = person[1]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}`);
});