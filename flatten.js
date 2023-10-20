const assertArraysEqual = function(arr1, arr2){
  let valid = true;
  arr1.map((x, i) =>{
    if(x !== arr2[i]){
      valid = false;
    }
  });
  if (valid) {
    console.log(`\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const flatten = function(arr1) {
  let flattenedArr = [];
  for(let element of arr1){
    if(Array.isArray(element)){
      for(let elm of element){
        flattenedArr.push(elm)
      }
    }else{
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
}



assertArraysEqual(flatten([1,2,[3,4],5]), [1,2,3,4,5]);