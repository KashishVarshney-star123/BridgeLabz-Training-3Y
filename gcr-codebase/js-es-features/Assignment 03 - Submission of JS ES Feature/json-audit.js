"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];

const requiredKeys = ["user", "age"];
const cleanData = [];
const errorLog = [];

for (const [index, entry] of rawData.entries()) {
  const lineNumber = index + 1;

  try {
    const parsed = JSON.parse(entry);
    const missingKeys = requiredKeys.filter((key) => !(key in parsed));

    if (missingKeys.length > 0) {
      throw new Error(`Missing: ${missingKeys.join(", ")}`);
    }

    cleanData.push(parsed);
    console.log(`Line ${lineNumber}: valid`);
  } catch (error) {
    const category = error instanceof SyntaxError ? "Invalid JSON" : "Missing keys";
    errorLog.push({ line: lineNumber, category, message: error.message });
    console.log(`Line ${lineNumber}: [${category}] ${error.message}`);
  }
}

console.log("\nClean array:");
console.log(cleanData);

console.log("\nError log:");
for (const entry of errorLog) {
  console.log(`  Line ${entry.line} -> ${entry.category}`);
}

const adults = cleanData
  .map((person) => ({ user: person.user, age: Number(person.age) }))
  .filter((person) => person.age >= 18);

console.log("\nBonus - users aged 18 or above (age converted to Number):");
console.log(adults);