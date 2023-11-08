const eqArrays = function(arr1, arr2) {
  let valid = true;
  arr1.forEach((x, i) =>{
    if (x !== arr2[i]) {
      valid = false;
    }
  });
  return valid;
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {

        if (eqArrays(obj1[key],obj2[key]) === false) {
          
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
}

l

module.exports = assertObjectsEqual;
