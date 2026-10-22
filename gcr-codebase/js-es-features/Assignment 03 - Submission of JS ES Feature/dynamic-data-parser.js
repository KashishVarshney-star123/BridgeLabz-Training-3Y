"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

function isValidNumeric(value) {
  if (value === null || value === undefined) {
    return false;
  }
  if (String(value).trim() === "") {
    return false;
  }
  return !Number.isNaN(Number(value));
}

console.log("Conversion Details");
console.log("------------------");

for (const value of apiData) {
  const asNumber = Number(value);
  const asBoolean = Boolean(value);
  const asString = String(value);
  const status = isValidNumeric(value) ? "VALID" : "INVALID";

  console.log(
    `${JSON.stringify(value)} -> Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}" | ${status}`
  );

  if (status === "VALID") {
    validNumbers.push(asNumber);
  } else {
    invalidEntries.push(value);
  }
}

console.log("\nFinal Report");
console.log("------------");
console.log(`Total entries: ${apiData.length}`);
console.log(`Valid numeric entries (${validNumbers.length}):`);
for (const number of validNumbers) {
  console.log(`  ${number}`);
}
console.log(`Invalid entries (${invalidEntries.length}):`);
for (const entry of invalidEntries) {
  console.log(`  ${JSON.stringify(entry)}`);
}