module.exports = function(interval, offset, unit, now){

  var now = now || new Date().getSeconds() * 1000
  var unit = unit || _min(1)
  if(!interval || !offset) throw 'Invalid parameters:' + interval + ', ' + offset;

  var diff = now % interval;
  var next =  (now - diff) + offset
  if(diff >= offset) next += interval

  return next - now;
}
