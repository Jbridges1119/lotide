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
  let half = array.length / 2
  if (array.length < 3) {
    return middle;
  }
  if (Number.isInteger(half)) {
    middle.push(array[(half) - 1], array[(half)]);
    return middle;
  }
  middle.push(array[Math.ceil(half) - 1]);
  return middle;
};


assertArraysEqual(middle([1]), []); // => []
middle([1, 2]); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);// => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]