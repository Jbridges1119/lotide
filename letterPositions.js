const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};




const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};



// assertArraysEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] }); // => should PASS
module.exports = letterPositions;