# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jbridgescode/lotide`

**Require it:**

`const _ = require('@jbridgescode/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `function1(head)`: Removes the first value of an array and returns the new array.
* `function2(tail)`: Removes the last value of an array and returns the new array.
* `function3(middle)`: Returns the middle value of an array.
* `function1(eqArrays)`: Compares two arrays and determines whether they are equal.
* `function2(assertArraysEqual)`: Compares two arrays and determines whether they are equal, then prints output.
* `function3(assertEqual)`: Compares two values and determines whether they are equal.
* `function1(assertObjectsEqual)`: Compares two objects and determines whether they are equal, then prints output.
* `function2(countLetters)`: Counts letters in a string and returns output.
* `function3(countOnly)`: Counts given items from a list.
* `function1(eqObjects)`: Compares two objects and determines whether they are equal.
* `function2(findKey)`: Finds a key in an object.
* `function3(findKeyByValue)`: Returns first index lovation of input key.
* `function1(flatten)`: Flattens a nested array in an array.
* `function2(letterPositions)`: Returns index position of each letter used in a string.
* `function3(map)`: Using a callback will map from an array.
* `function1(takeUntil)`: Creates an array from another array until inputed value.
* `function2(without)`: Removes values from an array

