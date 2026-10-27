const user = { name: "John", email: "john@mail.com", age: 21 };

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const message = document.getElementById("message");
const userDetails = document.getElementById("userDetails");

function fillForm() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
}

function renderUser() {
  userDetails.innerHTML = "";

  Object.entries(user).forEach(([key, value]) => {
    const item = document.createElement("li");
    item.textContent = `${key}: ${value}`;
    userDetails.appendChild(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newName = nameInput.value.trim();
  const newEmail = emailInput.value.trim();
  const newAge = Number(ageInput.value);

  if (!newName || !newEmail || Number.isNaN(newAge) || newAge <= 0) {
    message.textContent = "Please fill all fields with valid values.";
    message.style.color = "red";
    return;
  }

  user.name = newName;
  user.email = newEmail;
  user.age = newAge;

  console.log("Updated user object:", user);

  renderUser();
  message.textContent = "User object updated successfully.";
  message.style.color = "green";
});

fillForm();
renderUser();