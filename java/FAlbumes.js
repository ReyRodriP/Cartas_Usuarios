const usuarioContainer = document.querySelector(".Album-Container");

//Nota: Esto es un QueryString, investiga mas.
    addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
        fetchAlbum(userId);
    } else {
        alert('Dele para atras');
    }
});

function fetchAlbum(userId) {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)

    .then((res) => res.json())
    .then((data) => {
        createAlbum(data);
    });
}

function createAlbum(Albumes) {
    Albumes.filter(Album => {
        const AlbumCard = document.createElement("div");
        AlbumCard.classList.add("Album-block");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = `Titulo: ${Album.title}`;

        AlbumCard.appendChild(title);

        usuarioContainer.appendChild(AlbumCard);
    });
}
