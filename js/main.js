/*----- constants -----*/
const colors = {
    0: document.getElementById("red"),
    1: document.getElementById("blue"),
    2: document.getElementById("yellow"),
    3: document.getElementById("green")
}
 /*----- app's state (variables) -----*/
 let  start, timer, win, turn, time, randomSequence, computerSequence, playerSequence;
 /*----- cached element references -----*/
 time = 3;
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

computerSequence = [];
playerSequence = [];
turn = null;

 /*----- event listeners -----*/
 //document.getElementById("start").addEventListener("click",starter());
 document.querySelectorAll("button").addEventListener("click",play);
/*----- functions -----*/
init();

// function computeSequence(){
//     if(turn === null){
//         randomSequence = Math.floor(Math.random() * (Object.keys(computer).length) +1);
//     }
//     const sequence = setTimeout(function (){
//         computerSequence.push(randomSequence);
//     },800);
//     clearTimeout(sequence);
// }
// computeSequence();

function play(e){
    console.log(e.target);
}
function render(){

}

function init(){

}