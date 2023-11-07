const assertEqual = require("../assertEqual");
const tail = require("../tail");


const result = tail(["Hello", "Lighthouse", "Labs"]);
const arr = ["Lighthouse", "Labs"];

for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], arr[i]);
}

const words = ["yo yo", "lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);