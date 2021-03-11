/*----- constants -----*/
const sounds ={ // Create an object that contains the mp3 audio files for each button. 
    0: new Audio("./sound/Goofy Laugh-SoundBible.com-180933118.mp3"),
    1: new Audio("./sound/Slap-SoundMaster13-49669815.mp3"),
    2: new Audio("./sound/Upper Cut-SoundBible.com-1272257235.mp3"),
    3: new Audio("./sound/Upper Cut-SoundBible.com-1272257235.mp3")
}
const duration = 1200; // show code duration; duration of time for computer to randomly choose a color.
const gap = 300; // time between  codes; Creates a gap inbetween computer turn and player turn. 

 /*----- app's state (variables) -----*/
 let isPlayersTurn, randomSequence, playerSequence, gameOver; // end of game, players turn computer's turn & each sequence that was played
 /*----- cached element references -----*/
const msgEl = document.getElementById("msg"); // created h2 element to display message of who's turn it is and status of game. 
const startBtn = document.getElementById("start");
const colorBtns = Array.from(document.querySelectorAll("#board > button")); // creating an array from node list
 
/*----- event listeners -----*/
startBtn.addEventListener("click", handleStartClick); // event listener for when player clicks the start button. 
document.getElementById("board").addEventListener("click", handleColorClick); // event listener for when player clicks buttons. 

/*----- functions -----*/
init();         // init function handles the initialization of the game.
function handleStartClick(){
    init();
    if(!gameOver || isPlayersTurn) return; //if game is not over or it is the player's turn move on.
    gameOver = false; 
    randomSequence = []; // random sequence is an empty array
    doComputerTurn(); // start the computer's turn 
}

function doComputerTurn(){ //Once the computer's starts player is unable to click. 
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
    let codeIdx = 0; // start at index 0
    let timerId = setInterval(function(){ // function used to clear and set timeout function;
        if(codeIdx === randomSequence.length){
            clearInterval(timerId);
            return cb();
        } else {
            const code = randomSequence[codeIdx]; //pick a random number
            //display button as on
            colorBtns[code].classList.add(`light-${code}`); // turn on light;
            sounds[code].play();
            setTimeout(function (){
                colorBtns[code].classList.remove(`light-${code}`); //turn off light
                codeIdx++; // turn off each light in the random sequence. 
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
    } else if (!correctCode){                               // no to arrays are the same so add one;
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