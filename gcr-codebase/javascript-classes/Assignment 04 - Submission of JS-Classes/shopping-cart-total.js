class Cart {
  constructor() {
    this.items = [];
    this.coupon = null;
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const couponPattern = /^(SAVE|DISC)(\d{2})$/;
    const match = couponPattern.exec(code.trim());

    if (!match) {
      console.log(`Coupon "${code}": invalid format (use SAVE20 or DISC10 style)`);
      return false;
    }

    this.coupon = code.trim();
    this.discountPercent = Number(match[2]);
    console.log(`Coupon "${this.coupon}": applied, ${this.discountPercent}% off`);
    return true;
  }

  getDiscountAmount() {
    return (this.getTotal() * this.discountPercent) / 100;
  }

  getFinalTotal() {
    return this.getTotal() - this.getDiscountAmount();
  }

  printItems() {
    console.log("Cart items:");
    this.items.forEach((item) => {
      console.log(`  ${item.name} | ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}`);
    });
    console.log(`Cart total: ₹${this.getTotal()}`);
  }

  printSummary() {
    console.log(`Discount: ₹${this.getDiscountAmount()}`);
    console.log(`Final total: ₹${this.getFinalTotal()}`);
  }
}

const cart = new Cart();
cart.addItem("Headphones", 2000, 1);
cart.addItem("Keyboard", 1500, 2);
cart.addItem("Mouse", 500, 1);

cart.printItems();

console.log("");
cart.applyCoupon("HELLO");
cart.applyCoupon("save20");

console.log("");
cart.applyCoupon("SAVE20");
cart.printSummary();

console.log("");
cart.applyCoupon("DISC10");
cart.printSummary();

const userCoupon = process.argv[2];
if (userCoupon) {
  console.log(`\nCoupon from user input: ${userCoupon}`);
  if (cart.applyCoupon(userCoupon)) {
    cart.printSummary();
  }
}