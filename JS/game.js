function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let guess;
let url = "https://api.jikan.moe/v4/characters";

let numCharacters = 0;

async function forNumC(){
    let response = await fetch(url).then(response => response.json()).then(data => {numCharacters = data.pagination.items.total;}).catch(error => console.error('Error:', error));
}

async function getCharacter(urlM) {
    let response = await fetch(urlM).then(response => response.json()).then(data => {
    
    const character = data.data;
    
        guess = new Character(character.name, character.name_kanji, character.about, character.images)
        imgGuess.src = character.images.jpg.image_url;
    }).catch(error => console.error('Error:', error));


}



async function getRandomCharacter() {
    description.style.visibility = "hidden";
    newGame.style.visibility = "hidden";
    forNumC()
    character = getRandomInt(1, numCharacters);
    getCharacter(url + "/" + character);
    
}

let imgGuess = document.getElementById("imgToGuess");
let description = document.getElementById("description");
let answer = document.getElementById("nameTry");

document.addEventListener("keydown", function(event){
    if(event.keycode == 13){
        if(nameTry.value == guess.name){
            description.innerHTML += guess.nam + "\n" +guess.name_kanji + "\n" + guess.nicknames + "\n" + guess.about;
            description.style.visibility = "visible";
            newGame.style.visibility = "visible";
        }
    }
})


let newGame = document.getElementById("newGame");
newGame.addEventListener("click", function(){
    getRandomCharacter();
})

class Character{
    constructor(name, name_kanji, nicknames, about, images){
        this.name = name;
        this.name_kanji = name_kanji;
        this.nicknames = nicknames;
        this.about = about;
        this.images = images;
    }
}

getRandomCharacter()