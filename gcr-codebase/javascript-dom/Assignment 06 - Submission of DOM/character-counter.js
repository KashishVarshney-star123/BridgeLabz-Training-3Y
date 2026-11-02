const MAX_CHARACTERS = 100;
const WARNING_THRESHOLD = 20;

const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");
const resetButton = document.getElementById("resetButton");

function updateCounter() {
  if (textInput.value.length > MAX_CHARACTERS) {
    textInput.value = textInput.value.slice(0, MAX_CHARACTERS);
  }

  const remaining = MAX_CHARACTERS - textInput.value.length;

  counter.textContent = `${remaining} characters remaining`;
  counter.classList.remove("yellow", "red");
  warning.classList.remove("yellow", "red");

  if (remaining === 0) {
    counter.classList.add("red");
    warning.classList.add("red");
    warning.textContent = "Limit reached. You cannot type more.";
  } else if (remaining <= WARNING_THRESHOLD) {
    counter.classList.add("yellow");
    warning.classList.add("yellow");
    warning.textContent = `Warning: only ${remaining} characters left`;
  } else {
    warning.textContent = "";
  }
}

function isLimitReached() {
  const selectedLength = textInput.selectionEnd - textInput.selectionStart;
  return textInput.value.length - selectedLength >= MAX_CHARACTERS;
}

textInput.addEventListener("keydown", (event) => {
  const isTypingKey = event.key.length === 1 || event.key === "Enter";
  const hasShortcutKey = event.ctrlKey || event.metaKey || event.altKey;

  if (isTypingKey && !hasShortcutKey && isLimitReached()) {
    event.preventDefault();
  }
});

textInput.addEventListener("paste", (event) => {
  event.preventDefault();

  const pastedText = event.clipboardData.getData("text");
  const selectedLength = textInput.selectionEnd - textInput.selectionStart;
  const freeSpace = MAX_CHARACTERS - (textInput.value.length - selectedLength);

  if (freeSpace > 0) {
    textInput.setRangeText(pastedText.slice(0, freeSpace), textInput.selectionStart, textInput.selectionEnd, "end");
    updateCounter();
  }
});

textInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
  textInput.value = "";
  updateCounter();
  textInput.focus();
});

updateCounter();