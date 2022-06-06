const assertEqual = require('../eqArrays')



assertEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqual([1, 2, 3], [3, 2, 1]) // => should fail
assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail