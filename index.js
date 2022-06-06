// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays   = require('./eqArrays');
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual   = require('./assertObjectsEqual');
const countLetters   = require('./countLetters');
const countOnly   = require('./countOnly');
const eqObjects   = require('./eqObjects');
const findKey   = require('./findKey');
const findKeyByValue   = require('./findKeyByValue');
const flatten   = require('./flatten');
const letterPosition   = require('./letterPosition');
const map   = require('./map');
const reverse   = require('./reverse');
const takeUntil   = require('./head');
const without   = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPosition: letterPosition,
  map: map,
  reverse: reverse,
  takeUntil: takeUntil,
  without: without
};
