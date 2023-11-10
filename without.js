const without = function(arr1, arr2) {
  let withoutWords = [];
  arr1.map((x, i) =>{
    if(!arr2.includes(x)){
      withoutWords.push(x);
    }
  });

  return withoutWords;
}

module.exports = without;

