/*----- constants -----*/
const sounds ={ // Create an object that contains the mp3 audio files for each button. 
    0: new Audio("./sound/Goofy Laugh-SoundBible.com-180933118.mp3"),
    1: new Audio("./sound/Slap-SoundMaster13-49669815.mp3"),
    2: new Audio("./sound/Upper Cut-SoundBible.com-1272257235.mp3"),
    3: new Audio("./sound/Upper Cut-SoundBible.com-1272257235.mp3")
}
const duration = 1200; 
const gap = 300; 

 /*----- app's state (variables) -----*/
 let isPlayersTurn, randomSequence, playerSequence, gameOver;
 /*----- cached element references -----*/
const msgEl = document.getElementById("msg"); 
const startBtn = document.getElementById("start");
const colorBtns = Array.from(document.querySelectorAll("#board > button")); 
 
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
            colorBtns[code].classList.add(`light-${code}`); // turn on light;
            sounds[code].play();
            setTimeout(function (){
                colorBtns[code].classList.remove(`light-${code}`); //turn off light
                codeIdx++; 
            }, duration);// amount of time for the function the sequence to push in the numbers. 
        }
    }, duration + gap);
}
function handleColorClick(e){ // function for player pressing the buttons. 
    if(e.target.id === "board" || gameOver || !isPlayersTurn ) return;
    const code = colorBtns.indexOf(e.target);
    sounds[code].play();
    console.log(code);
    playerSequence.push(code);// push the clicked button into an array
    const codeIdx = playerSequence.length -1;
    const correctCode = playerSequence[codeIdx] === randomSequence[codeIdx];
    if (correctCode && randomSequence.length === codeIdx +1){// decide if what the player clicked 
        doComputerTurn();                                   //and the random sequence match
    } else if (!correctCode){                               // no two arrays are the same so add one;
        gameOver = true;
        render();
    }
}

function render(){ // render the board of the game, player or computer's turn;
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

function init(){ // initialize function 
   // for futre icebox
   randomSequence = [];
   gameOver = true;
   isPlayersTurn = false;
   render();
}