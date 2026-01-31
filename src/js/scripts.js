const pendingList = document.querySelector("#pending");
const completedList = document.querySelector("#completed");
const textBox = document.querySelector("#input input");
const addButton = document.querySelector("#input button");
const clearButton = document.querySelector(".container>button");

function addTodo(message) {
  const newTodo = document.createElement("div");
  const newCheck = document.createElement("input");
  newCheck.type = "checkbox";
  const newMessage = document.createElement("p");
  newMessage.innerText = message;

  newCheck.addEventListener("change", (event) => {
    console.log(event.target.checked);
    (event.target.checked ? completedList : pendingList).appendChild(event.target.parentNode);
  });

  newTodo.appendChild(newCheck);
  newTodo.appendChild(newMessage);

  pendingList.appendChild(newTodo);
}

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Click")
  if (textBox.value.trim() != "") {
    addTodo(textBox.value.trim());
  }
  textBox.value = "";
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  while (completedList.firstChild.innerText != completedList.lastChild.innerText) {
    completedList.removeChild(completedList.lastChild);
  }
});