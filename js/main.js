/*----- constants -----*/
 const buttons = {
     0: 'blue',
     1: 'red',
     2: 'yellow',
     3: 'green'
 }
 /*----- app's state (variables) -----*/
 let computer, player, reset, time, start;
 /*----- cached element references -----*/
time = 3;
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
 document.getElementById("start").addEventListener("click",starter);
 //document.getElementById("reset").addEventListener("click",restart);
 
/*----- functions -----*/
init();
function starter(e){
    let start = setInterval(function(){
        if(time <=0){
            clearInterval(start);
            document.getElementById("timer").innerHTML = "";
        }else{
            document.getElementById("timer").innerHTML = time;
        }

    time -= 1;
    },3000);
}

function computeSequence(){
    for(let i in computer){

    }
}
computeSequence();

function playerSequence(){
    for(let i in player){
        player[i].addEventListener("click",play);
        function play(e){
            console.log(player[i]);
        }
    }
    
}
playerSequence();
function init(){

}