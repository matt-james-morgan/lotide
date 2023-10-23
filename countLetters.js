const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str){
  const letterCountObj = {};
  str = str.replace(/\s+/g, '');
  for(const letter of str){
    letterCountObj[letter] = (letterCountObj[letter] || 0 ) + 1;
  }

  return letterCountObj;
}
const result = countLetters("hey what is up aa oooo ss");


assertEqual(result["s"], 3);
assertEqual(result["o"], 4);
assertEqual(result["a"], 3);