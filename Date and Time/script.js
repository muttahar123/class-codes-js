var pprstart = document.getElementById('paperStart')
var userenter = document.getElementById('userenter')

function check(){
  var paperStart = new Date()
var mlsec1970 = new Date()

paperStart.setDate(userenter.value);
paperStart.setMonth(4);

console.log(paperStart.getTime());
console.log(mlsec1970.getTime());

var difference = paperStart.getTime() - mlsec1970.getTime();
pprstart.innerHTML='Srf '+ difference/1000/60/60/24 + ' din hain, prhle bhai..!!'
}

// var paperStart = new Date()
// var mlsec1970 = new Date()

// paperStart.setDate(27);
// paperStart.setMonth(4);

// console.log(paperStart.getTime());
// console.log(mlsec1970.getTime());

// var difference = paperStart.getTime() - mlsec1970.getTime();
// console.log('srf', difference/1000/60/60/24 , 'hain, prhle bhai..!!')



var hours = document.getElementById('Hours'); 
var mins = document.getElementById('mins');
var secs = document.getElementById('secs')
var milisec = document.getElementById('milisec')

setInterval(function () {
  var date = new Date()
  hours.innerHTML = date.getHours() + ':'
  mins.innerHTML = date.getMinutes() + ','
  secs.innerHTML = date.getSeconds() + ','
  milisec.innerHTML = date.getMilliseconds() 
},1000)

