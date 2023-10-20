const assertArraysEqual = function(arr1, arr2) {
  let valid = true;
  arr1.map((x, i) =>{
    if (x !== arr2[i]) {
      valid = false;
    }
  });
  if (valid) {
    console.log(`\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  let middleArr = [];
    
  if (arr.length <= 2) {
    return middleArr;
  } else if (arr.length % 2 !== 0) {
    middleArr.push(arr[(arr.length - 1) / 2]);
  } else {
    middleArr.push(arr[(arr.length / 2) - 1]);
    middleArr.push(arr[arr.length / 2]);
  }

  return middleArr;
};


console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);