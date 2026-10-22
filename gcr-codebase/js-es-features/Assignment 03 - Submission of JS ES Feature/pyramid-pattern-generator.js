"use strict";

const requestedRows = Number(process.argv[2]);
const rows = Number.isInteger(requestedRows) && requestedRows > 0 ? requestedRows : 5;

function pyramidWithLet(totalRows) {
  for (let row = 1; row <= totalRows; row++) {
    let line = "";
    for (let star = 1; star <= row; star++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  console.log(`After loop with let -> row: ${typeof row}, star: ${typeof star}, line: ${typeof line}`);
}

function pyramidWithVar(totalRows) {
  for (var row = 1; row <= totalRows; row++) {
    var line = "";
    for (var star = 1; star <= row; star++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  console.log(`After loop with var -> row: ${row}, star: ${star}, line: "${line.trimEnd()}"`);
}

function pyramidWithVarReuse(totalRows) {
  for (var i = 1; i <= totalRows; i++) {
    var currentRow = i;
    var line = "";
    for (var i = 1; i <= currentRow; i++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
}

function undeclaredLoopVariable() {
  try {
    for (k = 1; k <= 3; k++) {}
  } catch (error) {
    console.log(`Undeclared loop variable -> ${error.name}: ${error.message}`);
  }
}

console.log(`--- Pyramid with let (${rows} rows) ---`);
pyramidWithLet(rows);

console.log(`\n--- Same pyramid with var (${rows} rows) ---`);
pyramidWithVar(rows);

console.log("\n--- var re-use bug: same variable i in both loops ---");
pyramidWithVarReuse(rows);

console.log("\n--- Undeclared loop variable in strict mode ---");
undeclaredLoopVariable();