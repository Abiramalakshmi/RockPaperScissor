let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game draw! Play again");
    msg.innerText = "Game draw! Play again";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        console.log("You lose.");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#AF1740";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper => comp
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors => comp 
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // user - scissors
            // paper, rock => comp
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked!", userChoice);
        playGame(userChoice);
    });
});

