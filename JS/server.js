let charactersContainer = document.getElementById('characters');
let url = "https://api.jikan.moe/v4/characters";

let response = fetch(url).then(function (response){return response.json()});



let obj = eval('(' + response + ')');

let data = [];

for (let i in obj)
    data.push(obj[i].json());

console.log(res);

for(let i = 0; i < data.length; i++){
    console.log(response.data[i].name);
    
}

let strut = "<div class='character'><img class='profile' src='' alt=''><div class='nameC'>Name</div></div>"