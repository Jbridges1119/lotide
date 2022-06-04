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


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [ 2, 4, 5, 3]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])

const results2 = map(numbers, num => num += 10)
console.log(results2)
assertArraysEqual(results2, [12,14,15,13,])

const results3 = map(words, word => word.length)
console.log(results3)
assertArraysEqual(results3, [6,7,2,5,3])

const results4 = map(words, word => word.toUpperCase())
console.log(results4)
assertArraysEqual(results4, ["ground", "control", "to", "major", "tom"])





