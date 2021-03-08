/*----- constants -----*/
 /*----- app's state (variables) -----*/
 let computer, player, reset, start,changeColor, timer;
 /*----- cached element references -----*/

 time = 4;

computer = {
    0: document.getElementById("red"),
    1: document.getElementById("blue"),
    2: document.getElementById("yellow"),
    3: document.getElementById("green")
}
player = {
    0: document.getElementById("red"),
    1: document.getElementById("blue"),
    2: document.getElementById("yellow"),
    3: document.getElementById("green")
}
 /*----- event listeners -----*/
 document.getElementById("start").addEventListener("click",computeSequence);
 
/*----- functions -----*/
init();

timer = setInterval (function (){
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

function computeSequence(){
    const compute = computer[Object.keys(computer)[Math.floor(Math.random() * Object.keys(computer).length)]];
    timer;
}


function playerSequence(){
    for(let i in player){
        player[i].addEventListener("click",play);
    }
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