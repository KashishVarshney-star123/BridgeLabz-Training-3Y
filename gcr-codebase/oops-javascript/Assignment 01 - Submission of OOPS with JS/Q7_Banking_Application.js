
class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log("Deposited: Rs.", amount);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        if (amount <= 0) {
            throw new Error("Enter a valid withdrawal amount.");
        }

        this.#balance -= amount;
        console.log("Withdrawn: Rs.", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(5000);

// Valid Deposits
account.deposit(2000);
account.deposit(1000);

console.log("Current Balance:", account.getBalance());

// Invalid Withdrawal
try {
    account.withdraw(10000);
} catch (error) {
    console.log("Transaction Failed:", error.message);
}

console.log("Final Balance:", account.getBalance());
