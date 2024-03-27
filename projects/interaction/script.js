console.log("hello")

const pid = document.getElementById("increaseText");
var fs=5;
var varl = setInterval(inTimer,50);
function inTimer(){
    pid.innerHTML = "What Time Is It?";
    pid.setAttribute('style',"font-size:"+fs+"px"); 
    fs = fs + 1;
    if(fs>=100){
        clearInterval(varl);
    }
}

setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    time.textContent = hours + ":" + minutes + ":" + seconds;
});