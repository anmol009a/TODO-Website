function renderTasksForm() {
    var q = document.querySelectorAll(".quadrant");

    q.forEach(e => {
        e.innerHTML += `
        <form id="add-task-form-${e.id}" class="add-task-form" data-quadrant-id="${e.id}">
            <input type="text" placeholder="Add New Task" minlength="3" />
            <button type="submit">Add</button>
        </form>
        `;
    });

    // Add event listeners to the add-task-forms
    var addTaskForms = document.querySelectorAll('.add-task-form');
    addTaskForms.forEach(function (form) {
        form.addEventListener('submit', handleAddTaskFormSubmit);
        
    });
}

// Function to handle form submission for adding a task
function handleAddTaskFormSubmit(event) {
    event.preventDefault();

    var form = event.target;
    var quadrantId = form.dataset.quadrantId;
    var taskInput = form.querySelector('input[type="text"]');
    var taskName = taskInput.value.trim();

    if (taskName !== '') {
        addTask(quadrantId, taskName);
        taskInput.value = '';
    }

    // display tasks
    renderTasks(quadrantId, "tasks");
}