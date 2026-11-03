const FAILURE_CHANCE = 0.2;

function respondFromServer(serverName, delayInSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(`${serverName} failed`));
      } else {
        resolve(`${serverName} responded in ${delayInSeconds}s`);
      }
    }, delayInSeconds * 1000);
  });
}

function startServers() {
  return [respondFromServer("Server A", 2), respondFromServer("Server B", 3)];
}

console.log("Deployment started...");

Promise.all(startServers())
  .then((results) => {
    results.forEach((result) => console.log(result));
    console.log("Deployment completed for all servers!");
  })
  .catch((error) => {
    console.log(`Promise.all failed: ${error.message}`);
  });

Promise.race(startServers())
  .then((fastest) => {
    console.log(`Fastest response: ${fastest}`);
  })
  .catch((error) => {
    console.log(`Promise.race failed: ${error.message}`);
  });