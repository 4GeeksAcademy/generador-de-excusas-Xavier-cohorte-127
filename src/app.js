import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const who = ['The dog', 'My grandma', 'The mailman', 'My bird']
const action = ['ate', 'peed', 'crush', 'broke']
const what = ['my homework', 'the phone', 'my car']
const when = ['before the class', 'when I was sleeping', 'while I was excercising', 'while I was praying']
//Function

function generateExcuse () {
    const a = who [Math.floor(Math.random()* who.length)];
    const b = action [Math.floor(Math.random()* action.length)];
    const c = what [Math.floor(Math.random()* what.length)];
    const d = when [Math.floor(Math.random()* when.length)];
    return a + " " + b + " " + c + " " + d + ".";
}

const excusa = generateExcuse()
console.log(excusa)


window.onload = function() {
  document.getElementById("Excusa").innerHTML=excusa
  //write your code here
  console.log("Hello Rigo from the console!");
};
