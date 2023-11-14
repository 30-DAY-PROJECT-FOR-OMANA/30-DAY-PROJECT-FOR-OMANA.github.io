function addTask() {
    var taskList = document.getElementById("task-list");
    var taskInput = document.getElementById("new-task");
    var task = taskInput.value;
    if (task.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = task;
        li.classList.add("task-item");
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
