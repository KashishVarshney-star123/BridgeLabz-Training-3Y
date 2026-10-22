"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

function processEmployee(employee) {
  const name = employee.name;
  const salary = Number(employee.salary);
  const years = Number(employee.years);

  if (!name) {
    throw new Error("Missing employee name");
  }
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new Error(`Invalid salary or years for ${name}`);
  }

  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  const totalPay = salary + bonus;

  return { name, salary, years, bonus, totalPay };
}

for (const employee of employees) {
  try {
    const result = processEmployee(employee);
    console.log(
      `Employee: ${result.name} | Salary: ₹${result.salary.toFixed(2)} | Years: ${result.years} | Bonus: ₹${result.bonus.toFixed(2)} | Total: ₹${result.totalPay.toFixed(2)}`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}