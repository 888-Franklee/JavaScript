document.addEventListener('DOMContentLoaded', (event) => {
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        if (todoInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = todoInput.value;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.addEventListener('click', () => {
                li.classList.toggle('done');
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });
});
