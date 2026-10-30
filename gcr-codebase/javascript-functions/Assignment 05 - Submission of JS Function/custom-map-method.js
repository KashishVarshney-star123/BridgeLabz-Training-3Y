Array.prototype.myMap = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
};

const numbers = [1, 2, 3];

console.log(numbers.myMap((num) => num * 2));
console.log(numbers.map((num) => num * 2));

console.log(["a", "b", "c"].myMap((item, index) => `${index}: ${item}`));

console.log("Original array unchanged:", numbers);

const customResult = numbers.myMap((num) => num * 2);
const builtInResult = numbers.map((num) => num * 2);
console.log("Same result as built-in map:", JSON.stringify(customResult) === JSON.stringify(builtInResult));
console.log("myMap exists on Array.prototype:", Array.prototype.hasOwnProperty("myMap"));