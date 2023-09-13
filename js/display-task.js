function createTaskItem(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.id = `task-${task.id}`;
    taskItem.innerHTML = `
        <div class="task-name" data-task-id="task-${task.id}">${task.name}</div>
        <div class="task-actions">
            <button class="edit" data-task-id="${task.id}" onclick="editTask(this)"  title="Edit Task">Edit</button>
            <button class="complete" data-task-id="id" onclick="completeTask(${task.id})" title="Complete Task">
                <span class="task-icon">
                    <i class="fas fa-check"></i>
                </span>
            </button>
            <button class="remove" data-task-id="id" onclick="removeTask('tasks',${task.id})" title="Remove Task" style="color:red">X</button>
        </div>
    `;
    return taskItem;
}
// Function to render tasks in the Eisenhower Matrix
function renderTasks(quadrantId, taskType) {
    const tasks = getStoredTasks(taskType);

    const taskListElement = document.getElementById(`task-list-${quadrantId}`);
    taskListElement.innerHTML = '';

    tasks.forEach(function (task) {
        if (task.quadrant === quadrantId) {
            // create task-item
            taskItem = createTaskItem(task);
            // add task-item to task-list
            taskListElement.appendChild(taskItem);
        }
    });
}

function createCompletedTaskCard(completedTask) {
    // create HTML element
    const taskItem = document.createElement('div');
    // add class
    taskItem.className = 'task-item';
    // add id
    taskItem.id = `task-${completedTask.id}`;
    // define innerHTML
    taskItem.innerHTML = `
        <div>
            <h4 class="task-name" data-task-id="task-${completedTask.id}">${completedTask.name}</h4>
            <P>Completed at: ${new Date(completedTask.completedAt).toDateString()}</p>
        </div>
        <div class="task-actions">
            <button class="remove" data-task-id="id" onclick="removeTask('completedTasks', ${completedTask.id})" title="Remove Task">X</button>
        </div>
    `;
    // return created HTML element
    return taskItem;
}

function renderCompletedTasks() {
    // get stored completed-tasks
    const tasks = getStoredTasks("completedTasks");

    // get element by id
    const taskListElement = document.getElementById(`completed-task-list`);

    // reset inner HTML
    taskListElement.innerHTML = '';

    // create and add task-item for each task
    tasks.forEach(function (task) {
        taskItem = createCompletedTaskCard(task);
        taskListElement.appendChild(taskItem);
    });
}

