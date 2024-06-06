const usuarioContainer = document.querySelector(".usuarios-container");

function fetchUsuario(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    .then((res) => res.json())
    .then((data) => {
        createUsuario(data);
    });
}

function fetchUsuarios(number) {
    for(let i = 1; i <= number; i++) {
        fetchUsuario(i);
    }
}

function createUsuario(users) {
    const card = document.createElement("div");
    card.classList.add("usuario-block");

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = users.name;

    const email = document.createElement("p");
    email.classList.add("email");
    email.textContent = users.email;

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = users.address;

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = users.phone;

    const website = document.createElement("p");
    website.classList.add("website");
    website.textContent = users.website;
    
    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    

    usuarioContainer.appendChild(card);
}

fetchUsuarios(10);