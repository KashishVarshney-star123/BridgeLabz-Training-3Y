const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

const passedStudents = scores.filter((score) => score >= 50);

const scoreReport = scores.map((score, index) => {
  const status = score >= 50 ? "Pass" : "Fail";
  return `Student ${index + 1}: ${score} (${status})`;
});

console.log("Student Performance Summary");
console.log("---------------------------");
scoreReport.forEach((line) => console.log(line));
console.log("---------------------------");
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedStudents.length} out of ${scores.length}`);