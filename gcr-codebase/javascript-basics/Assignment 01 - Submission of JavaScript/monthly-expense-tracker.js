const expenses = [
  { category: "Food", amount: 4500 },
  { category: "Travel", amount: 1800 },
  { category: "Rent", amount: 7000 },
  { category: "Bills", amount: 2200 },
  { category: "Leisure", amount: 1500 },
];

let total = 0;

for (const expense of expenses) {
  total += expense.amount;
}

const average = total / expenses.length;

let finalAmount = total;
finalAmount += total * 0.1;

console.log(`Total expenses: ₹${total.toFixed(2)}`);
console.log(`Average per category: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);