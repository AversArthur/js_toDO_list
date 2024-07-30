console.log("hi");

const inputData = document.querySelector(".todo-input input");
const toDoList = document.querySelector(".todo-list");
const button = document.querySelector(".todo-input button");

function addToDoList() {
  const inputDataValue = inputData.value;
  if (inputDataValue.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  const li = document.createElement("li");

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => {
    toDoList.removeChild(li);
  });

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerHTML = inputDataValue;

  li.appendChild(deleteBtn);
  li.appendChild(span);

  toDoList.appendChild(li);
  inputData.value = "";
}
inputData.addEventListener("keydown", (el) => {
  if (el.key === "Enter") {
    addToDoList();
  }
});
button.addEventListener("click", addToDoList);
