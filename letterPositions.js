const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const assertEqualArrays = function(arr1, arr2){
  let valid = true;
  arr1.forEach((x, i) =>{
    if(x !== arr2[i]){
      valid = false;
    }
  });
  return valid;
}

const letterPositions = function(str){
  let results = {};
  str = str.toLowerCase();
  for(let i=0; i < str.length; i++){
    if(str[i] !== ' '){
      if(!results[str[i]]){
        results[str[i]] = [i];
      }else{
        results[str[i]].push(i);
      }
    }
  }
  return results;
}

let result = letterPositions("hello there")

assertEqual(assertEqualArrays(result["h"], [0,7]), true);