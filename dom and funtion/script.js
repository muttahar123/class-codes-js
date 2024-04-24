var round_input = document.getElementById('round_of');
var round_result = document.getElementById('round_result');
var random_result = document.getElementById('random_result');

function round() {
    var roundResult = Math.round(round_input.value)
    round_result.innerText = '>>=' +roundResult
}


function generateRandomNumber() {
    var randomNumber = Math.random() 
    var randomOnlyTwo = Math.ceil(randomNumber*100)
    random_result.innerText ='>>=' + randomOnlyTwo

}


var ceil_of = document.getElementById('ceil_of');
var ceil_Result = document.getElementById('ceil_Result');
function ceil(){
    var ceilOf = Math.ceil(ceil_of.value)
    ceil_Result.innerText= '>>=' +ceilOf
}



var floor_of = document.getElementById('floor_of');
var floor_result = document.getElementById('floor_result');
function floor(){
    var floorOf = Math.floor(floor_of.value)
    floor_result.innerHTML='>>=' + floorOf
}