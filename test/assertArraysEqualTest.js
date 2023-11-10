const assertArraysEqual = require("../assertArraysEqual");
const {assert} = require("chai");


assertArraysEqual([1, 2, 3], [1, 2, 3]);

describe("#assertArraysEqual", ()=>{
  it("should return undefined for [1,2,3] [1,2,3]",()=>{
    assert.strictEqual(assertArraysEqual([1,2,3],[1,2,3]),undefined);
  })
})