/*----- constants -----*/
 /*----- app's state (variables) -----*/
 let  start,changeColor, timer, win, turn;
 /*----- cached element references -----*/
computer = {
    0: "red",
    1: "blue",
    2: "yellow",
    3: "green"
}
player = {
    0: "red",
    1: "blue",
    2: "yellow",
    3: "green"
}

randomSequence = Math.floor(Math.random() * (Object.keys(computer).length));
console.log(randomSequence);
 /*----- event listeners -----*/
 document.getElementById("start").addEventListener("click",computeSequence);
 
/*----- functions -----*/
init();

timer = setInterval (function (){
    time = 4;
    time -=1;
    if(time < 0){
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "";
    } else {
        document.getElementById("timer").innerHTML = time;
        if(time === 0){
            document.getElementById("timer").innerHTML = "<p style='color:green;'>GO!</p>";
        }
    }
},3000);

function computeSequence(color){
    
}


function playerSequence(){
}
function play(e){
    if(e.target.id === "red"){
        e.target.style = ""
    }
    changeColor();
};

function init(){
    computeSequence();
    playerSequence();

}