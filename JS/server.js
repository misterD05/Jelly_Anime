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

let myPoint = 1;
const numPages = 0;

async function forPages(){
    let response = await fetch(url).then(response => response.json()).then(data => {numPages = data.pagination.last_visible_page;}).catch(error => console.error('Error:', error));
}

forPages();
getCharacters(url + myPoint);

let buttonCharacters = document.getElementById("moreCharacters");

buttonCharacters.addEventListener("click", function(){
    if(myPoint == numPages){
        buttonCharacters.innerHTML = "No More";
    }else{
        myPoint++;
        let newurl = url + myPoint;
        getCharacters(newurl);
    }
});

let strut = "<div class=></div>"