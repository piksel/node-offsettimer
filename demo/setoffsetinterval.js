var ot = require('..')

var interval = ot._sec(10);
var offset = ot._sec(3);

console.log('Setting interval to tick every time the unit part of the seconds part of the current time reaches 3, eg. 13, 23, 33 etc.\n');

ot.setOffsetInterval(function(){
  console.log('Interval triggered at ' + new Date().toString())  
}, interval, offset)
