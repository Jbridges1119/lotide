const eqArrays = require('../eqArrays')



eqArrays([1, 2, 3], [1, 2, 3]); // => should PASS
eqArrays([1, 2, 3], [3, 2, 1]) // => should fail
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => should fail