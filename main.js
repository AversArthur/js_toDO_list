const inputBox = document.getElementById("input-box");
const inputContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please write task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    inputContainer.appendChild(li);
    let spen = document.createElement("span");
    spen.innerHTML = "\u00d7";
    li.appendChild(spen);
  }
  inputBox.value = "";
  saveData();
}
inputBox.addEventListener('keydown', (el) =>{
  if (el.key === 'Enter') {
    addTask();
  }
});
inputContainer.addEventListener(
  "click",(e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", inputContainer.innerHTML);
}

function restoreData() {
  inputContainer.innerHTML = localStorage.getItem("data");
}
restoreData()
