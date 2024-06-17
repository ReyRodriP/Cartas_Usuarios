const usuarioContainer = document.querySelector(".Posts-Container");
const comentariosContainer = document.getElementById('comentarios-container');

// Nota: Esto es un QueryString, investiga más.
addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
        fetchPosts(userId);
    } else {
        alert('Por favor, regrese y seleccione un usuario.');
    }
});

function fetchPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => res.json())
        .then((data) => {
            createPosts(data);
        });
}

function createPosts(posts) {
    posts.map(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("Post-block");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.classList.add("body");
        body.textContent = post.body;

        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-primary');
        button.innerText = 'Comentarios';
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#commentsModal');
        button.addEventListener('click', () => {
            fetchComments(post.id);
        });

        postCard.appendChild(title);
        postCard.appendChild(body);
        postCard.appendChild(button);
        usuarioContainer.appendChild(postCard);
    });
}

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((res) => res.json())
        .then((data) => {
            displayComments(data);
        });
}

function displayComments(comments) {
    comentariosContainer.innerHTML = ''; // Limpiar comentarios previos
    comments.map(comment => {
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-block");

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = `Nombre: ${comment.name}`;

        const email = document.createElement("p");
        email.classList.add("email");
        email.textContent = `Email: ${comment.email}`;

        const body = document.createElement("p");
        body.classList.add("body");
        body.textContent = comment.body;

        commentCard.appendChild(name);
        commentCard.appendChild(email);
        commentCard.appendChild(body);

        comentariosContainer.appendChild(commentCard);
    });
}

