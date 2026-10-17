let count = 0;

function increment() {
  function logCount() {
    console.log(`Count after increment: ${count}`);
  }

  count += 1;
  logCount();
}

function decrement() {
  function logCount() {
    console.log(`Count after decrement: ${count}`);
  }

  count -= 1;
  logCount();
}

console.log(`Initial count: ${count}`);

increment();
increment();
increment();
decrement();
decrement();

console.log(`Final count: ${count}`);
console.log(`Is logCount accessible outside? ${typeof logCount}`);