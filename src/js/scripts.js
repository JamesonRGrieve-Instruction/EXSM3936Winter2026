const createButton = document.querySelector("#create");
console.log(createButton);
createButton.addEventListener("click", (event) => {
  console.log("click");
  const newButton = document.createElement("button");
  newButton.innerText = "Remove Me!";
  newButton.addEventListener("click", (event) => {
    event.target.remove();
  });
  createButton.parentNode.appendChild(newButton);
});