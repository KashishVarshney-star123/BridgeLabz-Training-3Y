function applyOperation(numbers, operation) {
  const result = [];

  for (const number of numbers) {
    result.push(operation(number));
  }

  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

const numbers = [1, 2, 3, 4];

console.log(`Original: ${numbers}`);
console.log(`Doubled: ${applyOperation(numbers, double)}`);
console.log(`Squared: ${applyOperation(numbers, square)}`);
console.log(`Inline callback (add 10): ${applyOperation(numbers, (number) => number + 10)}`);