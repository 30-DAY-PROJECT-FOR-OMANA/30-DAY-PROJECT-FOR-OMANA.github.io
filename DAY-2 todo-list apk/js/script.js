document.getElementById("addButton").addEventListener("click", function() {
    var taskContainer = document.getElementById("list-box");

    // Create a new textarea element
    var newTask = document.createElement("textarea");
    newTask.placeholder = "Enter your task...";

    // Append the new textarea to the taskContainer
    taskContainer.appendChild(newTask);
});
