# SIMON
[Simon](https://cloudpc7.github.io/project/)

>Simon is a game where the fun never stops and you must succeed at memorizing the next color in order to achieve the next level. What level can you get up to is up to you. Can you win or will you just keep on playing?!

### HTML
* The HTML is pretty simple it uses a body completed with a title then a div with four buttons styled with id's inside. 

### CSS
* The Css was created by using _flexbox_.
* Each button is styled with two different lights one for the original board and one for the flash.
* items are centered to display in the middle of the screen for readability and functionality. 

### PsuedoCode
* The PsuedoCode is created to provide instructions on how the Simon game was designed.
* The game is developed by using the [Guide to Building a Browser Game](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac) and help with the _Browser Game App Flow_.

### Javascript

* Following the guide I created constants, state variables, cached variables, eventListeners, and the initializer. 

* Initializing the game starts with the start button.

* Once the game is started a setInterval function is set in motion and calls whether or not the game is over or whether it is the players turn.

* If it is the computers turn there is a random sequence that is generated within a certain amount of time known by a constant called a duration and a gap. 

* The duration and gap allows time for the computer to turn on and off the lights inbetween sequencing incrementing the index of the light and random sequence as the game is played. 

*
