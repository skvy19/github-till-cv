const toggle = document.getElementById('open-sidebar')
const sideNavbar = document.getElementById('side-navbar')

toggle.onmouseover = function () {
    sideNavbar.style.width = "250px"
}

window.onclick = function () {
    sideNavbar.style.width = "0"
}


// ####################################      Tillägg till uppgift: Github API till CV   ##########################################

// Funktion för att skapa en ny element och sätta upp önskade atributer
function createNewElement(node, attributes){
 const newElement = document.createElement(node);
 for(let key in attributes){
     newElement.setAttribute(key, attributes[key]);
 }
 return newElement;
}


// Fetch från Github
fetch('//api.github.com/users/skvy19/repos')
   .then(response => response.json())
   .catch(err => console.log(err))
   .then(data => data.forEach(repo => {
        const repos = document.getElementById('section-portfolio').querySelector('dl')
        const dd = createNewElement('dd', {class: 'col-6 text-secondary h4'})
        const a = createNewElement('a', {href: `${repo.html_url}`, target: '_blank', style: 'text-decoration: none; color: #818181'})

        repos.appendChild(dd).appendChild(a)
        a.innerHTML += `${repo.name.toLowerCase().replace(/-/g, ' ').replace(/_/g, ' ').replace('vs.', 'vs')}`
        
}))
