const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}

console.log(`Secret number was: ${secretNumber}`);