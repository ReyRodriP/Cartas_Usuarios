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
    address.textContent = `${users.address.street}, ${users.address.city}`;

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

    
    const button1 = document.createElement('button');
    button1.type = 'button';
    button1.innerText= 'Ver albumes';
    button1.addEventListener('click', () => {
        //  window.location.href = `https://jsonplaceholder.typicode.com/users/${users.id}/albums`;
        window.location.href = `../html/albumes.html?userId=${users.id}`;
    });
    

    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.innerText= 'Ver post';
    button2.addEventListener('click', () => {
        //  window.location.href = `https://jsonplaceholder.typicode.com/users/${users.id}/posts`;
        window.location.href = (`../html/Posts.html?userId=${users.id}`);
    });
    

    const button3 = document.createElement('button');
    button3.type = 'button';
    button3.innerText= 'Ver quehacer';
    button3.addEventListener('click', () => {
        //  window.location.href = `https://jsonplaceholder.typicode.com/users/${users.id}/todos`;
        window.location.href = (`../html/ToDos.html?userId=${users.id}`);
    });
    
    

    card.appendChild(button1);
    card.appendChild(button2);
    card.appendChild(button3);
    
}


fetchUsuarios(10);

