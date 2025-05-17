let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

async function getCharacters() {
    let response = await fetch(url).then(response => response.json()).then(data => console.log(data));

    console.log(response)

}

getCharacters();

let strut = "<div class='character'><img class='profile' src='' alt=''><div class='nameC'>Name</div></div>"