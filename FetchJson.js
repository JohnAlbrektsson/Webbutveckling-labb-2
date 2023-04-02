//Hämta json

const studyel = document.querySelector("#Studies-output")
const workel = document.querySelector("#work-output")
fetch("./CV.json")
    .then((response) => response.json())
    .then(data => {
        data.studies.forEach(post => {
            studyel.insertAdjacentHTML('beforeend', `<h4>${post.name}, ${post.date}</h4>`);
            
        });
        data.work.forEach(post => {
            workel.insertAdjacentHTML('beforeend', `<h4>${post.name}</h4><h5>${post.date}</h5> <p>${post.description}</p><br>`)
        });
        
    });
