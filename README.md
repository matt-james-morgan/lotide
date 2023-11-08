# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @matt.james.morgan97/lotide`

**Require it:**

`const _ = require('@matt.james.morgan97/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1,arr2)`: assertion to check for equal arrays
* `assertEqual(expected, actual)`: assertion for two values
* `assertObjectsEqual(obj1,obj2)`: assertion to check if two objects are equal
* `countLetters(str)`: returns object with every letter in the string as keys and the values is how many times that letter occured
* `countOnly(arr,obj)`: this will return an object that contains the counts of items in the first arr
* `eqArrays(arr1,arr2)`: will return true if two arrays are equal
* `findKey(obj, callback)`: will return first key that returns true for callback function
* `findKeyByValue(obj, value)`: returns key that has given value
* `flatten(arr1)`: takes a nested array and returns a new array that isn't nested
* `head(arr1)`: takes an array and returns the first element of that array
* `letterPositions(str)`: takes a str and returns an object as all the letters as keys and the position of the letters as the values
* `middle(arr)`: returns an arr containing middle of given array
* `tail(arr)`: returns an arr without first element of given array
* `takeUntil(arr, callback)`: returns an arr of all elements in array until specified value in callback
* `without(arr)`: returns an arr containing all elements besides the elements specified elements in second arr
* `map(arr, callback)`: returns an arr that has had callback implemented on every element


