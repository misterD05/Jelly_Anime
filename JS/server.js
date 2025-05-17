let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

async function getCharacters() {
    let response = await fetch(url).then(response => response.json()).then(data => {
    const characters = data.data;
    characters.forEach(character => {
        let imageUrl = character.images;
        let struct = document.createElement("div");
        struct.className = 'character';
        struct.innerHTML = "<img class='profile' src=" + imageUrl.jpg.image_url + " alt=''><div class='nameC'>" + character.name + "</div>"
        charactersContainer.appendChild(struct)  
    });
  }).catch(error => console.error('Error:', error));


}

getCharacters();

let strut = "<div class=></div>"