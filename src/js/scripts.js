// const paragraph = document.querySelector("p:nth-of-type(2)");
const addButton = document.querySelector("#add");
const resetButton = document.querySelector("#reset");
const input = document.querySelector("#number");
const output = document.querySelector("#count");
let currentValue = Number(localStorage.getItem("number")) || 0;
output.innerText = currentValue;
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentValue += Number(input.value);
  output.innerText = currentValue;
  localStorage.setItem("number", currentValue);
});

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentValue = 0;
  output.innerText = currentValue;
  localStorage.setItem("number", 0);
});
