const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if(keys1.length !== keys2.length){return false};

  for(const key of keys1){
    if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
      if(!eqArrays(obj1[key],obj2[key])){
        return false;
      }
    }else if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
      if(!eqObjects(obj1[key], obj2[key])){
        return false;
      } 
    }else if(obj1[key] !== obj2[key]){
      return false;
    }
  }
  return true;
}


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false