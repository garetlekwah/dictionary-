const searchBtn = document.getElementById("search-btn");
const wordInput = document.getElementById("word-input");
const resultBox = document.getElementById("result");
const wordEl = document.getElementById("word");
const partEl = document.getElementById("partOfSpeech");
const defEl = document.getElementById("definition");
const exampleEl = document.getElementById("example");
const playBtn = document.getElementById("play-sound");
const themeToggle = document.getElementById("theme-toggle");

let audio;

// Search function
searchBtn.addEventListener("click", async () => {
  const word = wordInput.value.trim();
  if (!word) return alert("Please enter a word!");

  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const data = await res.json();

  if (data.title) {
    alert("Word not found!");
    return;
  }

  const info = data[0];
  wordEl.textContent = info.word;
  partEl.textContent = info.meanings[0].partOfSpeech;
  defEl.textContent = info.meanings[0].definitions[0].definition;
  exampleEl.textContent = info.meanings[0].definitions[0].example || "No example available.";

  if (info.phonetics[0] && info.phonetics[0].audio) {
    audio = new Audio(info.phonetics[0].audio);
    playBtn.style.display = "inline";
  } else {
    playBtn.style.display = "none";
  }

  resultBox.classList.remove("hidden");
});

// Play pronunciation
playBtn.addEventListener("click", () => {
  if (audio) audio.play();
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});
