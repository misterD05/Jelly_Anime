let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

let response = fetch(url).then(function (response){return response.json()});

console.log(response);

let strut = "<div class='character'><img class='profile' src='' alt=''><div class='nameC'>Name</div></div>"