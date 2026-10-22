"use strict";

class TransactionError extends Error {
  constructor(message, type) {
    super(message);
    this.name = "TransactionError";
    this.type = type;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

const validTransactions = [];
const invalidTransactions = [];

function validateTransaction(transaction) {
  if (transaction === null) {
    throw new TransactionError("Null entry found", "null");
  }
  if (transaction.id === undefined || transaction.amount === undefined) {
    throw new TransactionError("Missing amount or id", "missing");
  }
  if (transaction.amount < 0) {
    throw new TransactionError(`Negative amount: ${transaction.amount}`, "negative");
  }
  return transaction;
}

for (const [index, transaction] of transactions.entries()) {
  try {
    const validTransaction = validateTransaction(transaction);
    validTransactions.push(validTransaction);
    console.log(
      `Transaction ${index + 1}: valid (id ${validTransaction.id}, amount ${validTransaction.amount})`
    );
  } catch (error) {
    invalidTransactions.push({
      position: index + 1,
      type: error.type,
      message: error.message,
    });
    console.log(`Transaction ${index + 1}: ${error.name} - ${error.message}`);
  }
}

const negativeCount = invalidTransactions.filter((entry) => entry.type === "negative").length;
const missingCount = invalidTransactions.filter((entry) => entry.type === "missing").length;
const nullCount = invalidTransactions.filter((entry) => entry.type === "null").length;

console.log("\nFinal Report");
console.log("------------");
console.log(`Total transactions: ${transactions.length}`);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
console.log(`  Negative amount: ${negativeCount}`);
console.log(`  Missing amount or id: ${missingCount}`);
console.log(`  Null entries: ${nullCount}`);