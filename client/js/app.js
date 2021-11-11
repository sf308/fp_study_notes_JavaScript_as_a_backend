// ********************************************
// SETUP
const msgBtn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-cat-form');
const catsList = document.querySelector('ul');
const delBtn = document.querySelector('#delete-cats')

// Bind event listeners
msgBtn.addEventListener('click', getMessage);
delBtn.addEventListener('click', deleteCats)

// Fetch all cats as soon as app is loaded
getAllCats();

// ********************************************

// CATS FLOW
function getAllCats(){
    fetch('http://localhost:3000/cats')
        .then(r => r.json())
        .then(appendCats)
        .catch(console.warn)
};

function appendCats(data){
    catsList.innerHTML = ""
    data.cats.forEach(appendCat);
};

function appendCat(catData){
    const newLi = document.createElement('li');
    newLi.textContent = `Name: ${catData.name} || Age: ${catData.age}`
    catsList.append(newLi);
};

function deleteCats(){
    fetch('http://localhost:3000/cats', { method: 'DELETE'})
        .then(getAllCats)
        .catch(console.warn)
}

// ********************************************

// MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.json())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(data){
    const msg = document.createElement('p');
    msg.textContent = data.message;
    msg.style.color = 'red';
    document.body.append(msg);
};

// ********************************************