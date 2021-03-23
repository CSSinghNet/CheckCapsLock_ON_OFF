// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h4>A quick way to check If the caps lock key is on or off using JavaScript</h4>`;

const emailInput = document.getElementById('email');
emailInput.addEventListener('keyup',(event)=>{
if(event.getModifierState('CapsLock')){
  console.log('CapsLock is on');
}
else{
console.log('CapsLock is off');
}
});
