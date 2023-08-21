const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = function (event) {
  const message = event.data;
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = message;
  document.getElementById("message-container").appendChild(messageElement);
  document.getElementById("message-container").scrollTop = document.getElementById("message-container").scrollHeight;
};

document.getElementById("send-button").addEventListener("click", function () {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();
  if (message) {
    socket.send(message);
    messageInput.value = "";
  }
});

document.getElementById("message-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    if (message) {
      socket.send(message);
      messageInput.value = "";
    }
  }
});