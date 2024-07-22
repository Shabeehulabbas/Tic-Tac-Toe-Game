let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector(".winner");
let newgame = document.querySelector(".new-btn");
let turnTracker = document.querySelector(".turntracker");
let turn0 = true;

// These are wining pairs ...
let winningPairs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let count = 0;
let drawCount = 0;
let playerXWins = 0;
let player0Wins = 0;

turnTracker.innerText = "Player 0's turn";

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "0";
            turnTracker.innerText = "Player X's turn";
            turn0 = false;
            count++;
            box.style.color = "var(--aqua)";
        } else {
            box.innerText = "X";
            turnTracker.innerText = "Player 0's turn";
            turn0 = true;
            count++;
            box.style.color = "var(--yellowish)";
        }

        box.disabled = true;

        checkWinner();

        // This checks whether the game is a draw...
        if (count === 9 && !checkWinner()) {
            drawCount++;
            updateWinnerCount();
            turnTracker.style.visibility = "hidden";
        }
    });
});

// This function resets the game ...
const resetgame = () => {
    turn0 = true;
    enablebtns();
    count = 0;
    turnTracker.style.visibility = "visible";
    turnTracker.innerText = "Player 0's turn"; // Reset turn tracker to initial state
};

// When the game is over this disables the buttons so that no new winners can occur...
const disablebtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// This again enables the buttons...
const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// This function shows the winner ...
const showWinner = (winner) => {
    disablebtns();
    updateWinnerCount(winner);
    turnTracker.style.visibility = "hidden";
};

// Function to update the winner count ...
const updateWinnerCount = (winner) => {
    if (winner === "X") {
        playerXWins++;
    } else if (winner === "0") {
        player0Wins++;
    }

    // To show wins and draws
    document.querySelector(".count-draw").innerText = drawCount;
    document.querySelector(".count-player0").innerText = player0Wins;
    document.querySelector(".count-playerX").innerText = playerXWins;
};

// This function checks who is the winner ...
const checkWinner = () => {
    for (let patterns of winningPairs) {
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;

        // This ensures that all buttons are checked then check for...
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
                return true; // Winner found
            }
        }
    }
    return false; // No winner
};

reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);
