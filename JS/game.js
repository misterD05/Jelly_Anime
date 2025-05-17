function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let guess;
let url = "https://api.jikan.moe/v4/characters/";

const numCharacters = 0;

async function forNumC(){
    let response = await fetch(url).then(response => response.json()).then(data => {numCharacters = data.pagination.items.total;}).catch(error => console.error('Error:', error));
}

async function getCharacters(urlM) {
    let response = await fetch(urlM).then(response => response.json()).then(data => {
    
    const character = data.data;
    
        guess = new Character(character.name, character.name_kanji, character.about)

    }).catch(error => console.error('Error:', error));


}



async function getRandomCharacter() {
    forNumC()
    character = getRandomInt(1, numCharacters);
    getCharacters(url + character);
}

let answer;



class Character{
    constructor(name, name_kanji, nicknames, about){
        this.name = name;
        this.name_kanji = name_kanji;
        this.nicknames = nicknames;
        this.about = about;
    }
}