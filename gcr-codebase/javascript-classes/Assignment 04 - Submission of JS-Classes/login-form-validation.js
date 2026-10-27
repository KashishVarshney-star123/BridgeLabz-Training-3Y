const rules = {
  username: [
    { pattern: /^.{5,}$/, message: "Username must be at least 5 characters" },
  ],
  password: [
    { pattern: /^.{8,}$/, message: "Password must be at least 8 characters" },
    { pattern: /\d/, message: "Password must include a number" },
    { pattern: /[A-Z]/, message: "Password must include an uppercase letter" },
    { pattern: /[a-z]/, message: "Password must include a lowercase letter" },
    { pattern: /[^A-Za-z0-9]/, message: "Password must include a special character" },
  ],
};

const form = document.getElementById("loginForm");
const loginResult = document.getElementById("loginResult");

function validateField(fieldName) {
  const input = document.getElementById(fieldName);
  const errorBox = document.getElementById(`${fieldName}Error`);
  const value = fieldName === "username" ? input.value.trim() : input.value;

  const errors = rules[fieldName]
    .filter((rule) => !rule.pattern.test(value))
    .map((rule) => rule.message);

  input.style.border = errors.length === 0 ? "2px solid green" : "2px solid red";
  errorBox.innerHTML = errors.join("<br>");
  errorBox.style.color = "red";

  return errors.length === 0;
}

Object.keys(rules).forEach((fieldName) => {
  document.getElementById(fieldName).addEventListener("input", () => {
    validateField(fieldName);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const results = Object.keys(rules).map((fieldName) => validateField(fieldName));
  const allValid = results.every((result) => result === true);

  if (allValid) {
    loginResult.textContent = "Login successful! Welcome back.";
    loginResult.style.color = "green";
  } else {
    loginResult.textContent = "Login failed. Please fix the errors above.";
    loginResult.style.color = "red";
  }
});