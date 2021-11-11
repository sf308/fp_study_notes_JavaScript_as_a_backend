const catbutton = document.querySelector("#cat");
const dogbutton = document.querySelector("#dog");
const unicornbutton = document.querySelector("#unicorn");
const resultsection = document.querySelector("section");

async function getdata(type){
    const newP = document.createElement('p');
    const response = await fetch(`http://localhost:3000/${type}`)
    response = await response.json()
    newP.textContent = response.animal;
    resultsection.appendChild(newP);
}

catbutton.addEventListener('click', e => {
    getdata(cats)
 });

