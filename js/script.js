function generateTaskCard(task) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.id = `task-${task.id}`;
    taskCard.innerHTML = `
      <div>${task.name}</div>
        <div>
        <button onclick="completeTask(${task.id})" title="Complete Task"><span class="task-icon">
        <i class="fas fa-check"></i>
      </span></button>
        <button onclick="removeTask('tasks',${task.id})" title="Remove Task">X</button>
        </div>
    `;
    return taskCard;
}


function createTaskItem(task) {
    var taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.id = 'task-' + task.id;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-btn');

    taskItem.textContent = task.name;

    taskItem.appendChild(removeButton);
    return taskItem;
}

// Function to render tasks in the Eisenhower Matrix
function renderTasks(quadrantId, taskType) {
    var tasks = getStoredTasks(taskType);

    var taskListElement = document.getElementById(`task-list-${quadrantId}`);
    taskListElement.innerHTML = '';

    tasks.forEach(function (task) {
        if (task.quadrant === quadrantId) {
            var taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            // Adding a class
            taskItem.classList.add('task-item');
            // Adding an ID
            taskItem.id = 'task-' + task.id;
            taskItem = generateTaskCard(task);
            taskListElement.appendChild(taskItem);
        }
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
}



document.addEventListener('DOMContentLoaded', function () {
    // Render tasks in each quadrant of the Eisenhower Matrix
    renderTasks('important-urgent', 'tasks');
    renderTasks('important-not-urgent', 'tasks');
    renderTasks('not-important-urgent', 'tasks');
    renderTasks('not-important-not-urgent', 'tasks');

    // Add event listeners to the add task forms
    var addTaskForms = document.querySelectorAll('.add-task-form');
    addTaskForms.forEach(function (form) {
        form.addEventListener('submit', handleAddTaskFormSubmit);
    });
});

function addNewTask() {
    let urgentTask = document.getElementById("urgent-task").value;
    let impTask = document.getElementById("imp-task").value;
    let taskName = document.getElementById("new-task").value;

    if (urgentTask == 'true') {
        if (impTask == 'true') {
            q = "important-urgent";
        } else {
            q = "not-important-urgent";
        }
    } else {
        if (impTask == 'true') {
            q = "important-not-urgent";
        } else {
            q = "not-important-not-urgent";
        }
    }
    addTask(q, taskName);
}