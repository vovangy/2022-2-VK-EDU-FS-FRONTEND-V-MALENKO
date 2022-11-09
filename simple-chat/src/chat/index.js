import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
form.addEventListener('submit', handleSubmit.bind(form));

var chats = localStorage.getItem("chats");
var current_chat = localStorage.getItem("current_chat", current_chat);

if (!chats) {
  chats = '{"1":{"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]}}';
  current_chat = '{"1":{"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]}}';
  localStorage.setItem("current_chat", current_chat);
} else {
    if (!current_chat) {
        current_chat = '{"1":{"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]}}';
        localStorage.setItem("current_chat", current_chat);
    }
}

chats = JSON.parse(chats);
var history = JSON.parse(localStorage.getItem("current_chat"));

console.log(history);

for (let message_cur of history[Object.keys(history)[0]]["messages"]) {
  let message = new Map();
  message.set("user_id", Number(message_cur["user_id"]));
  message.set("value", message_cur["value"]);
  message.set("time", message_cur["time"]);
  sendMessage(message);
}

function handleSubmit(event) {
  event.preventDefault();
  if (!input.value)
    return;
  let message = new Map();
  let date = new Date();
  message.set("user_id", 2);
  message.set("value", input.value);
  message.set("time", date.toLocaleTimeString("ru-Ru").slice(0, 5));
  addMessageToDict(message);
  sendMessage(message);
  input.value = '';
}


function makeMessage(message) {
  if (message.get("user_id") == 1) {
    return '<div class = "style-send-message"><div class="sender">' + selectNameFromDatabase(message.get("user_id")) + '</div>' + message.get("value") + '<div class="time">' + message.get("time") + '</div></div>';
  }
  return '<div class = "style-get-message"><div class="sender">' + selectNameFromDatabase(message.get("user_id")) + '</div>' + message.get("value") + '<div class="time">' + message.get("time") + '</div></div>';
}

function addMessageToDict(message) {
  chats[Object.keys(history)[0]]["messages"].push({"user_id":message.get("user_id"), "value":message.get("value"), "time":message.get("time")});
  history[Object.keys(history)[0]]["messages"].push({"user_id":message.get("user_id"), "value":message.get("value"), "time":message.get("time")});
  localStorage.setItem("chats", JSON.stringify(chats));
  localStorage.setItem("current_chat", JSON.stringify(history));
}

function sendMessage(value) {
  document.getElementById("after_end").insertAdjacentHTML("beforeend", makeMessage(value));
}

function selectNameFromDatabase(user_id) {
    if (user_id == 1)
        return "Messi";
    return "Ronaldo";
}
