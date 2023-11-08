const findKeyByValue = function(genreList, show) {
  
  for (let key in genreList) {
    if (genreList[key] === show) {
      return key;
    }
  }

};

module.exports = findKeyByValue;