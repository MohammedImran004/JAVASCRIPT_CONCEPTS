let rock= document.getElementById("rock")
let paper = document.getElementById("paper");
let scissors = document.getElementById("Scissor");
function FinalWinner(user) {
    let computer = document.getElementById("Comp");
    let userScore = document.getElementById("result");
    let computerResult = Math.floor(Math.random() * 3);
    if(computerResult==0)
    {
        computer.style.backgroundColor = 'red';
    }
    else if(computerResult==1)
    {
        computer.style.backgroundColor = 'yellow';
    }
    else
    {
        computer.style.backgroundColor = 'white';
    }
    if ((user == 0 && computerResult == 1) || (user == 1 && computerResult == 2) || (user == 2 && computerResult == 0)) {
        userScore.innerHTML = "You lose";
    } else if (user == computerResult) {
        userScore.innerHTML = "Match draw";
    } else {
        userScore.innerHTML = "You Win";
    }
}
function UserClickRock() {
    FinalWinner(0);
}
function UserClickPaper() {
    FinalWinner(1);
}
function UserClickScissor() {
    FinalWinner(2);
}