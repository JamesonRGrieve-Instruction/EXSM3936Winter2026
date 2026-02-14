// const paragraph = document.querySelector("p:nth-of-type(2)");
const searchBar = document.querySelector("#search");
const searchButton = document.querySelector("#submit");
const output = document.querySelector("#output");

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchBar.value.toLowerCase()}`).then(res => res.json());
  output.innerHTML = "";

  const name = document.createElement("p");
  name.innerText = response.species.name;
  output.appendChild(name);

  const image = document.createElement("img");
  image.src = response.sprites.front_default;
  image.alt = response.species.name;
  image.title = response.species.name;
  output.appendChild(image);

  for (resType of response.types) {
    const type = document.createElement("p");
    type.innerText = `Type ${resType.slot}: ${resType.type.name}`;
    output.appendChild(type);
  }

  const weight = document.createElement("p");
  weight.innerText = `Weight: ${response.weight}`;
  output.appendChild(weight);

  const height = document.createElement("p");
  height.innerText = `Height: ${response.height}`;
  output.appendChild(height);


  const baseExp = document.createElement("p");
  baseExp.innerText = `Base Exp: ${response.base_experience}`;
  output.appendChild(baseExp);

});