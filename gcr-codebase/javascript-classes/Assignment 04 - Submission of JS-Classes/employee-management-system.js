class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
    return this.salary;
  }

  getDetails() {
    return `ID ${this.id} | ${this.name} | ${this.department} | Monthly: ₹${this.salary} | Annual: ₹${this.getAnnualSalary()}`;
  }
}

const employees = [
  new Employee(1, "Amit", "Engineering", 50000),
  new Employee(2, "Sara", "Design", 42000),
  new Employee(3, "Kiran", "Marketing", 38000),
  new Employee(4, "Ravi", "Engineering", 60000),
  new Employee(5, "Neha", "HR", 35000),
];

function calculateTotalPayout(employeeList) {
  return employeeList.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
}

console.log("All employees:");
employees.forEach((employee) => console.log(employee.getDetails()));
console.log(`Total annual payout: ₹${calculateTotalPayout(employees)}`);

employees[0].applyBonus(10);

console.log("\nAfter 10% bonus on Amit:");
employees.forEach((employee) => console.log(employee.getDetails()));
console.log(`Total annual payout: ₹${calculateTotalPayout(employees)}`);