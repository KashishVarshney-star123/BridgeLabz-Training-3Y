const bonus = 5000;

function calculateSalary(permanent) {
  const salary = 40000;
  const isPermanent = permanent;
  let totalSalary = salary;

  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`Permanent: ${isPermanent} | Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

console.log(`Global bonus after calls: ₹${bonus}`);
console.log(`Is salary accessible outside? ${typeof salary}`);