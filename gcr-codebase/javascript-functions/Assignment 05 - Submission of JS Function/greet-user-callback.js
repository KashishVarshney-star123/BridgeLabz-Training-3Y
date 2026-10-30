function showWelcomeMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

console.log("Program started");
greetUser("Kashish", showWelcomeMessage);
console.log("Program ended");