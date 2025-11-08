const newTask = document.getElementById("new-task");
const taskInput = document.getElementById("add__task");
const addBtn = document.getElementById("task-btn");
const filterAll = document.getElementById("filter-all");
const filterActive = document.getElementById("filter-active");
const filterCompleted = document.getElementById("filter-completed");
const tasksContainer = document.getElementById("tasks");

let tasks = [];
let currentFilter = "all";

function renderTasks() {
    tasksContainer.innerHTML = "";

    let listToShow = [];
    if (currentFilter === "all") listToShow = tasks;
    if (currentFilter === "active") listToShow = tasks.filter(task => !task.completed);
    if (currentFilter === "completed") listToShow = tasks.filter(task => task.completed);

    listToShow.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskText);
        tasksContainer.appendChild(taskDiv);

    });
}


addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        renderTasks();
    } else {
        alert("Please enter a task");
    }
});


filterAll.addEventListener("click", () => renderTasks(tasks));

filterActive.addEventListener("click", () => {
    alert(activeTasks)
    const activeTasks = tasks.filter(task => !task.completed);
    renderTasks();
});

filterCompleted.addEventListener("click", () => {
    alert(completedTasks)
    const completedTasks = tasks.filter(task => task.completed);
    renderTasks();
});



