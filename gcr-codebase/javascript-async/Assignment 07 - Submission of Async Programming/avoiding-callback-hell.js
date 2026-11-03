function runStage(stageName, callback) {
  setTimeout(() => {
    console.log(`${stageName} stage completed`);
    callback();
  }, 1000);
}

function pipelineWithCallbacks(onFinish) {
  runStage("Design", () => {
    runStage("Build", () => {
      runStage("Test", () => {
        runStage("Deploy", () => {
          runStage("Celebrate", () => {
            onFinish();
          });
        });
      });
    });
  });
}

function runStageAsync(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${stageName} stage completed`);
      resolve();
    }, 1000);
  });
}

async function pipelineWithAsyncAwait() {
  await runStageAsync("Design");
  await runStageAsync("Build");
  await runStageAsync("Test");
  await runStageAsync("Deploy");
  await runStageAsync("Celebrate");
}

console.log("--- Version 1: Nested callbacks ---");

pipelineWithCallbacks(async () => {
  console.log("Callback pipeline finished\n");

  console.log("--- Version 2: async/await ---");
  await pipelineWithAsyncAwait();
  console.log("async/await pipeline finished");
});