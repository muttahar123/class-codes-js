

var myInfo = {
    name : "Muttahar",
    Class : 'XII',
    FatherName : "M.Sohail Anwer",
    Age : 18,
    married : false
}
myInfo.dob = new Date ("05-31-2005")
myInfo.calculateAge = function (){
 console.log(this.dob);
 
}

console.log(myInfo);