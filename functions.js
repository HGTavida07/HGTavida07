var form = document.getElementById("taskForm")
var taskList = document.getElementById("taskList")

form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    var data = new FormData(Event.Target)
    var submit = Object.fromEntries(data)

 var newTask = document.createElement("span")
 newTask.classList.add("taskItem")
 newTask.append(submit.task)

 taskList.appendChild(newTask)
});

