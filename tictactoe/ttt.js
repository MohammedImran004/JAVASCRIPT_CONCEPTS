let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rst");
let message = document.querySelector(".message");
let turn = true;
let moves = Array(9).fill(null);
const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "X";
            box.style.backgroundColor = "yellow";
            moves[box.id] = "X";
            turn = false;
        } else {
            box.innerText = "O";
            box.style.backgroundColor = "pink";
            moves[box.id] = "O";
            turn = true;
        }
        box.style.pointerEvents = "none"; // Prevent clicking again on the same box
        checkWinner();
    });
});

function checkWinner() {
    let winner = null;
    let winningPattern = null;

    winPatterns.forEach((pattern) => {
        const [a, b, c] = pattern;
        if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
            winner = moves[a];
            winningPattern = pattern; // Store the winning pattern to highlight
        }
    });

    if (winner) {
        message.innerText = `Player ${winner} wins!`;
        highlightWinner(winningPattern);
        endGame();
    } else if (!moves.includes(null)) {
        message.innerText = "It's a draw!";
    }
}

function highlightWinner(pattern) {
    pattern.forEach(index => {
        document.getElementById(index).classList.add("highlight");
    });
}

function endGame() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"; // Disable all clicks once a winner is determined
    });
}

resetBtn.addEventListener("click", () => {
    moves.fill(null);
    message.innerText = "";
    turn = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.backgroundColor = "lightgray";
        box.style.pointerEvents = "auto"; // Enable clicks again
        box.classList.remove("highlight"); // Remove highlight on reset
    });
});
