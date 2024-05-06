var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var calculate_result = document.getElementById('calculate_result');


function calculate(sign){
    var num1Value = num1.value;
    var num2Value = num2.value;

    if (sign=='+') {
        calculate_result.innerHTML = parseInt(num1Value) + parseInt(num2Value);
    } 

    if (sign=='-') calculate_result.innerHTML= num1Value - num2Value;

    if (sign == '/') {
        calculate_result.innerHTML = num1Value/num2Value
    }

    if (sign == 'x') {
        calculate_result.innerHTML = num1Value*num2Value;
    }
}