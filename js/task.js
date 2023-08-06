class Task {
    completedAt;
    constructor(id, name, quadrant, completed = false) {
        this.id = id;
        this.name = name;
        this.quadrant = quadrant;
        this.completed = completed;
        this.createdAt = new Date().toISOString();
        this.completedAt = null;
    }

    complete() {
        this.completed = true;
        this.completedAt = new Date().toISOString();
    }

    // Other methods can be added as per your requirements
}

// Function to get stored tasks from browser storage
function getStoredTasks(taskType) {
    var storedTasks = JSON.parse(localStorage.getItem(taskType));
    return storedTasks ? storedTasks : [];
}

// Function to save tasks to browser storage
function saveTasks(taskType, tasks) {
    localStorage.setItem(taskType, JSON.stringify(tasks));
}

function getTaskIdCounter() {
    return parseInt(localStorage.getItem('taskIdCounter')) || 1;
}


function saveTaskIdCounter(taskIdCounter) {
    // Increment the taskIdCounter for the next task
    taskIdCounter++;
    // Store the updated taskIdCounter in local storage
    localStorage.setItem('taskIdCounter', taskIdCounter);
}


function completeTask(taskId) {
    // get stored tasks
    let tasks = getStoredTasks('tasks');
    // find completed task
    const newCompletedTask = tasks.find(t => t.id === taskId);
    // remove completed task from tasks
    tasks = tasks.filter(t => t.id !== taskId);
    // complete task
    newCompletedTask.completed = true;
    // set completion time
    newCompletedTask.completedAt = new Date().toISOString();
    // get completed tasks
    let completedTasks = getStoredTasks('completedTasks');
    // add new completed task
    completedTasks.push(newCompletedTask);
    console.log(completedTasks);
    // store completed task
    saveTasks('completedTasks', completedTasks);
    // remove from DOM
    if (newCompletedTask) {
        const taskCard = document.getElementById(`task-${taskId}`);
        taskCard.remove();
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks('tasks', tasks);
    }
}


function removeTask(taskType, taskId) {
    var tasks = getStoredTasks(taskType);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const taskCard = document.getElementById(`task-${taskId}`);
        taskCard.remove();
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks(taskType, tasks);
    }
}


// Function to add a task to the Eisenhower Matrix
function addTask(quadrantId, taskName) {
    var tasks = getStoredTasks('tasks');

    // get task id
    var taskIdCounter = getTaskIdCounter();

    // create new task
    var newTask = new Task(taskIdCounter, taskName, quadrantId);

    // add new task to task list
    tasks.push(newTask);
    saveTasks('tasks', tasks);

    // save task id counter
    saveTaskIdCounter(taskIdCounter);

    // display tasks
    renderTasks(quadrantId, "tasks");
}
