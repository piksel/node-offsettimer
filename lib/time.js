var _sec = function(amt, inv) {
  var inv = inv || false;
  return inv ? amt / 1000 : amt * 1000;
}

var _min = function(amt, inv){
  var inv = inv || false;
  return _sec( (inv ? amt / 60 : amt * 60) , inv)
}

var _hrs = function(amt, inv){
  var inv = inv || false;
  return _min( (inv ? amt / 60 : amt * 60) , inv)
}

var _day = function(amt, inv){
  var inv = inv || false;
  return _hrs( (inv ? amt / 24 : amt * 24) , inv)
}


module.exports = {
  _sec: _sec,
  _min: _min,
  _hrs: _hrs,
  _day: _day
}
