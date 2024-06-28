 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword    } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBbTWwY0aKf7YqGrd_ehctzKK-sKNvyCj8",
   authDomain: "this-is-my-first-prject-ac171.firebaseapp.com",
   projectId: "this-is-my-first-prject-ac171",
   storageBucket: "this-is-my-first-prject-ac171.appspot.com",
   messagingSenderId: "951577190072",
   appId: "1:951577190072:web:6ed85ccd40b7fa08a71e4d",
   measurementId: "G-YS4RDC3XK5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);;
 const analytics = getAnalytics(app);
 const auth = getAuth(app);


 const signUp_email = document.getElementById("signUp_email");
 const signUp_password = document.getElementById("signUp_password");
 const signUp_btn = document.getElementById("signUp_btn");


 signUp_btn.addEventListener("click", createserAccount)



onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is log in!");
        const uid = user.uid;
    } else {
        console.log("user is not log in!");
    }
});


function createserAccount(){
//     console.log('signup_email=>',signUp_email.value);
//     console.log('signUp_password=>',signUp_password.value);
createUserWithEmailAndPassword(auth, signUp_email.value, signUp_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user=>', user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}

        
      
     


