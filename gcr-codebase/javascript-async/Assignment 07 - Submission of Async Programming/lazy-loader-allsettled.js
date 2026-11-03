function loadProfile(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Profile failed to load"));
      } else {
        resolve("Profile Loaded");
      }
    }, 2000);
  });
}

function loadPosts(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Posts failed to load"));
      } else {
        resolve("Posts Loaded");
      }
    }, 1500);
  });
}

function loadMessages(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Messages failed to load"));
      } else {
        resolve("Messages Loaded");
      }
    }, 1000);
  });
}

const moduleNames = ["Profile", "Posts", "Messages"];
const failingModuleIndex = Math.floor(Math.random() * moduleNames.length);

console.log(`Randomly chosen to fail: ${moduleNames[failingModuleIndex]}`);
console.log("Loading dashboard modules...\n");

const startTime = Date.now();

Promise.allSettled([
  loadProfile(failingModuleIndex === 0),
  loadPosts(failingModuleIndex === 1),
  loadMessages(failingModuleIndex === 2),
]).then((results) => {
  const totalTime = Date.now() - startTime;

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]}: succeeded -> ${result.value}`);
    } else {
      console.log(`${moduleNames[index]}: failed -> ${result.reason.message}`);
    }
  });

  const succeeded = results.filter((result) => result.status === "fulfilled").length;
  const failed = results.length - succeeded;

  console.log(`\nSucceeded: ${succeeded}, Failed: ${failed}`);
  console.log(`Total time taken: ${totalTime} ms`);
});