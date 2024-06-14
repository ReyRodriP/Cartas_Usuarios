const usuarioContainer = document.querySelector(".Album-Container");
const modal_container = document.getElementById('modal_container');
const closeButton = document.getElementById('close');
const FotosContainer = document.getElementById('fotos-container');

// Nota: Esto es un QueryString, investiga más.
addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
        fetchAlbum(userId);
    } else {
        alert('Por favor, regrese y seleccione un usuario.');
    }
});

function fetchAlbum(userId) {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((res) => res.json())
        .then((data) => {
            createAlbum(data);
        });
}

function createAlbum(albumes) {
    albumes.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("Album-block");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = `Titulo: ${album.title}`;

        const button = document.createElement('button');
        button.type = 'button';
        button.innerText= 'Ver fotos';
        button.addEventListener('click', () => {
            fetchPhotos(album.id);
            modal_container.classList.add('show');
        });

        closeButton.addEventListener('click', () => {
            modal_container.classList.remove('show');
        });

        albumCard.appendChild(title);
        albumCard.appendChild(button);
        usuarioContainer.appendChild(albumCard);
    });
}

function fetchPhotos(albumId) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then((res) => res.json())
        .then((data) => {
            displayPhotos(data);
        });
}

function displayPhotos(photos) {
    FotosContainer.innerHTML = ''; 
    photos.forEach(photo => {
        const photoCard = document.createElement("div");
        photoCard.classList.add("photo-block");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = `Titulo: ${photo.title}`;

        const picture = document.createElement("img");
        picture.classList.add("picture");
        picture.src = photo.url;
        picture.alt = photo.title;

        photoCard.appendChild(title);
        photoCard.appendChild(picture);

        FotosContainer.appendChild(photoCard);
    });
}
