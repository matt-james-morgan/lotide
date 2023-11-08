const {assert, expect} = require('chai');
const middle = require("../middle");

describe("#middle", ()=>{
  it("should return an array", ()=>{
    assert.isArray(middle([1, 2, 3, 4, 5, 6]));
  });
  it("should return 3 and 4 from array", ()=>{
    expect(middle([1, 2, 3, 4, 5, 6])).to.eql([3,4]);
  })
  it("should use deep equal to compare results", ()=>{
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  })
})
