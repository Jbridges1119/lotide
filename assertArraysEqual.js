const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  } return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
};