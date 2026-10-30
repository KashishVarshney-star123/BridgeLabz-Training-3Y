function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5));
console.log(double(5));
console.log(triple(10));

console.log(`typeof makeMultiplier(3): ${typeof makeMultiplier(3)}`);
console.log(`typeof multiplier outside: ${typeof multiplier}`);