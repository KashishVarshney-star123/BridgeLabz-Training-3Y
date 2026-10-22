"use strict";

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Unknown operation: "${operation}"`);
    this.name = "InvalidOperationError";
  }
}

class DivisionByZeroError extends Error {
  constructor() {
    super("Cannot divide by zero");
    this.name = "DivisionByZeroError";
  }
}

class NegativeRootError extends Error {
  constructor(value) {
    super(`Cannot take square root of negative number: ${value}`);
    this.name = "NegativeRootError";
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw new DivisionByZeroError();
      }
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) {
        throw new NegativeRootError(a);
      }
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(operation);
  }
}

function runOperations(operationList, a, b) {
  let succeeded = 0;
  let failed = 0;

  for (const operation of operationList) {
    try {
      const result = calculate(operation, a, b);
      console.log(`${operation.padEnd(10)} -> ${result}`);
      succeeded++;
    } catch (error) {
      console.log(`${operation.padEnd(10)} -> ${error.name}: ${error.message}`);
      failed++;
    }
  }

  console.log(`Summary: ${succeeded} succeeded, ${failed} failed`);
}

console.log(`Smart Calculator | num1 = ${num1}, num2 = ${num2}`);
runOperations(operations, num1, num2);

console.log("\nExtra tests | num1 = -16, num2 = 4");
runOperations(["root", "modulus"], -16, 4);