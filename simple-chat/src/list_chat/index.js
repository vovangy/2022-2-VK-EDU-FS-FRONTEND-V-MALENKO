import './index.css';

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
form.addEventListener('submit', handleSubmit.bind(this));

const chats = localStorage.getItem("chats");

if (!chats) {
  let current_chats = '{"1":{"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR","time":"12:34"}]}, "2":{"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]}}';
  localStorage.setItem("chats", current_chats);
}
let history = JSON.parse(localStorage.getItem("chats"));

for (let chat of Object.keys(history)) {
    let set_chat = new Map();
    set_chat.set(chat, {"user_id":1, "messages":history[chat]["messages"]});

    setChat(set_chat, chat);

}

for (let chat of Object.keys(history)) {
    let myLink = document.getElementById(chat);
    myLink.onclick = function() {
        localStorage.setItem("current_chat", chat);
        location.href="chat";
    }
}

function handleSubmit(event) {
  event.preventDefault();
}


function makeChat(chat, id) {
    return '          <div class="chat-container" id=' + id +
    '><div class="chat-photo"> \
        <img class="img-center" src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"></img> \
    </div> \
    <div class="chat-message"> \
        <div class="chat-message-name">' + selectNameFromDatabase(1) + '</div> \
        <div class="chat-message-text">' + chat.get(id)["messages"].slice(-1)[0]["value"] + '</div> \
    </div> \
    <div class="chat-time-seen"> \
        <div class="chat-time-message">' + chat.get(id)["messages"].slice(-1)[0]["time"] +
        '</div> \
        <div class="chat-seen"> \
            <i class="material-icons done_all">done_all</i> \
        </div> \
    </div> \
</div>'
}

function setChat(value, id) {
  document.getElementById("after_end").insertAdjacentHTML("beforeend",
makeChat(value, id));
    
}

function selectNameFromDatabase(user_id) {
    if (user_id == 1)
        return "Messi";
    return "Ronaldo";
}
