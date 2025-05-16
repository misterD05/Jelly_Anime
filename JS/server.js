let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

let response = fetch(url).then(response => response.json()).then(data => console.log(data));


for(let i = 0; i < response.length; i++){
    console.log(response[i].name);
    
}

let strut = "<div class='character'><img class='profile' src='' alt=''><div class='nameC'>Name</div></div>"