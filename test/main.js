var setOffsetInterval = function(callback, interval, offset){
  var next = getNextOccurence(interval, offset, _sec(1));

  setTimeout(function(){
    var intid
    iniid = setInterval(function(){
      callback(intid);
    }, interval);
  }, next)
}

var getNextOccurence = function(interval, offset, unit, now){

  var now = now || new Date().getSeconds() * 1000
  var unit = unit || _min(1)
  if(!interval || !offset) throw 'Invalid parameters:' + interval + ', ' + offset;

  var diff = now % interval;
  var next =  (now - diff) + offset
  if(diff >= offset) next += interval

  return next - now;
}

var _min = function(amt, inv){
  var inv = inv || false;
  return _sec( (inv ? amt / 60 : amt * 60) , inv)
}

var _sec = function(amt, inv) {
  var inv = inv || false;
  return inv ? amt / 1000 : amt * 1000;
}

for(i = 0; i < 2; i++){
  var r = Math.round(Math.random() * 60)
  var next = getNextOccurence(_sec(10), _sec(3), _sec(1), _sec(r))
  console.log('If the mins are ' + r +
    ', then the next occurence is ' + _sec(next, true) + '.')
}

setOffsetInterval(function(){
  console.log('Interval triggered at ' + new Date().toString())  
}, _sec(10), _sec(3))
