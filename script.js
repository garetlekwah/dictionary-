const searchBtn = document.getElementById('search-btn');
const wordInput = document.getElementById('word-input');
const wordTitle = document.getElementById('word-title');
const wordType = document.getElementById('word-type');
const definition = document.getElementById('definition');
const pronunciation = document.getElementById('pronunciation');
const continentInfo = document.getElementById('continent-info');

searchBtn.addEventListener('click', async () => {
  const word = wordInput.value.trim();
  if(!word) return;

  // Fetch word info from API
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    if(data[0]){
      wordTitle.textContent = data[0].word;
      wordType.textContent = data[0].meanings[0].partOfSpeech;
      definition.textContent = data[0].meanings[0].definitions[0].definition;
      if(data[0].phonetics[0]?.audio){
        pronunciation.src = data[0].phonetics[0].audio;
      }
    } else { wordTitle.textContent = 'Word not found'; }
  } catch(err) { console.error(err); }

  // Example continent info (demo)
  const continents = {
    Africa: "Africa is the 2nd largest continent with rich history and diverse cultures.",
    Europe: "Europe is known for its historical cities and contributions to art, science, and politics.",
    Asia: "Asia is the largest continent with diverse languages and cultures.",
    // add more...
  };
  continentInfo.textContent = continents[word] || '';
});
