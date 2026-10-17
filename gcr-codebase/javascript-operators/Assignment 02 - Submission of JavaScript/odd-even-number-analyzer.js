const numbers = [];

for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

const results = [];

for (const number of numbers) {
  if (number % 3 === 0 && number % 5 === 0) {
    results.push("FizzBuzz");
  } else if (number % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

numbers.forEach((number, index) => {
  console.log(`${number}: ${results[index]}`);
});

console.log("Results array:");
console.log(results.join(", "));