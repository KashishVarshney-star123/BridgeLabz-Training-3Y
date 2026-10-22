"use strict";

function runCode(label, source) {
  try {
    const result = new Function(source)();
    console.log(`${label} -> OK, result: ${result}`);
  } catch (error) {
    console.log(`${label} -> ${error.name}: ${error.message}`);
  }
}

console.log('--- Without "use strict" ---');

runCode(
  "Original code",
  `
    function demo(a, a) {
      total = 10;
      delete total;
      return JSON.stringify([a, typeof total]);
    }
    return demo(5, 10);
  `
);

runCode(
  "Undeclared variable leaks to global",
  `
    function leak() { total = 10; }
    leak();
    const result = "typeof total: " + typeof total;
    delete globalThis.total;
    return result;
  `
);

console.log('\n--- With "use strict" ---');

runCode(
  "Duplicate parameter",
  `
    "use strict";
    function demo(a, a) { return a; }
    return demo(5, 10);
  `
);

runCode(
  "Undeclared variable",
  `
    "use strict";
    function demo(a, b) { total = 10; return total; }
    return demo(5, 10);
  `
);

runCode(
  "delete on a variable",
  `
    "use strict";
    function demo(a, b) { let total = 10; delete total; return total; }
    return demo(5, 10);
  `
);

console.log("\n--- Correct version (ES6) ---");

function demo(a, b) {
  const total = 10;
  const settings = { total };
  delete settings.total;
  return { a, b, total, remainingSettings: settings };
}

console.log(demo(5, 10));