/**
 * The Rock, paper, or Scissors Game
 * This game will be played between the cpmputer and human.Once Human will select Rock,Paper, or Scissors.
 * The Winner will be selected based on this rules:
 * - Rock can break Scissors => Rock wins
 * - Scissors can cut Paper => Papers wins
 * - Scissors can but Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

/**
 * Assumptions :
 * 1. We have to prompt the user to get their inputs.
 * 2. The Computer's seletion will be random
 * 3. We have to compare user and computer's choice
 * 4. We need to annouce the winner.
 * 5.After the Winner announcement, we may want to ask the user to play again or quit from the game.
 */

function rockPaperScissorsGame() {
  const userChoicePrompt = prompt("Enter Rock, Paper, or Scissors");
  const userChoice = userChoicePrompt.toLocaleLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  switch (true) {
    case userChoice === "rock" && computerChoice === "scissors":
    case userChoice === "paper" && computerChoice === "rock":
    case userChoice === "scissors" && computerChoice === "paper":
      console.log("OH ho You win !!!");
      break;

    case userChoice === computerChoice:
      console.log("Match tie");
      break;

    case userChoice === "paper" && computerChoice === "scissors":
    case userChoice === "scissors" && computerChoice === "rock":
    case userChoice === "rock" && computerChoice === "paper":
      console.log("oh HO computer win !!!");
      break;

    default:
      console.log("Please enter valid input");
      break;
  }

  const playAgainPrompt = prompt("Do you want to play again?");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing, see Yaa nextt timeee !!!");
  }

  console.log("User choice =", userChoice);
  console.log("Computerchoice =", computerChoice);
}

// Start this game
rockPaperScissorsGame();

// ______________________Number guessing game__________________________
/**
 * Let us play a number guessing game.
 * Your will ask user for a number between 1 to 10.Once user will enter a number, you will tell user if the entered number is lower or higher.With this information, user will change the number and finally guess the right number.Yo also need to show of attempts made by users to reach to this right guess.
 */

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess;
let attempts = 0;

while (guess !== secretNumber) {
  // Ask user for input
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  attempts++;

  if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess === secretNumber) {
    alert(`Congratulations! You guessed it in ${attempts} attempts.`);
    break;
  } else {
    alert("Invalid input. Please enter a number.");
  }
}
