const eqArrays = require("./eqArrays");


const assertEqualArrays = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqualArrays;

