const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){return false}

  for(const index in arr1){
    if(Array.isArray(arr1[index]) && Array.isArray(arr2[index])){
      if(!eqArrays(arr1[index], arr2[index])) {
        return false;
      }
    }else if(arr1[index] !== arr2[index]){
      return false
    }
  }
  return true;
};


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) , false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false