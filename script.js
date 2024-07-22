let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector(".winner");
let newgame = document.querySelector(".new-btn");
let turnTracker = document.querySelector(".turntracker");
let turn0 = true;

//These are wining pares ..

let winningPairs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


// This code checks the player turn 
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if( turn0 === true ){
        box.innerText = "0";
        turnTracker.innerText = "X";
        turn0 = false ;
        count++
    }else{
        box.innerText = "X";
        turn0 = true ;
        turnTracker.innerText = "0";
        count++
    }
    box.disabled = true;
      
    checkWinner();
    
//This checks wather the game is draw
console.log(count)
    if( count === 9 ){
      msg.classList.remove("hide")
      console.log("draw")
      msg.innerText = "Draw";
    }
    });
});

//this function resets the game

const resetgame = () =>{
    let turn0 = true;
    enablebtns();
    msg.classList.add("hide")
    count = 0;
}

//When the game is over this disables the buttons so that no new winners can occure...

const disablebtns = () =>{
    for( let box of boxes ){
        box.disabled = true ;
    }
}

//This again shows enables the buttons...

const enablebtns = () =>{
    for( let box of boxes ){
        box.disabled = false;
        box.innerText ="";
    }
}

//This function shows the winner

const showWinner = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msg.classList.remove("hide")
    disablebtns();
}


//This function checks who is the winner

const checkWinner = () => {
     for (let pattrens of winningPairs ){
                 val1 = boxes[pattrens[0]].innerText;
                let val2 = boxes[pattrens[1]].innerText;
                let val3 = boxes[pattrens[2]].innerText;
                
//This insures that all buttons are checked then check for...

                if( val1 != "" && val2 != "" && val3 != "" ){
                    if( val1 === val2 && val2 === val3 ){

                       showWinner(val1);
                       turnTracker.style.display = "none"
                    }
                 }   
     }
     
}

reset.addEventListener("click",resetgame)
newgame.addEventListener("click",resetgame)

