var assert = require("assert")
var ot = require('..')
var getNextOccurence = require('../lib/getnextoccurence.js')

describe('setOffsetInterval', function(){
  describe('Single interval', function(){
    it('should trigger twice on sett offset and interval', function(){
      var ret1, ret2, offset = 6, interval = 10;
      ot.setOffsetInterval(function(){
        if(ret1){
          if(ret2){
            assert.equal(offset, ret1 % interval);
            assert.equal(offset, ret2 % interval);
          }
          else {
            ret2 = new Date().getSeconds();
          }
        }
        else {
          ret1 = new Date().getSeconds();
        }
      }, ot._sec(interval), ot._sec(offset));
    })
  })
})

/*
for(i = 0; i < 2; i++){
  var r = Math.round(Math.random() * 60)
  var next = getNextOccurence(_sec(10), _sec(3), _sec(1), _sec(r))
  console.log('If the mins are ' + r +
    ', then the next occurence is ' + _sec(next, true) + '.')
}

setOffsetInterval(function(){
  console.log('Interval triggered at ' + new Date().toString())  
}, _sec(10), _sec(3))
*/
