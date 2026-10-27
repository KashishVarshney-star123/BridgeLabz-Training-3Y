class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price -= (this.price * percent) / 100;
    return this.price;
  }

  getDetails() {
    return `ID: ${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Electronics"),
  new Product(3, "Office Chair", 7500, "Furniture"),
  new Product(4, "Notebook", 120, "Stationery"),
  new Product(5, "Headphones", 2499, "Electronics"),
];

console.log("All products:");
products.forEach((product) => console.log(product.getDetails()));

products[0].applyDiscount(10);
console.log("\nAfter 10% discount on Laptop:");
console.log(products[0].getDetails());

const expensiveProducts = products.filter((product) => product.price > 1000);
console.log("\nProducts with price above ₹1000:");
expensiveProducts.forEach((product) => console.log(product.getDetails()));