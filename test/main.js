var assert = require("assert")
var ot = require('..')
var getNextOccurence = require('../lib/getnextoccurence.js')

describe('getNextOccurence', function(){
  describe('Get next 10 second occurence', function(){
    it('should return the next time the unit part of the seconds turns to 6', function(){
      var start
       ,  offset = 6
       ,  interval = 10;

      next = getNextOccurence(ot._sec(interval), ot._sec(offset), 'sec');

      start = new Date().getSeconds()

      end = start + ot._sec(next, true);
      if(end>60) end -= 60;

      assert.equal(offset, end % interval);

    })
  })
  describe('Get next 10 minute occurence', function(){
    it('should return the next time the unit part of the minutes turns to 9', function(){
      var start
       ,  offset = 9
       ,  interval = 10;

      next = getNextOccurence(ot._min(interval), ot._min(offset), 'min');

      start = new Date().getMinutes() 

      end = start + ot._min(next, true);
      if(end>60) end -= 60;

      assert.equal(offset, end % interval);

    })
  })
  describe('Get next 6 hour occurence', function(){
    it('should return the next time the unit part of the hours turns to 1', function(){
      var start
       ,  offset = 1
       ,  interval = 6;

      next = getNextOccurence(ot._hrs(interval), ot._hrs(offset), 'hrs');

      start = new Date().getHours()

      end = start + ot._hrs(next, true);
      if(end>24) end -= 24;

      assert.equal(offset, end % interval);

    })
  })
  describe('Get 50 random next occurences', function(){
    it('should return the predicted next occurences', function(){
      for(var i = 0; i<= 50; i++){
        var start
         , unit
         , unit_max
         , offset
         , interval
         , _conv

        switch(Math.round(Math.random()*2)){
          case 0: unit = 'hrs'; _conv = ot._hrs; unit_max = 24; break;
          case 1: unit = 'min'; _conv = ot._min; unit_max = 60; break;
          case 2: unit = 'sec'; _conv = ot._sec; unit_max = 60; break;
        }

        ok_intervals = {
          60: [2,3,4,5,6,10,12,15,20,30],
          24: [2,3,4,6,8,12]
        }

        interval = ok_intervals[unit_max][Math.round(Math.random() * (ok_intervals[unit_max].length-1))]
        offset   = Math.round(Math.random() * (interval-1))
        start    = Math.round(Math.random() * unit_max)

        next = getNextOccurence(_conv(interval), _conv(offset), unit, start)

        end = start + _conv(next, true)
        if(end>unit_max) end -= unit_max

        if(offset !== end % interval)
        console.dir({
          start:start,
          unit:unit,
          unit_max:unit_max,
          offset:offset,
          interval:interval,
          _conv:_conv,
          next:next,
          end:end
        })

        assert.equal(offset, end % interval);
      }
    })
  })
})

describe('setOffsetInterval', function(){
  describe('Single interval', function(){
    it('should trigger twice on set offset and interval', function(){
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
      }, ot._sec(interval), ot._sec(offset), 'sec');
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
