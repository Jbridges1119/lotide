const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

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

const eqObjects = function(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  for (let key of keysObj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  } return true;
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: "2", c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: ["1", 3], d: ["2", 3] };
// assertEqual(eqObjects(cd, cd2), true); // => false

module.exports = eqObjects;