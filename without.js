const without = function(arr1, arr2) {
  let withoutWords = [];
  arr1.map((x, i) =>{
    if(x !== arr2[i]){
      withoutWords.push(x);
    }
  });
  return withoutWords;
}

module.exports = without;

