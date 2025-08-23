const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const wordTitle = document.getElementById('wordTitle');
const definitionEl = document.getElementById('definition');
const examplesEl = document.getElementById('examples');
const pronunciationEl = document.getElementById('pronunciation');
const originEl = document.getElementById('origin');

// Using Free Dictionary API
async function fetchWord(word){
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    if(data.title && data.title === "No Definitions Found"){
      wordTitle.textContent = "Word not found";
      definitionEl.textContent = "";
      examplesEl.innerHTML = "";
      pronunciationEl.textContent = "";
      originEl.textContent = "";
      return;
    }

    const wordData = data[0];

    wordTitle.textContent = wordData.word;
    definitionEl.textContent = wordData.meanings[0].definitions[0].definition || "No definition available";

    // Examples
    examplesEl.innerHTML = "";
    if(wordData.meanings[0].definitions[0].example){
      const li = document.createElement('li');
      li.textContent = wordData.meanings[0].definitions[0].example;
      examplesEl.appendChild(li);
    }

    // Pronunciation
    pronunciationEl.textContent = wordData.phonetic ? `Pronunciation: ${wordData.phonetic}` : "";

    // Origin
    originEl.textContent = wordData.origin ? `Origin: ${wordData.origin}` : "";

  } catch(err){
    console.error(err);
    wordTitle.textContent = "Error fetching data";
    definitionEl.textContent = "";
    examplesEl.innerHTML = "";
    pronunciationEl.textContent = "";
    originEl.textContent = "";
  }
}

searchBtn.addEventListener('click', () => {
  const word = searchInput.value.trim();
  if(word) fetchWord(word);
});

searchInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    searchBtn.click();
  }
});
