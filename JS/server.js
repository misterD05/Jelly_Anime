let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

async function getCharacters() {
    let response = await fetch(url).then(response => response.json()).then(data => {
    const characters = data.data;
    characters.forEach(character => {
      console.log(character.name);
    });
  })


}

getCharacters();

let strut = "<div class=></div>"