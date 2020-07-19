// Method calls can take expressions as arguments.Suppose we define a function called rps as follows, which follows the classic rules of the rock - paper - scissors game, but with a slight twist: in the event of a tie, it awards the win to the first of the two fists.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What is the result of the following call?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// Evaluating from the inside out:
// rps("rock", "paper"); --> "paper"
// rps("rock", "scissors"); --> "rock"
// paper vs. rock --> "paper"
// paper vs. rock --> "paper"
// This should output "paper."