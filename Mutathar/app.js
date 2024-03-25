// var num = 8
// var number = num++
// console.log(num )
// console.log(number)
// var num = 8
// var number = ++num
// console.log(num )
// console.log(number)
// var num = 8
// var number = num--
// console.log(num )
// console.log(number)
// var num = 8
// var number = --num
// console.log(num )
// console.log(number)
// var alll = 'habdjka' + 90 + true 
// console.log(alll)
// var userinput = prompt("Enter your table number")
// console.log(userinput)
// document.write(`<h4>${userinput}x 1 = ${userinput}</h4>`)
// document.write(`<h4>${userinput}x 2 = ${userinput*2}</h4>`)
// document.write(`<h4>${userinput}x 3 = ${userinput*3}</h4>`)
// document.write(`<h4>${userinput}x 4 = ${userinput*4}</h4>`)
// document.write(`<h4>${userinput}x 5 = ${userinput*5}</h4>`)
// document.write(`<h4>${userinput}x 6 = ${userinput*6}</h4>`)
// document.write(`<h4>${userinput}x 7 = ${userinput*7}</h4>`)
// document.write(`<h4>${userinput}x 8 = ${userinput*8}</h4>`)
// document.write(`<h4>${userinput}x 9 = ${userinput*9}</h4>`)
// document.write(`<h4>${userinput}x 10 = ${userinput*10}</h4>`)
// // var English= 90
// var urdu= 88
// var maths =30
// Document.write(`<h2>Obtain Marks</h2>
// <p>English= ${English}/marks</p>
// <p>Urdu= ${urdu}/marks</p>
// <p>Maths= ${maths}/marks</p>
// `)
// var num = 3;
// var num2 = 5;
// var sum = num + num2;
// document.write(`The sum of 3 and 5 is ${sum}`)
// var name = prompt('Enter your  name ');
// document.write(`Your enter value is ${name}`);
// var city_name = prompt('Enter the current city name');
// if (city_name == karachi) {
// }
// for(let i=1; i<=100; i++){
//     console.log(i);
// }
// var stars = '';
// for(var i = ""; i<10; i++){
//     stars = stars+ '*';
//     console.log(stars);
// }
// var stars = 'Muttahar ';
// for(var i = ""; i<=10; i++){
//     stars = stars+ 'Sheikh ';
//     console.log(stars);
// }
// var tableNum = prompt('Enter table number');
// for(var i = 1; i<10; i++){
//     console.log(`${tableNum} x ${i} is = ${tableNum * i}`);
// }
// let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// for(var i = 0; i<10; i++){
//     console.log(weekDays[i]);
//  }



 
// var cities = ['karachi', 'Islambad', 'Quetta', 'peshawar', 'lahore'];
// var userinput = prompt('Enter city name');
// var isFound = false;
// for (var i = 0; i < cities.length; i++) {
//     if (userinput === cities[i]) {
//         console.log(`City found ${userinput}`);
//         isFound = true;
//         break;
//     }

// }
// if (isFound === false) {
//     console.log(`Not found`);
// }


var nam = prompt('Enter name to check is it palendrome');
var isitpalendrome = true;

for (let i = 0; i < nam.length; i++) {
    var start = nam[i];
    var end = nam[(nam.length-1) - i]

 if (start != end) {
    isitpalendrome = false;
 }
}
if (isitpalendrome) {
    alert('This is palendrome')
}else{
    alert('This is not palendrome')
}

for (let i = 1; i <= 10; i++) {
    console.log( i , 10-i)
    
}
// var strarr = 'hello'.split

var buffet = ['qourma','biryani','karahi','gol gappay'];
let userinput = prompt('Enter item name');
let isitavail = false
for(var i = 0; i<buffet.length; i++){
    if (buffet[i] === userinput) {
        isitavail=true;
    }
}
if(isitavail){
    document.write('It is available')
} else {
    document.write('It is not available')
}
