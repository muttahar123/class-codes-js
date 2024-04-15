// var a = 'a';
// var A ='A';
// A = A.toLowerCase()
// console.log(a===A)


// var cities = ["kaRachi","islamabad","lahore"];
// var usercity = prompt('Enter your city');
// for (let i = 0; i < cities.length; i++) {
//     if (usercity.toLowerCase() == cities[i].toLowerCase()) {
//         alert('This city is availible')
//         break;
//     }else{
//         alert('this city is not found')
//     }
    
// }

// var userinput = prompt('Enter any prompt');
// alert(userinput[0].toUpperCase()+userinput.slice(1))

// var txt = prompt('Enter paragraph message');
// for (let i = 0; i < txt.length; i++) {
//    if (txt.slice(i,i+txt.length)==='and') {
//     alert('and word is not allowed')
//    }
    
// }

var paratest= prompt('Enter your sentence ');
 var length = 0;
for (var i=0; i<paratest.length; i++){
  if (paratest[i]===' ') {
    length++;
  }
}
alert('The no. of space in ur sentence is : '+ length)