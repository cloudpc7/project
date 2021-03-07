/*----- constants -----*/
 const buttons = {
     0: 'blue',
     1: 'red',
     2: 'yellow',
     3: 'green'
 }
 /*----- app's state (variables) -----*/
 let computer, player, reset, time, start
 /*----- cached element references -----*/
time = 3;
 /*----- event listeners -----*/
 document.getElementById("start").addEventListener("click",starter);
 //document.getElementById("reset").addEventListener("click",restart);
/*----- functions -----*/
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

// function restart(e){
//     starter
// }
function init(){

}
init();

function render(){

}