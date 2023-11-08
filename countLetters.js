

const countLetters = function(str){
  const letterCountObj = {};
  str = str.replace(/\s+/g, '');
  for(const letter of str){
    letterCountObj[letter] = (letterCountObj[letter] || 0 ) + 1;
  }

  return letterCountObj;
}

module.exports = countLetters;
