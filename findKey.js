const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Uppper is test code
//Lower is my code


const findKey = (obj, callback) => {
  for(let key in obj){
    if(callback(obj[key])){
      return key
    }
  }
}


// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// /* this is call back function.
// function(x){
//   if(x.stars === 2) {
//     return true
//   }
// }
// */

// const result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3)

// console.log(result1)
// assertEqual(result1, "noma")
// assertEqual(result2, "Akaleri")

module.exports = findKey;