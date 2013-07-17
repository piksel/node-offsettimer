var ot = require('./time')

module.exports = function(interval, offset, unit, time){

  var now
  var unit = unit || 'sec'

  switch(unit){
    case 'hrs': now  = ( time ? time : new Date().getHours()   ) * ot._hrs(1); break;
    case 'min': now  = ( time ? time : new Date().getMinutes() ) * ot._min(1); break;
    case 'sec':
       default: now  = ( time ? time : new Date().getSeconds() ) * ot._sec(1); break;
  }

  if('undefined' == typeof interval || 'undefined' == typeof offset) throw 'Invalid parameters:' + interval + ', ' + offset;

  var diff = now % interval;
  var next =  (now - diff) + offset

  if(diff >= offset) next += interval

  return next - now;
}