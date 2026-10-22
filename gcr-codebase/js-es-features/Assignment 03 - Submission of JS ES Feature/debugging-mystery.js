"use strict";

function showMessageBroken() {
  greeting = "Welcome";
  console.log(greeting);
}

try {
  showMessageBroken();
} catch (error) {
  console.log(`Broken version -> ${error.name}: ${error.message}`);
}

function showMessage() {
  const greeting = "Welcome";
  console.log(`Fixed version -> ${greeting}`);
}

showMessage();

console.log(`greeting outside function: ${typeof greeting}`);