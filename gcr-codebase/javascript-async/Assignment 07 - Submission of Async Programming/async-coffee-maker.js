const FAILURE_CHANCE = 0.2;

function runStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;

    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(`${stepName} failed`));
      } else {
        console.log(successMessage);
        resolve(stepName);
      }
    }, delay);
  });
}

function boilWater() {
  return runStep("Boiling water", "Step 1: Water boiled");
}

function brewCoffee() {
  return runStep("Brewing coffee", "Step 2: Coffee brewed");
}

function pourIntoCup() {
  return runStep("Pouring coffee", "Step 3: Coffee poured into the cup");
}

console.log("Making coffee...");

boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log(`Coffee process failed: ${error.message}`));