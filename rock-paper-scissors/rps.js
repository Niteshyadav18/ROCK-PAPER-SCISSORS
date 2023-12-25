// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Selecting HTML elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer choice
const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function for a draw game
const drawGame = () => {
    console.log("GAME IS DRAW");
};

// Function to display the winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Function to play the game based on user choice
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);

    // Generate computer choice
    const compChoice = genComChoice();
    console.log("Computer choice = ", compChoice);

    // Check for a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Check for the winner
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        // Display the winner and update scores
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add click event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get user choice and play the game
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});









