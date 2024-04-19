// var userInput = prompt('Enter any sentence!!');
// var vovelCount = 0
// var nonVovelCount = 0
// for (let i = 0; i < userInput.length; i++) {
//     var char=userInput.charAt(i).toLowerCase()
//   if (char==="a"||char==='e'||char==='i'||char==='o'||char==='u') {
//     vovelCount++
//   }else if (char !== ' ') {
    
//       nonVovelCount++
//   }
// }
// alert('vovels are :'+vovelCount+' non vovels are :'+nonVovelCount)


//capital every first letter in sentence..

// var userInput = prompt('enter any sentence');
// var userInput_arr = userInput.split(' ');
// console.log("username=>",userInput);
// console.log("username_arr=>",userInput_arr);

// for (let i = 0; i < userInput_arr.length; i++) {
// var word = userInput_arr[i];
// var capitalize = word.charAt(0).toUpperCase()+word.slice(1)
// userInput_arr[i] = capitalize
//    }
//    console.log("Userinput_arr after update=>",userInput_arr);
//    userInput = userInput_arr.join(' ');
//    console.log('Userinput after update=>',userInput);


   var password = prompt('Enter your password');
   if (password.length <= 8) {
    alert('minimum limit is 8 character')
   }else if(password !== '!' || password)
   
   
   else{
    alert('Pass is oki')
   }
