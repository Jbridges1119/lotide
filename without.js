
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

const without = function(source, itemsToRemove) {
  let missingItems = []
  for(let items of source){
    if(!itemsToRemove.includes(items)) {
      missingItems.push(items)
    }
  } return missingItems
}

/*const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "hellop"], [1, 2, "hello"]) // => ["1", "2"]
*/