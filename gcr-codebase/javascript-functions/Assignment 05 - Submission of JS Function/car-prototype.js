function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

console.log("Same method shared:", car1.getDetails === car2.getDetails);
console.log("car1 has own getDetails:", car1.hasOwnProperty("getDetails"));
console.log("Prototype has getDetails:", Car.prototype.hasOwnProperty("getDetails"));
console.log("car1 prototype is Car.prototype:", Object.getPrototypeOf(car1) === Car.prototype);