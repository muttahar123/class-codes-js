var hours = document.getElementById('Hours'); 
var mins = document.getElementById('mins');
var secs = document.getElementById('secs')
var milisec = document.getElementById('milisec')

var updated = setInterval(function () {
  var date = new Date()
  hours.innerHTML = date.getHours() + ''
  mins.innerHTML = date.getMinutes() + ''
  secs.innerHTML = date.getSeconds() + ''
  milisec.innerHTML = date.getMilliseconds() 
},1000)


function stop() {
    clearInterval(updated);
}



var start = document.getElementById("btn-start");
var stop = document.getElementById("btn-stop");
var reset = document.getElementById("btn-reset");

var mins = document.getElementById("min");
var secs = document.getElementById("sec");
var millis = document.getElementById("milli");
var setinterval;

var min = 0;
var sec = 0;
var milli = 0;
var Default;

start.onclick = function (){
    Default = setInterval(startTime, 10);
}

stop.onclick= function(){
    clearInterval(Default);
}

reset.onclick= function(){
    clearInterval(Default);
    min = 0;
    sec = 0;
    milli = 0;
    mins.innerHTML =  "0" + min;
    secs.innerHTML =  "0" + sec;
    millis.innerHTML =  "0" + milli;
}


function startTime(){
    milli++;
    if (milli < 10){
        millis.innerHTML = "0" + milli;
    }
    if (milli > 9 || milli < 100){
        millis.innerHTML =  milli;
    }    
    if (milli >= 100 && sec <= 9){
        milli = 0;
        sec++;
        millis.innerHTML = "0" + milli;
        secs.innerHTML = "0" + sec;
    }
    if (milli >= 100 && sec > 9){
        sec++;
        milli = 0;
        millis.innerHTML = "0" + milli;
        secs.innerHTML = sec;
    }
    if (sec >= 60 && min < 10){
        sec = 0;
        min++;
        secs.innerHTML = "0" + sec;
        mins.innerHTML = "0" + min;
    }
    if (sec >= 60 && min > 9){
        sec = 0;
        sec++;
        secs.innerHTML = "0" + sec;
        mins.innerHTML = min;
    }
}
