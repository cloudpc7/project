/*----- constants -----*/
const duration = 1200; // show code duration
const gap = 300; // time between  codes

 /*----- app's state (variables) -----*/
 let isPlayersTurn, randomSequence, playerSequence, gameOver;

 /*----- cached element references -----*/
const msgEl = document.getElementById("msg");
const startBtn = document.getElementById("start");
const colorBtns = Array.from(document.querySelectorAll("#board > button")); // creating an array from node list
 
/*----- event listeners -----*/
startBtn.addEventListener("click", handleStartClick);
document.getElementById("board").addEventListener("click", handleColorClick);

/*----- functions -----*/
init();
function handleStartClick(){
    init();
    if(!gameOver || isPlayersTurn) return;
    gameOver = false;
    randomSequence = [];
    doComputerTurn();
}

function doComputerTurn(){
    isPlayersTurn = false;
    //computer sequenece picks random number.
    randomSequence.push(Math.floor(Math.random() * 4));
    render();
    //render computer sequence.
    renderSequence(function (){
        isPlayersTurn = true;
        playerSequence = [];
        render();
    });
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
    
    const code = colorBtns.indexOf(e.target);
    console.log(code);
    playerSequence.push(code);
    const codeIdx = playerSequence.length -1;
    const correctCode = playerSequence[codeIdx] === randomSequence[codeIdx];
    if (correctCode && randomSequence.length === codeIdx +1){
        doComputerTurn();
    } else if (!correctCode){
        gameOver = true;
        render();
    }
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