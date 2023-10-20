const assertArraysEqual = function(arr1, arr2){
  let valid = true;
  arr1.map((x, i) =>{
    if(x !== arr2[i]){
      valid = false;
    }
  });
  if (valid) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
}

