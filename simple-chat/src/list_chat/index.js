import './index.css';

var chats = localStorage.getItem("chats");

if (!chats) {
  let current_chats = '{"1":{"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]}, "2":{"user_id": 2, "messages":[{"user_id":2,"value":"Вопросы?","time":"09:34"}]}}';
  localStorage.setItem("chats", current_chats);
}
var history = JSON.parse(localStorage.getItem("chats"));

for (let chat of Object.keys(history)) {
    let set_chat = new Map();
    set_chat.set(chat, {"user_id":history[chat]["user_id"], "messages":history[chat]["messages"]});

    setChat(set_chat, chat);

}

let createChatButton = document.getElementById("chat-create")
createChatButton.onclick = function() {
    history = JSON.parse(localStorage.getItem("chats"));
    let new_chat = String(Number((Object.keys(history).slice(-1))) + 1);
    let curChats = JSON.parse(localStorage.getItem("chats"));
    curChats[new_chat] = {"user_id": 1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]};
    localStorage.setItem("chats", JSON.stringify(curChats));
    let create_chat = new Map();
    create_chat.set(new_chat, {"user_id":1, "messages":[{"user_id":1,"value":"SIUUUU","time":"12:34"}]})
    setChat(create_chat, new_chat);
    let myLink = document.getElementById(new_chat);
    myLink.onclick = function() {
        localStorage.setItem("current_chat", new_chat);
        location.href="chat";
    }
    return 1;
}

for (let chat of Object.keys(history)) {
    let myLink = document.getElementById(chat);
    myLink.onclick = function() {
        localStorage.setItem("current_chat", chat);
        location.href="chat";
    }
}

function makeChat(chat, id) {
    return '          <div class="chat-container" id=' + id +
    '><div class="chat-photo"> \
        <img class="img-center" src=' + selectPhotoFromDatabase(chat.get(id)["user_id"]) + '></img> \
    </div> \
    <div class="chat-message"> \
        <div class="chat-message-name">' + selectNameFromDatabase(chat.get(id)["user_id"]) + '</div> \
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
    return "Белка";
}

function selectPhotoFromDatabase(user_id) {
    if (user_id == 1)
        return "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg";
    return "http://goodnewsanimal.ru/_nw/58/80607095.jpg";
}
