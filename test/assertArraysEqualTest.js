const assertEqualArray = require('../assertArraysEqual')


assertEqualArray([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqualArray([1, 2, 3], [3, 2, 1]) // => should fail
assertEqualArray(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertEqualArray(["1", "2", "3"], ["1", "2", 3]); // => should fail