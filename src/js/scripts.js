// const paragraph = document.querySelector("p:nth-of-type(2)");
const submitButton = document.querySelector("#add button");
const titleField = document.querySelector("#title");
const urlField = document.querySelector("#url");
const tagsField = document.querySelector("#tags");
const gallery = document.querySelector("main");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newFrame = document.createElement("div");
  
  /** Title */
  const newTitle = document.createElement("h3");
  newTitle.innerText = titleField.value;
  newTitle.style.textAlign = "center";
  newTitle.style.fontWeight = "bold";
  newTitle.style.textDecoration = "underline";
  newFrame.appendChild(newTitle);

  /* Image Container */
  const imageDiv = document.createElement("div");
  imageDiv.style.width = "40%";
  imageDiv.style.marginLeft = "30%";
  imageDiv.style.textAlign = "center";
  
  /* Image */
  const newImage = document.createElement("img");
  newImage.src = urlField.value;
  newImage.alt = newTitle.innerText;
  newImage.title = newTitle.innerText;
  newImage.style.maxWidth = "100%";
  newImage.style.height = "auto";
  newImage.style.border = "4px solid grey";
  newImage.style.borderRadius = "10px";
  imageDiv.appendChild(newImage);
  newFrame.appendChild(imageDiv);

  /* Tags */
  const newTags = document.createElement("p");
  tagsField.value.split(",").forEach(tag => {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = "#".concat(tag.trim());
      newTags.append(link);
      newTags.append(" ");
  });
  newTags.style.textAlign = "center";
  newFrame.appendChild(newTags);

  gallery.appendChild(newFrame);

  /* Reset inputs */
  titleField.value = "";
  urlField.value = "";
  tagsField.value = "";
});
