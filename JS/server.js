let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

async function getCharacters() {
    let response = await fetch(url).then(response => response.json()).then(function (data){return data.data});

    console.log(response.data)

    response.data.forEach(item => {
      let character = item;
      let imageUrl = item.images;
      let struct = document.createElement("div");
      struct.className = 'character';
      struct.innerHTML = "<img class='profile' src=" + imageUrl.jpg.image_url + " alt=''><div class='nameC'>" + character.name "</div>"
      charactersContainer.appendChild(struct)  
    })

}

getCharacters();

let strut = "<div class=></div>"