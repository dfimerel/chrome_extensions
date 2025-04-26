const compliments = [
  "Your code is cleaner than your browser history!",
  "You have a face for radio and a voice for silent film!",
  "If you were a vegetable, you'd be a cute-cumber!",
  "You're like a software update: slightly annoying, but ultimately necessary.",
  "Your brain has more tabs open than Chrome.",
  "You're the human version of a double rainbow!",
  "If you were a browser tab, I'd never close you.",
  "You have something on your face... oh wait, it's just pure greatness!",
  "You're as rare as a bug-free code release!"
];

//const colors = ["#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#8AC6D1", "#A0E7E5", "#B4F8C8", "#FFADAD"];
const colors = ["#FF6F91"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Show one compliment on page load
const complimentElement = document.getElementById("compliment");
complimentElement.textContent = getRandomItem(compliments);
complimentElement.style.color = getRandomItem(colors);
