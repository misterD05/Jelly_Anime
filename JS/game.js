let guess;
let url = "https://api.jikan.moe/v4/characters";
let urlRandom = "https://api.jikan.moe/v4/random/characters";
let numCharacters = 0;


function getRandomCharacter() {
    description.style.visibility = "hidden";
    newGame.style.visibility = "hidden";
    answer.value = "";
    getCharacter(urlRandom);
    
}

let imgGuess = document.getElementById("imgToGuess");
let description = document.getElementById("description");
let answer = document.getElementById("nameTry");

document.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        if(nameTry.value == guess.name){
            description.innerHTML = "<summary id="butSum">Description</summary>" +  guess.name + "\n" +guess.name_kanji + "\n" + guess.nicknames + "\n" + guess.about;
            description.style.visibility = "visible";
            newGame.style.visibility = "visible";
        }
    }
})


let newGame = document.getElementById("newGame");
newGame.addEventListener("click", function(){
    getRandomCharacter();
})





async function getCharacter(urlM) {
    let response = await fetch(urlM).then(response => response.json()).then(data => {
    
    const character = data.data;
    
        guess = new Character(character.name, character.name_kanji, character.about, character.images)
        imgGuess.src = character.images.jpg.image_url;
        console.log(guess.name);
    }).catch(error => console.error('Error:', error));

}



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