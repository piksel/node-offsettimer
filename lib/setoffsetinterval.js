var getNextOccurence = require('./getnextoccurence')
var _sec = require('./time.js')._sec

module.exports = function(callback, interval, offset, unit){
  var next = getNextOccurence(interval, offset, unit || _sec(1));

  setTimeout(function(){
    var intid
    iniid = setInterval(function(){
      callback(intid);
    }, interval);
  }, next)
}


