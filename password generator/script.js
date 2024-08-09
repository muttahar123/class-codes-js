
var password = ""
var showpass = document.getElementById("showpass")
var LowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":"];
    var numbers = [1,2,3,4,5,6,7,8,9,0]

    function generate(){
       showpass.innerHTML = ""
       password = ""
     

       console.log("Your password is generating==>"+ password);
        var LowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UpperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacter = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":"];
    var numbers = [1,2,3,4,5,6,7,8,9,0]

        const allCharacter = LowerCaseAlphabet + UpperCaseAlphabet + specialCharacter + numbers;

        password +=
        UpperCaseAlphabet[Math.floor(Math.random()*UpperCaseAlphabet.length)]
        password +=

        LowerCaseAlphabet[Math.floor(Math.random()*LowerCaseAlphabet.length)]
        password +=
        
        specialCharacter[Math.floor(Math.random()*specialCharacter.length)]
        password +=

        numbers[Math.floor(Math.random()*numbers.length)]
        for(let i = 7; i<8; i++){
            password +=
            allCharacter[Math.floor(Math.random)*allCharacter.length]
        }
        password = password.split("").sort(()=>Math.random()-0.5).join("");
        showpass.innerHTML = password
        return password;


    }
    