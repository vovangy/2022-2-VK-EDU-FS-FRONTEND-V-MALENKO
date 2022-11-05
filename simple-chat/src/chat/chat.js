const form = document.querySelector('form');
const input = document.querySelector('.form-input');
form.addEventListener('submit', this.handleSubmit.bind(this));

const messages = '{"id":2,"value":"SIUUUU","name":"Messi","time":"12:34"}, ';
const chat = localStorage.getItem("messages");
if (!chat) {
  localStorage.setItem("messages", messages);
}
let history = localStorage.getItem("messages").split(", ");
for (let imprint of history) {
  if (imprint == "")
    break;
  imprint = JSON.parse(imprint);;
  let message = new Map();
  message.set("id", Number(imprint["id"]));
  message.set("value", imprint["value"]);
  message.set("name", imprint["name"]);
  message.set("time", imprint["time"]);
  sendMessage(message);
}

function handleSubmit(event) {
  event.preventDefault();
  if (!input.value)
    return;
  let message = new Map();
  let date = new Date();
  message.set("id", 1);
  message.set("value", input.value);
  message.set("name", "Ronaldo");
  message.set("time", date.toLocaleTimeString("ru-Ru").slice(0, 5));
  addMessageToDict(message);
  sendMessage(message);
  input.value = '';
}


function makeMessage(message) {
  if (message.get("id") == 1) {
    return '<div class = "style-send-message"><div class="sender">' + message.get("name") + '</div>' + message.get("value") + '<div class="time">' + message.get("time") + '</div></div>';
  }
  return '<div class = "style-get-message"><div class="sender">' + message.get("name") + '</div>' + message.get("value") + '<div class="time">' + message.get("time") + '</div></div>';
}

function addMessageToDict(message) {
  messagesChat = localStorage.getItem("messages");
  messagesChat += JSON.stringify(Object.fromEntries(message));
  messagesChat += ', ';
  localStorage.setItem("messages", messagesChat);
}

function sendMessage(value) {
  document.getElementById("after_end").insertAdjacentHTML("beforeend", makeMessage(value));
}

