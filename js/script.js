document.addEventListener('DOMContentLoaded', function () {
    addNav();
    // Render tasks in each quadrant of the Eisenhower Matrix
    renderTasks('important-urgent', 'tasks');
    renderTasks('important-not-urgent', 'tasks');
    renderTasks('not-important-urgent', 'tasks');
    renderTasks('not-important-not-urgent', 'tasks');

    renderTasksForm();
});