/*----- constants -----*/
const duration = 1800; // show code duration
const gap = 600; // time between  codes
const colors = {
    0: document.getElementById("red"),
    1: document.getElementById("blue"),
    2: document.getElementById("yellow"),
    3: document.getElementById("green")
}
 /*----- app's state (variables) -----*/
 let isPlayersTurn, randomSequence, playerSequence, gameOver;

 /*----- cached element references -----*/
const msgEl = document.getElementById("msg");
const startBtn = document.getElementById("start");
const colorBtns = document.querySelectorAll("#board > button");
 
/*----- event listeners -----*/
startBtn.addEventListener("click", handleStartClick);
document.getElementById("board").addEventListener("click", handleColorClick);

/*----- functions -----*/
init();
function handleStartClick(){
    if(!gameOver || isPlayersTurn) return;
    gameOver = false;
    isPlayersTurn = false;
    randomSequence = [];
    render();
    // while (!gameOver){
        //computer sequenece picks random number.
        randomSequence.push(Math.floor(Math.random() * 4));
        console.log(randomSequence);
        render();
        //render computer sequence.
        renderSequence(function (){
            isPlayersTurn = true;
            playerSequence = [];
            render();
        });
    // }
}
function renderSequence(cb){
    let codeIdx = 0;
    let timerId = setInterval(function(){
        if(codeIdx === randomSequence.length){
            clearInterval(timerId);
            return cb();
        } else {
            const code = randomSequence[codeIdx];
            //display button as on
            colorBtns[code].classList.add("light");
            setTimeout(function (){
                colorBtns[code].classList.remove("light");
                codeIdx++;
            }, duration);
        }
    }, duration + gap);
}
function handleColorClick(e){
    if(e.target.id === "board" || gameOver || !isPlayersTurn ) return;
    //what is the state to update and test if player just lost
    // if gameover true show player loss
}

function render(){
    startBtn.style.visibility = gameOver  ? "visible" : "hidden";
    if(gameOver && randomSequence.length === 0){
        msgEl.innerHTML = "Click Start To Play!";
    } else if(gameOver) {
        msgEl.innerHTML = "Game Over!";
    } else if (isPlayersTurn){
        msgEl.innerHTML = `LEVEL ${randomSequence.length} - Your Turn!`;
    } else {
        msgEl.innerHTML = `LEVEL ${randomSequence.length} - Computer's Turn!`;
    }
}

function init(){
   // for futre icebox
   randomSequence = [];
   gameOver = true;
   isPlayersTurn = false;
   render();
}