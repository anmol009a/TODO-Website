// history.js
function generateCompleteTaskCard(completedTask) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.id = `task-${completedTask.id}`;
    taskCard.innerHTML = `
        <div>${completedTask.name} - Completed at: ${completedTask.completedAt}</div>
        <div>
            <button onclick="removeTask('completedTasks', ${completedTask.id})" title="Remove Task">X</button>
        </div>
    `;
    return taskCard;
}


// document.addEventListener('DOMContentLoaded', function () {
    
//     // get completed tasks
//     let completedTasks = getStoredTasks('completedTasks');

//     const completedTaskList = document.getElementById('completed-task-list');
//     // Generate the list of completed tasks
//     completedTasks.forEach(function (task) {
//         taskItem = generateCompleteTaskCard(task);
//         completedTaskList.appendChild(taskItem);
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // Render tasks in each quadrant of the Eisenhower Matrix
    renderTasks('important-urgent', 'completedTasks');
    renderTasks('important-not-urgent', 'completedTasks');
    renderTasks('not-important-urgent', 'completedTasks');
    renderTasks('not-important-not-urgent', 'completedTasks');

    // Add event listeners to the add task forms
    var addTaskForms = document.querySelectorAll('.add-task-form');
    addTaskForms.forEach(function (form) {
        form.addEventListener('submit', handleAddTaskFormSubmit);
    });
});
