"use strict";

function originalSequence() {
  console.log(score);
  announce();
  var score = 50;
  function announce() {
    console.log("Game started");
  }
  let status = "ready";
  startGame();
  function startGame() {
    console.log(status);
  }
}

function letBeforeDeclaration() {
  try {
    console.log(status);
  } catch (error) {
    console.log(`let status before declaration -> ${error.name}: ${error.message}`);
  }
  let status = "ready";
}

function fixedSequence() {
  const score = 50;
  const status = "ready";

  function announce() {
    console.log("Game started");
  }

  function startGame() {
    console.log(status);
  }

  console.log(score);
  announce();
  startGame();
}

function arrowVersion() {
  try {
    announceVar();
  } catch (error) {
    console.log(`var arrow before declaration -> ${error.name}: ${error.message}`);
  }

  try {
    announceConst();
  } catch (error) {
    console.log(`const arrow before declaration -> ${error.name}: ${error.message}`);
  }

  var announceVar = () => console.log("Game started");
  const announceConst = () => console.log("Game started");
  const score = 50;
  const status = "ready";
  const startGame = () => console.log(status);

  console.log(score);
  announceConst();
  startGame();
}

console.log("--- Original code ---");
originalSequence();

console.log("\n--- Memory state demo ---");
letBeforeDeclaration();

console.log("\n--- Fixed code ---");
fixedSequence();

console.log("\n--- Arrow function version ---");
arrowVersion();