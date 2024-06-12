const usuarioContainer = document.querySelector(".Posts-Container");

//Nota: Esto es un QueryString, investiga mas.
    addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
        fetchPost(userId);
    } else {
        alert('Dele para atras');
    }
});

function fetchPost(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    .then((res) => res.json())
    .then((data) => {
        createPost(data);
    });
}

function createPost(Posts) {
    Posts.map(Posts => {
        const PostsCard = document.createElement("div");
        PostsCard.classList.add("Post-block");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = Posts.title;

        const body = document.createElement("p");
        body.classList.add("body");
        body.textContent = Posts.body;

        PostsCard.appendChild(title);
        PostsCard.appendChild(body);

        usuarioContainer.appendChild(PostsCard);
    });
}