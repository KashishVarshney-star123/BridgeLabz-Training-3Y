const rules = {
  name: {
    pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    message: "Name can contain alphabets only",
  },
  email: {
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Enter a valid email like example@domain.com",
  },
  seats: {
    pattern: /^(?:[1-9]|10)$/,
    message: "Seats must be a number from 1 to 10",
  },
};

const form = document.getElementById("bookingForm");
const ticketDetails = document.getElementById("ticketDetails");

function validateField(fieldName) {
  const input = document.getElementById(fieldName);
  const errorSpan = document.getElementById(`${fieldName}Error`);
  const { pattern, message } = rules[fieldName];
  const isValid = pattern.test(input.value.trim());

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

  if (!allValid) {
    ticketDetails.textContent = "Please fix the errors above to book your ticket.";
    return;
  }

  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value.trim()),
  };

  console.log("Booking object:", booking);

  ticketDetails.textContent =
    `Ticket Confirmed\n` +
    `----------------\n` +
    `Name : ${booking.name}\n` +
    `Email: ${booking.email}\n` +
    `Seats: ${booking.seats}`;
});