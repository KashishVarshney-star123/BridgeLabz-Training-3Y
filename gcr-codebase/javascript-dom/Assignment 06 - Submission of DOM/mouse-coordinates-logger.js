const trackingBox = document.getElementById("trackingBox");
const clientXLabel = document.getElementById("clientX");
const clientYLabel = document.getElementById("clientY");
const dotCountLabel = document.getElementById("dotCount");
const clearButton = document.getElementById("clearButton");

let dotCount = 0;

trackingBox.addEventListener("mousemove", (event) => {
  clientXLabel.textContent = event.clientX;
  clientYLabel.textContent = event.clientY;
});

trackingBox.addEventListener("mouseleave", () => {
  clientXLabel.textContent = "-";
  clientYLabel.textContent = "-";
});

trackingBox.addEventListener("dblclick", (event) => {
  const boxRect = trackingBox.getBoundingClientRect();

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${event.clientX - boxRect.left - trackingBox.clientLeft}px`;
  dot.style.top = `${event.clientY - boxRect.top - trackingBox.clientTop}px`;

  trackingBox.appendChild(dot);

  dotCount++;
  dotCountLabel.textContent = dotCount;
  console.log(`Dot ${dotCount} dropped at clientX: ${event.clientX}, clientY: ${event.clientY}`);
});

clearButton.addEventListener("click", () => {
  trackingBox.querySelectorAll(".dot").forEach((dot) => dot.remove());
  dotCount = 0;
  dotCountLabel.textContent = dotCount;
});