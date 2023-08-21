const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);

  if (data.type === "message") {
    displayMessage(data.user, data.message);
  } else if (data.type === "activeUsers") {
    displayActiveUsers(data.users);
  }
};

document.getElementById("send-button").addEventListener("click", function () {
  sendMessage();
});

document.getElementById("message-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();
  if (message) {
    socket.send(JSON.stringify({ type: "message", message }));
    messageInput.value = "";
  }
}

function displayMessage(user, message) {
  const messageContainer = document.getElementById("message-container");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = `${user}: ${message}`;
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function displayActiveUsers(users) {
  const activeUsersContainer = document.getElementById("active-users");
  activeUsersContainer.innerHTML = `Active Users: ${users}`;
}

socket.onopen = function () {
  // Request active users list
  socket.send(JSON.stringify({ type: "getActiveUsers" }));
};