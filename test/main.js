
for(i = 0; i < 2; i++){
  var r = Math.round(Math.random() * 60)
  var next = getNextOccurence(_sec(10), _sec(3), _sec(1), _sec(r))
  console.log('If the mins are ' + r +
    ', then the next occurence is ' + _sec(next, true) + '.')
}

setOffsetInterval(function(){
  console.log('Interval triggered at ' + new Date().toString())  
}, _sec(10), _sec(3))
