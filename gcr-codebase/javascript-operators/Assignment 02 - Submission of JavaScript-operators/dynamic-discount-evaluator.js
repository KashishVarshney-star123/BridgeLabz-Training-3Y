const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

const discountedCart = [];

for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 10;
  } else if (product.category === "fashion") {
    discountRate = 5;
  }

  const finalItemPrice = product.price - (product.price * discountRate) / 100;

  discountedCart.push({
    item: product.item,
    price: product.price,
    discountRate: discountRate,
    finalItemPrice: finalItemPrice,
  });
}

let finalTotal = discountedCart.reduce((sum, product) => sum + product.finalItemPrice, 0);

const extraDiscountApplied = originalTotal > 50000;

if (extraDiscountApplied) {
  finalTotal -= (finalTotal * 5) / 100;
}

for (const product of discountedCart) {
  console.log(
    `${product.item}: ₹${product.price.toFixed(2)} | ${product.discountRate}% off | ₹${product.finalItemPrice.toFixed(2)}`
  );
}

console.log(`Original total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra 5% discount applied: ${extraDiscountApplied ? "Yes" : "No"}`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);