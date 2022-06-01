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

const middle = function(array) {
  let middle = [];
  if (array.length < 3) {
    return console.log(middle);
  }
  if (array.length % 2 === 0) {
    middle.push(array[((array.length) / 2) - 1], array[(array.length / 2)]);
    return console.log(middle);
  }
  middle.push(array[Math.ceil(array.length / 2) - 1]);
  return console.log(middle);
};


middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]);// => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]