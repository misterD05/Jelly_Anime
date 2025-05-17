let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters?page=";

async function getCharacters(urlM) {
    let response = await fetch(urlM).then(response => response.json()).then(data => {
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

async function forPages(){
    let response = await fetch(url).then(response => response.json()).then(data => {
        let numPages = data.meta.pagination.total_pages;
        for(let i = 0; i < numPages; i++){
            let urlnew = url + numPages;
            getCharacters(urlnew);
        }
    }).catch(error => console.error('Error:', error));
}

forPages();

let strut = "<div class=></div>"