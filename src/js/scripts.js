// const paragraph = document.querySelector("p:nth-of-type(2)");
const chat = document.querySelector("#chat");
const messageBox = document.querySelector("#input input");
const sendButton = document.querySelector("#input button:first-of-type");
const resetButton = document.querySelector("#input button:last-of-type");
const timeouts = [];

function sendMessage(sender, message) {
  console.log(sender, message);
  const newMsg = document.createElement("p");
  newMsg.innerText = `${(new Date()).toLocaleTimeString()} ${sender}: ${message}`;
  chat.appendChild(newMsg);
}

// Google AI citing https://www.javascripttutorial.net/javascript-function
function getRandomIntInclusive(min, max) {
  // Ensure min and max are treated as integers for a clean range
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Click")
  if (messageBox.value.trim() != "") {
    sendMessage("User", messageBox.value.trim());
  }
  messageBox.value = "";
  timeouts.push(setTimeout(() => {
    sendMessage("AI", "Lorem ipsum dolor sit amet.");
  }, getRandomIntInclusive(10, 30) * 1000));
});

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  while (chat.firstChild) {
    chat.removeChild(chat.lastChild);
  }
  for (const timeout of timeouts) {
    clearTimeout(timeout);
  }
  timeouts.length = 0;
});