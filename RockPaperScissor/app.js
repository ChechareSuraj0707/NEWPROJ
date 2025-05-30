let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 const genCompChoice = (userChoice) => {
    const option = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx]
 }

 const showWinner = (userWin , userChoice, compChoice) =>{
    if(userWin)
    {
        userScore++;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    }
    else
    {
        compScore++;
        msg.innerText = `You Loose !" ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
 }
 const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice == compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true ;
        }
         else
        {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin ,userChoice ,compChoice);
    }
 }

 const drawGame = () => {
      msg.innerText = "Game Was Draw ! Play again";
       msg.style.backgroundColor = "#081b31";
 }

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id")
        playGame(userChoice);
    })
})