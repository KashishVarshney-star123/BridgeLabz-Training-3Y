const rawTitle = "  wireless headphones PRO  ";

const trimmedTitle = rawTitle.trim();
const lowerCaseTitle = trimmedTitle.toLowerCase();
const renamedTitle = lowerCaseTitle.replace("pro", "Pro Edition");

const formattedTitle = renamedTitle
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Original title: "${rawTitle}" (length: ${rawTitle.length})`);
console.log(`Cleaned title: "${formattedTitle}"`);
console.log(`Cleaned title length: ${formattedTitle.length}`);