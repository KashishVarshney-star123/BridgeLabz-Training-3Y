const form = document.getElementById("multiStepForm");
const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const progressBar = document.getElementById("progressBar");
const stepLabel = document.getElementById("stepLabel");
const summary = document.getElementById("summary");

const validators = [
  {
    inputId: "name",
    errorId: "nameError",
    isValid: (value) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value.trim()),
    requiredMessage: "Name is required",
    invalidMessage: "Name can contain alphabets only",
  },
  {
    inputId: "email",
    errorId: "emailError",
    isValid: (value) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.trim()),
    requiredMessage: "Email is required",
    invalidMessage: "Enter a valid email like example@domain.com",
  },
  {
    inputId: "password",
    errorId: "passwordError",
    isValid: (value) => value.length >= 6,
    requiredMessage: "Password is required",
    invalidMessage: "Password must be at least 6 characters",
  },
];

let currentStep = 0;

function validateStep(index) {
  const { inputId, errorId, isValid, requiredMessage, invalidMessage } = validators[index];
  const input = document.getElementById(inputId);
  const errorBox = document.getElementById(errorId);

  let message = "";

  if (input.value.trim() === "") {
    message = requiredMessage;
  } else if (!isValid(input.value)) {
    message = invalidMessage;
  }

  input.classList.toggle("invalid", message !== "");
  errorBox.textContent = message;

  return message === "";
}

function showStep(index) {
  currentStep = index;

  steps.forEach((step, stepIndex) => {
    step.classList.toggle("active", stepIndex === index);
  });

  stepLabel.textContent = `Step ${index + 1} of ${steps.length}`;
  progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
  backButton.disabled = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Finish" : "Next";

  document.getElementById(validators[index].inputId).focus();
}

function showSummary() {
  document.getElementById("summaryName").textContent = document.getElementById("name").value.trim();
  document.getElementById("summaryEmail").textContent = document.getElementById("email").value.trim();
  document.getElementById("summaryPassword").textContent = "•".repeat(document.getElementById("password").value.length);

  form.classList.add("hidden");
  stepLabel.classList.add("hidden");
  summary.classList.remove("hidden");
}

function restart() {
  form.reset();

  validators.forEach(({ inputId, errorId }) => {
    document.getElementById(inputId).classList.remove("invalid");
    document.getElementById(errorId).textContent = "";
  });

  summary.classList.add("hidden");
  form.classList.remove("hidden");
  stepLabel.classList.remove("hidden");
  showStep(0);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateStep(currentStep)) {
    return;
  }

  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
  } else {
    showSummary();
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    showStep(currentStep - 1);
  }
});

restartButton.addEventListener("click", restart);

validators.forEach(({ inputId }, index) => {
  document.getElementById(inputId).addEventListener("input", (event) => {
    if (event.target.classList.contains("invalid")) {
      validateStep(index);
    }
  });
});

showStep(0);