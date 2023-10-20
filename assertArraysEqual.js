const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }


};

const eqArrays = function(arr1, arr2){
  let valid = true;
  arr1.map((x, i) =>{
    if(x !== arr2[i]){
      valid = false;
    }
  });
  return valid;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);