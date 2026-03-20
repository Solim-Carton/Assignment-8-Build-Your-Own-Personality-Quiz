console.log("script.js connected!");

let totalPoints = 0;

// Grab result elements from the DOM
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

// Add click listeners to all answer buttons
document.querySelectorAll('.answer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    totalPoints += parseInt(btn.dataset.answer);
  });
});

// Map point totals to a city result
function getResult(points) {
  if (points <= 3)  return { type: "Oslo",      desc: "Has many trains and buses while also having wonderful outdoor options." };
  if (points <= 6)  return { type: "London",    desc: "Has good biking as well as years of history and good museums." };
  if (points <= 9)  return { type: "Rome",      desc: "Great food and transportation as well as good nightlife and lots of history." };
  return                   { type: "Barcelona", desc: "Wonderful weather and people as well as a good transit system and beaches." };
}

// Show the result when button is clicked
function showResult() {
  const result = getResult(totalPoints);
  resultText.textContent = `You got: ${result.type} — ${result.desc}`;
  resultContainer.style.display = 'block';
}

document.getElementById('show-result').addEventListener('click', showResult);