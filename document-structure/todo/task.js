const taskForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
let taskIndex = 0;

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    taskList.insertAdjacentHTML('beforeEnd', '<div class="task" id="task' + taskIndex + '"><div class="task__title">' + taskInput.value + '</div><a href="#" class="task__remove" id="task__remove' + taskIndex + '">&times;</a></div>');
    let taskRemove = document.getElementById("task__remove" + taskIndex);
    let task = document.getElementById("task" + taskIndex);
    taskIndex++;
    taskRemove.addEventListener("click", () => {
    task.remove();
    });
    taskInput.value = "";
});