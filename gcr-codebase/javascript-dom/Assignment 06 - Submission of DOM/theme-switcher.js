const themeButtons = document.querySelectorAll(".theme-button");
const currentThemeLabel = document.getElementById("currentTheme");

function applyTheme(themeName) {
  document.body.setAttribute("class", `theme-${themeName}`);
  document.body.setAttribute("data-theme", themeName);

  themeButtons.forEach((button) => {
    const isActive = button.getAttribute("data-theme-value") === themeName;
    button.setAttribute("aria-pressed", String(isActive));
  });

  currentThemeLabel.textContent = document.body.getAttribute("data-theme");
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-value"));
  });
});

applyTheme("light");