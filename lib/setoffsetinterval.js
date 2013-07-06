var getNextOccurence = require('./getnextoccurence')
var _sec = require('./time.js')._sec

var setOffsetInterval = function(callback, interval, offset){
  var next = getNextOccurence(interval, offset, _sec(1));

  setTimeout(function(){
    var intid
    iniid = setInterval(function(){
      callback(intid);
    }, interval);
  }, next)
}


