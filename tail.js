const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDED1 Assertion Failed: ${actual} !== ${expected}`);
  }


};

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const arr = ["Lighthouse", "Labs"];

for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], arr[i]);
}


const words = ["yo yo", "lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);