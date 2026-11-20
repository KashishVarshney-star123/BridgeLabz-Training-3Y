
let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Sandwich", price: 100 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(m => m.name === item);

        if (!food) {
            throw new Error(item + " is not available in the menu!");
        }

        return food.price;
    });

    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

try {
    let order = ["Pizza", "Burger", "Pasta"];

    let bill = calculateBill(order);

    console.log("Order Items:", order);
    console.log("Total Bill: Rs.", bill);

} catch (error) {
    console.log("Order Failed:", error.message);
}
