const pepTalks = [
  "Smash that task like it’s match point!",
  "No scrolling—just serving up results!",
  "You're on the court now. Play like a pro!",
  "Focus like it's a tie-breaker. Let’s win this set!",
  "Serve your energy. Return with action!",
  "Every click is a forehand—make it count!",
    "Don’t lob your time—slam it down!",
    "Crush distractions like a backhand winner!",
    "Match mode: ON. Rally through your to-dos!",
    "Stay sharp. Stay fast. Stay in the zone!"
];

// Pick a random pep talk
const randomTalk = pepTalks[Math.floor(Math.random() * pepTalks.length)];

// Create the banner
const banner = document.createElement('div');
banner.id = 'coach-pep-banner';
banner.textContent = randomTalk;

// Attach it to the page
document.body.appendChild(banner);

// Optional: Make it disappear after 5 seconds
setTimeout(() => {
  banner.remove();
}, 5000);
