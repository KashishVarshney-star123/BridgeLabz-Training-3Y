const userName = "Kashish";
const age = 21;
const isStudent = true;
const skills = ["HTML", "CSS", "JavaScript"];
const profile = { course: "AI & Data Science", year: 3 };
const middleName = null;
let phoneNumber;

function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const summary = [
  { label: "userName", value: userName, type: getType(userName) },
  { label: "age", value: age, type: getType(age) },
  { label: "isStudent", value: isStudent, type: getType(isStudent) },
  { label: "skills", value: skills, type: getType(skills) },
  { label: "profile", value: profile, type: getType(profile) },
  { label: "middleName", value: middleName, type: getType(middleName) },
  { label: "phoneNumber", value: phoneNumber, type: getType(phoneNumber) },
];

console.table(summary);