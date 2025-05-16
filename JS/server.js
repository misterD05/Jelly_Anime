let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

let response = fetch(url).then(function (response){return response.json()});

console.log(response.data);
console.log(response.data[0]);
let data = JSON.parse(response.data.json());

for(let i = 0; i < data.length; i++){
    console.log(response.data[i].name);
    
}

let strut = "<div class='character'><img class='profile' src='' alt=''><div class='nameC'>Name</div></div>"