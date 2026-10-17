const feedback = "Great product! Fast delivery and amazing sound quality!";

const words = feedback.trim().split(" ");
const wordCount = words.length;

const lowerCaseFeedback = feedback.toLowerCase();
const hasNegativeWord =
  lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

let result;

if (hasNegativeWord) {
  result = "Needs Improvement";
} else {
  result = "Positive Feedback";
}

console.log(`Feedback: "${feedback}"`);
console.log(`Word count: ${wordCount}`);
console.log(`Result: ${result}`);