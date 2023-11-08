const takeUntil = (arr, callback) =>{
  let results;
  arr.map((e, i)=> {
    if (callback(e)) {
      results = arr.splice(0,i);
    }
  });
  return results;
};




module.exports = takeUntil;