const words = ["ground", "control", "to", "major", "tom"];

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  let valid = true;
  arr1.forEach((x, i) =>{
    if(x !== arr2[i]){
      valid = false;
    }
  });
  return valid;
}
const map = function(array, callback) {
  const results = []; 
  
  for(let item of array){
    results.push(callback(item));
  
  
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);
assertEqual(eqArrays(results1, ["g", "c", "t", "m", "t"]), true);

