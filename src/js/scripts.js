// const paragraph = document.querySelector("p:nth-of-type(2)");
const submitButton = document.querySelector("#add button");
const titleField = document.querySelector("#title");
const urlField = document.querySelector("#url");
const tagsField = document.querySelector("#tags");
const gallery = document.querySelector("main");
const images = JSON.parse(localStorage.getItem("images")) || [];
console.log(images);
function createImage(title, url, tags) {
  const newFrame = document.createElement("div");

  const newTitle = document.createElement("h3");
  newTitle.innerText = title;
  newFrame.appendChild(newTitle);

  const newImage = document.createElement("img");
  newImage.src = url;
  newImage.alt = newTitle.innerText;
  newImage.title = newTitle.innerText;
  newFrame.appendChild(newImage);

  const newTags = document.createElement("p");
  newTags.innerText = tags;
  newFrame.appendChild(newTags);

  gallery.appendChild(newFrame);
}
for (image of images) {
  createImage(image.title, image.url, image.tags);
}
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newImage = {
    title: titleField.value,
    url: urlField.value,
    tags: tagsField.value.split(",").join(" ")
  }
  images.push(newImage);
  localStorage.setItem("images", JSON.stringify(images));
  createImage(newImage.title, newImage.url, newImage.tags);
});
