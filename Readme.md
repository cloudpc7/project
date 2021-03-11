# SIMON
[Simon](https://cloudpc7.github.io/project/)

> **Simon** is a game where the fun never stops and you must succeed at memorizing the next color in order to achieve the next level. What level can you get up to is up to you. Can you win or will you just keep on playing?!
<img src="/simonPic.jpg">;

# Technologies Used...
1. [**_HTML_**](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [**_CSS_**] (https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [**_Javascript_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# Getting Started...
> Get started by simply clicking on the start button. Once the start button is clicked the computer will push a button and make a sound. Based on which button is pressed it is up to the player to keep up and memorize the sequence of buttons that have been clicked. If you advance a level it will display up top if you lose GAME OVER! PLay again!

### HTML
* The _HTML_ is pretty simple it uses a body completed with a title then a div with four buttons styled with id's inside.

### CSS
* The CSS was created by using _flexbox_.
* Each button is styled with two different lights one for the original board and one for the flash.
* items are centered to display in the middle of the screen for readability and functionality. 

### PsuedoCode
* The PsuedoCode is created to provide instructions on how the Simon game was designed.
* The game is developed by using the [Guide to Building a Browser Game](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac) and help with the _Browser Game App Flow_.

### Javascript

* Following the guide I created _constants_, _state variables_, _cached variables_, _eventListeners_, and the _initializer_. 

* Initializing the game starts with the **start button**.

* Once the game is started a [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) function is set in motion and calls whether or not the game is over or whether it is the players turn.

* If it is the computers turn  I create a function to handle the computer turn and generate a random sequence that is generated within a certain amount of time known by a constant called a _duration_ and a _gap_. 

* The duration and gap allows time for the computer to turn on and off the lights in-between sequencing incrementing the index of the light and random sequence as the game is played. 

* The next step was to render the lights to the dom. I rendered the game by displaying a message during the computer turn or player's turn. If the game is in motion The start button is not displayed and then I perform a callbackfunction to render the sequence of the computer. 

* The render sequence is called and performs initialization of the index sequence. If the random sequence and the length of the sequence equals 0  return to the callback function. 

* I created a variable to instruct where the index of the random number is and then turned on the light. 
* Then there is a [_setTimeOut_] interval function to turn off the light. This is an asynchronous call back function to perform a set of steps within a certain amount of time "_duration_"