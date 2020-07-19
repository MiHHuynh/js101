// A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters(the digits 0-9 and the letters a-f) represented as a string.The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

function generateUUID() {
  function getNextCharacterType() {
    const randomNumber = Math.random();
    return randomNumber >= 0.5 ? 'letter' : 'number';
  }

  function generateLetter() {
    const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];
    const index = Math.floor(Math.random() * LETTERS.length);
    return LETTERS[index];
  }

  function generateNumber() {
    // Possible digits range from 0 to 9.
    return Math.floor(Math.random() * 9);
  }

  function generateSegment(segmentLength) {
    const segment = [];
    for (let i = 0; i < segmentLength; i++) {
      let nextCharacterType = getNextCharacterType();
      if (nextCharacterType === 'letter') {
        let generatedLetter = generateLetter();
        segment.push(generatedLetter);
      } else {
        let generatedNumber = generateNumber();
        segment.push(generatedNumber);
      }
    }
    return segment.join('');
  }

  const SEGMENT_LENGTHS = [8, 4, 4, 4, 12];
  const segments = SEGMENT_LENGTHS.map(segmentLength => {
    return generateSegment(segmentLength);
  });
  return segments.join('-');
}