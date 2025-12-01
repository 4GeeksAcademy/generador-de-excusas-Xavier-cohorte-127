import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const who = ['The dog', 'My grandma', 'The mailman', 'My bird']
const action = ['ate', 'peed', 'crush', 'broke']
const what = ['my homework', 'the phone', 'my car']
const when = ['before the class', 'when I was sleeping', 'while I was excercising', 'while I was praying']
//Function
function getRandomElement (arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

function generateExcuse () {
    const whoRandomElement = getRandomElement (who)
    const actionRandomElement = getRandomElement (action)
    const whatRandomElement = getRandomElement (what)
    const whenRandomElement = getRandomElement (when)
    return whoRandomElement + " " + actionRandomElement + " " + whatRandomElement + " " + whenRandomElement + ".";
}

const excusa = generateExcuse()
console.log(excusa)


window.onload = function() {
  document.getElementById("Excusa").innerHTML=excusa
  };
