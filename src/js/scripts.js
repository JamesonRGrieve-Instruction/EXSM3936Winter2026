// const paragraph = document.querySelector("p:nth-of-type(2)");
const submitButton = document.querySelector("#add button");
const titleField = document.querySelector("#title");
const urlField = document.querySelector("#url");
const tagsField = document.querySelector("#tags");
const gallery = document.querySelector("main");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newFrame = document.createElement("div");

  const newTitle = document.createElement("h3");
  newTitle.innerText = titleField.value;
  newFrame.appendChild(newTitle);

  const newImage = document.createElement("img");
  newImage.src = urlField.value;
  newImage.alt = newTitle.innerText;
  newImage.title = newTitle.innerText;
  newFrame.appendChild(newImage);

  const newTags = document.createElement("p");
  newTags.innerText = tagsField.value.split(",").join(" ");
  newFrame.appendChild(newTags);

  gallery.appendChild(newFrame);
});
