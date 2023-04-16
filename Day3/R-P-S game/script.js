// step1: ask the user to choose R-rock , P-paper, S-scissor
//step2: the computer will always choose R-rock
//step3: if the user selects R, and the computer select S the message "You win " will show
//step4: if the user selects P, and the computer select R the message "You win " will show
//step5: if the user selects S, and  the computer select P the message "You win " will show

//step3: if the user selects s, and the computer select r the message "You losse " will show
//step4: if the user selects r, and the computer select p the message "You loose " will show
//step5: if the user selects p, and  the computer select s the message "You loose " will show

var userChoice = prompt("Choose your weapon: R-rock, P-paper, or S-scissors");
var computerChoice = "R";

if (userChoice === "R") {
  alert = "tie";
} else if (userChoice === "P") {
  alert = "win";
} else if (userChoice === "S") {
  alert = "lose";
}

  console.log(`You chose ${userChoice}. The computer chose ${computerChoice}. You ${result}.`);





