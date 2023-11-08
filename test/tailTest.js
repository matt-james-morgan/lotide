const {assert} = require('chai');
const tail = require("../tail");


describe("#tail", ()=>{
  it("returns everything in array besides first index",()=>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
})
