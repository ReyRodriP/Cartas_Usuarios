const usuarioContainer = document.querySelector(".ToDos-Container");

addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    
    if (userId) {
        fetchToDos(userId);
    } else {
        console.log('Dele para atras');
    }
});

function fetchToDos(userId) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((res) => res.json())
        .then((data) => {
            createTareas(data);
        })
}

function createTareas(tareas) {
    tareas.forEach(tarea => {
        const tareaCard = document.createElement("div");
        tareaCard.classList.add("tarea-block");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = tarea.title;

        const completed = document.createElement("p");
        completed.classList.add("completed");
        completed.textContent = tarea.completed ? 'Completado' : 'Sin Completar';

        if (tarea.completed) {
            completed.classList.add('completed-yes');
        } else {
            completed.classList.add('completed-no');
        }

        tareaCard.appendChild(title);
        tareaCard.appendChild(completed);

        usuarioContainer.appendChild(tareaCard);
    });
}
