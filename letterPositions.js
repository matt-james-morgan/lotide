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

module.exports = letterPositions;