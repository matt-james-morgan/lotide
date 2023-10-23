const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str){
  const letterCountObj = {};

  for(const letter of str){
    letterCountObj[letter] = (letterCountObj[letter] || 0 ) + 1;
  }

  return letterCountObj;
}
const result = countLetters("sseefrtoouhoo");


assertEqual(result["s"], 2);
assertEqual(result["o"], 4);