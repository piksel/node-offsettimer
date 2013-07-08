/*
  offsettimer - index.js
  (c) 2013, piksel bitworks
*/

var time = require('./lib/time')

module.exports = {
  setOffsetInterval: require('./lib/setoffsetinterval'),
//  setOffsetTimer: require('./lib/setoffsettimer'),
  _sec: time._sec,
  _min: time._min,
  _hrs: time._hrs,
  _day: time._day
}
