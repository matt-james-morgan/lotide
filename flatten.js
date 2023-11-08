const flatten = function(arr1) {
  let flattenedArr = [];
  for(let element of arr1){
    if(Array.isArray(element)){
      for(let elm of element){
        flattenedArr.push(elm)
      }
    }else{
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
}


module.exports = flatten;
