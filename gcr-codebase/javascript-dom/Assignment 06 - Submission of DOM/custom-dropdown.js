const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");
const selectedValue = document.getElementById("selectedValue");
const blockerBox = document.getElementById("blockerBox");

function isOpen() {
  return dropdownList.classList.contains("open");
}

function openDropdown() {
  dropdownList.classList.add("open");
  dropdownButton.setAttribute("aria-expanded", "true");
}

function closeDropdown() {
  dropdownList.classList.remove("open");
  dropdownButton.setAttribute("aria-expanded", "false");
}

dropdownButton.addEventListener("click", () => {
  if (isOpen()) {
    closeDropdown();
  } else {
    openDropdown();
  }
});

dropdownList.addEventListener("click", (event) => {
  const option = event.target.closest(".dropdown-option");

  if (!option) {
    return;
  }

  dropdownList.querySelectorAll(".dropdown-option").forEach((item) => {
    item.setAttribute("aria-selected", "false");
  });

  option.setAttribute("aria-selected", "true");
  dropdownButton.textContent = option.textContent;
  selectedValue.textContent = option.dataset.value;
  closeDropdown();
});

document.addEventListener(
  "click",
  (event) => {
    if (isOpen() && !dropdown.contains(event.target)) {
      closeDropdown();
    }
  },
  true
);

blockerBox.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isOpen()) {
    closeDropdown();
    dropdownButton.focus();
  }
});