const rules = {
  name: {
    pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    message: "Name can contain alphabets only",
  },
  email: {
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Enter a valid email like example@domain.com",
  },
  phone: {
    pattern: /^\d{10}$/,
    message: "Phone must be exactly 10 digits",
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase, 1 number and 1 special character",
  },
};

const form = document.getElementById("registrationForm");
const formResult = document.getElementById("formResult");

function validateField(fieldName) {
  const input = document.getElementById(fieldName);
  const errorSpan = document.getElementById(`${fieldName}Error`);
  const { pattern, message } = rules[fieldName];
  const value = fieldName === "password" ? input.value : input.value.trim();
  const isValid = pattern.test(value);

  input.style.border = isValid ? "2px solid green" : "2px solid red";
  errorSpan.textContent = isValid ? "" : message;
  errorSpan.style.color = "red";

  return isValid;
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
    formResult.textContent = "Registration successful!";
    formResult.style.color = "green";
  } else {
    formResult.textContent = "Please fix the errors above.";
    formResult.style.color = "red";
  }
});