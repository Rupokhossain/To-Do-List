const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addTask();

    taskInput.value = "";
});

const addTask = () => {
    const li = document.createElement("li");

    const textDiv = document.createElement("div");
    textDiv.textContent = taskInput.value;
    li.appendChild(textDiv);

    const actionDiv = document.createElement("div");
    li.appendChild(actionDiv);

    taskList.appendChild(li);


    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "&#10006";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
    actionDiv.appendChild(deleteBtn);


    const editBtn = document.createElement("span");
    editBtn.innerHTML = "&#9997";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit you new tasK: ");

        li.firstChild.textContent = newTask;
    });
    actionDiv.appendChild(editBtn);


    const completeCheckBox = document.createElement("input");
    completeCheckBox.type = "checkbox";
    completeCheckBox.classList.add("complete-btn");
    completeCheckBox.addEventListener("change", () => {
        if(completeCheckBox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    actionDiv.appendChild(completeCheckBox);



}
