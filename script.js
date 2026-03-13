let display = document.getElementById("display");

function press(value){

if(value === "."){
let parts = display.value.split(/[\+\-\*\/]/);
let last = parts[parts.length-1];

if(last.includes(".")){
return;
}
}

display.value += value;
}

function clearDisplay(){
display.value = "";
}

function backspace(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}

}

document.addEventListener("keydown", function(event){

let key = event.key;

if(!isNaN(key) || key==="+" || key==="-" || key==="*" || key==="/" || key==="."){
display.value += key;
}

if(key==="Enter"){
calculate();
}

if(key==="Backspace"){
backspace();
}

if(key==="Escape"){
clearDisplay();
}

});