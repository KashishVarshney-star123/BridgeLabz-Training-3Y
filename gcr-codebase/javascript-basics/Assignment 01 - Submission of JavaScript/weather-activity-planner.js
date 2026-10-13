const temperature = 28;
const isRaining = false;
const windSpeed = 12;

let advice;

if (isRaining) {
  advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  advice = "Too cold and windy - stay home.";
} else if (temperature >= 15 || windSpeed <= 20) {
  advice = "Perfect day for a walk.";
}

console.log(`Temperature: ${temperature}°C | Raining: ${isRaining} | Wind: ${windSpeed} km/h`);
console.log(advice);