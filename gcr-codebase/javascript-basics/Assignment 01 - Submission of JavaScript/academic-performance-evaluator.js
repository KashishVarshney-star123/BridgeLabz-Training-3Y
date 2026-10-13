const marks = [78, 85, 92, 66, 74];
const maxMarksPerSubject = 100;

let totalMarks = 0;
let hasFailedSubject = false;

for (const mark of marks) {
  totalMarks += mark;
  if (mark < 35) {
    hasFailedSubject = true;
  }
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * maxMarksPerSubject)) * 100;

let result;

if (hasFailedSubject || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else {
  result = "Promoted";
}

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);