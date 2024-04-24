//learing funtion
function sayhello(){
    console.log('Hello bhai jan kia haal chaal');
}

sayhello()
//-------*---------*--------//


var h1 = document.getElementById('heading');
console.log(h1);
console.log(h1.innerHTML);


var p = document.getElementById('para')
function showMore (){
    p.innerHTML='Lorem ipsum dolor sit amet consectetur....adipisicing elit. Atque quo necessitatibus assumenda quas eveniet labore? Quo exercitationem placeat deserunt culpa aliquid quod quas aliquam, ab maiores quidem reiciendis temporibus porro.Lorem ipsum dolor sit amet consectetur....adipisicing elit. Atque quo necessitatibus assumenda quas eveniet labore? Quo exercitationem placeat deserunt culpa aliquid quod quas aliquam, ab maiores quidem reiciendis temporibus porro.'
    
}
function showLess (){
    p.innerHTML='Lorem ipsum dolor sit amet consectetur....'
}


var number = document.getElementById('number')
var count = 1
function increment() {
    number.innerHTML=count++
} 
function decrement() {
    number.innerHTML=count--
} 