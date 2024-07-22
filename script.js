let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector(".winner");
let newgame = document.querySelector(".new-btn")

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

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked") 
    if( turn0 === true ){
        box.innerText = "0";
        turn0 = false ;
    }else{
        box.innerText = "X";
        turn0 = true ;
    }
    box.disabled = true;

    checkWinner();
    });
});

//this function resets the game

const resetgame = () =>{
    let turn0 = true;
    enablebtns();
    msg.classList.add("hide")
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

//This function shows the winner and it is called in the winner checking function

const showWinner = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msg.classList.remove("hide")
    disablebtns();
}

//This function checks who is the winner

const checkWinner = () => {
     for (let pattrens of winningPairs ){
                let val1 = boxes[pattrens[0]].innerText;
                let val2 = boxes[pattrens[1]].innerText;
                let val3 = boxes[pattrens[2]].innerText;
                
//This insures that all buttons are checked...

                if( val1 != "" && val2 != "" && val3 != "" ){
                    if( val1 === val2 && val2 === val3 ){

                       showWinner(val1);
                    }
                 }   
     }
     
}

reset.addEventListener("click",resetgame)
newgame.addEventListener("click",resetgame)

