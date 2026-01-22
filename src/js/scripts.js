// const paragraph = document.querySelector("p:nth-of-type(2)");
const paragraphList = document.querySelectorAll("p");
console.log(paragraphList);
console.log(paragraphList[1]);

for (paragraph of paragraphList) {
  paragraph.addEventListener("click", (event) => {
    // console.log("Click!");
    // paragraph.innerText = "Updated.";
    event.target.classList.toggle("selected");
  });
}
