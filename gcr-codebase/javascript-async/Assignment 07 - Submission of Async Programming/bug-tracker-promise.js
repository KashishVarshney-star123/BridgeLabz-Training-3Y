function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3;

      if (apiFailed) {
        reject(new Error("API request failed"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

console.log("Old callback version:");
fetchBugs((bugs) => {
  console.log(bugs);

  console.log("\nNew Promise version:");
  getBugs()
    .then((bugs) => {
      console.log("Bugs fetched successfully:");
      console.table(bugs);
    })
    .catch((error) => {
      console.log(`Could not fetch bugs: ${error.message}`);
    });
});