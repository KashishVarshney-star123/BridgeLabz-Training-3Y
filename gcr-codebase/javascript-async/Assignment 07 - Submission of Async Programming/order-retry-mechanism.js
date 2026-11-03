const FAILURE_CHANCE = 0.5;
const MAX_ATTEMPTS = 3;

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error("Order submission failed"));
      } else {
        resolve("Order submitted");
      }
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
    }
  }

  throw new Error("Order could not be processed");
}

async function main() {
  console.log("Processing order...");

  try {
    const confirmation = await processOrder();
    console.log(`Final result: ${confirmation}`);
  } catch (error) {
    console.log(`Final result: ${error.message}`);
  }
}

main();