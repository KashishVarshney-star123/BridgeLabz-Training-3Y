
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 3 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2000, stock: 10 },
    { id: 5, name: "Table", category: "Furniture", price: 5000, stock: 2 },
    { id: 6, name: "Chair", category: "Furniture", price: 3000, stock: 8 }
];

// 1. Get Low Stock Products
function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

// 2. Sort Products By Price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate Total Inventory Value
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group Products By Category
function groupByCategory() {
    return products.reduce((group, product) => {
        let category = product.category;

        if (!group[category]) {
            group[category] = [];
        }

        group[category].push(product);

        return group;
    }, {});
}

// Testing
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted By Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log(calculateTotalInventoryValue());

console.log("Products Grouped By Category:");
console.log(groupByCategory());
