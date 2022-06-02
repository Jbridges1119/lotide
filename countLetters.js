const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (letter !== " "); {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  } return console.log(results);
};

countLetters("lighthouse in the house");