const form = document.querySelector('form');
const input = document.querySelector('.form-input');
form.addEventListener('submit', this.handleSubmit.bind(this));

const chats = '{"id":2,"value":"SIUUUU","name":"Messi","time":"12:34"}, ';
const chat = localStorage.getItem("chats");
if (!chat) {
  localStorage.setItem("chats", chats);
}
let history = localStorage.getItem("chats").split(", ");
for (let imprint of history) {
  if (imprint == "")
    break;
  imprint = JSON.parse(imprint);;
  let message = new Map();
  message.set("id", Number(imprint["id"]));
  message.set("value", imprint["value"]);
  message.set("name", imprint["name"]);
  message.set("time", imprint["time"]);
  setChat(message);
}

function handleSubmit(event) {
  event.preventDefault();
  let message = new Map();
  let date = new Date();
  message.set("id", 1);
  message.set("value", input.value);
  message.set("name", "Ronaldo");
  message.set("time", date.toLocaleTimeString("ru-Ru").slice(0, 5));
}


function makeChat(chat) {
  if (chat.get("id") == 2) {
    return '<a href="../chat/index.html"><div class = "style-send-message"><div class="sender">' + chat.get("name") + '</div>' + chat.get("value") + '<div class="time">' + chat.get("time") + '</div></div></a>';
  }
}

function setChat(value) {
  document.getElementById("after_end").insertAdjacentHTML("beforeend", makeChat(value));
}
