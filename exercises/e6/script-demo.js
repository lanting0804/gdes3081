//Printing message to consle
console.log("Testing")

//Variables selecting color circles
const greenCircle = document.getElementById("green");
const plumCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
let interactionContainer=document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function(){
    interactionContainer.style.backgroundColor="lightgreen"
})
plumCircle.addEventListener("click",function(){
    interactionContainer.style.backgroundColor="plum"
})
blueCircle.addEventListener("click",function(){
    interactionContainer.style.backgroundColor="lightblue"
})

/*
Loop Task
1. Select Container
2. Declare message variable and assign test
3. For Loop
*/
const loopContainer = document.getElementById("loopContainer");
const message="hello";

for(let i=0; i<10; i++){
    console.log("hello");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message
    loopContainer.appendChild(textDiv);
}

//Condition
const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContainer.addEventListener("mouseover", function(){
    console.log("hovering over condition container");
    square.style.backgroundColor = "pink"
})
conditionContainer.addEventListener("mouseout", function(){
    console.log("hovering over condition container");
    square.style.backgroundColor = "lightsalmon"
})

//Time
const timeContainer = document.getElementById("timeContainer");
const pid = document.getElementById("increaseText");
var fs=5;
var varl = setInterval(inTimer,50);
function inTimer(){
    pid.innerHTML = "Increase";
    pid.setAttribute('style',"font-size:"+fs+"px"); 
    fs = fs + 1;
    if(fs>=50){
        clearInterval(varl);
    }
}

//Input
const inputContainer = document.getElementById("inputContainer");
const textLength = document.getElementById("text-length");
const inputText = document.getElementById("inputText");

inputText.addEventListener("keyup", function(){
    var characters = inputText.value.split("");
    textLength.innerText = characters.length;
})