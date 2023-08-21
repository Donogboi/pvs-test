const WebSocket = require("ws");
const redis = require("redis");

const clients = [];

const initializeWebsocketServer = async (server) => {
  const client = redis.createClient({
    host: "172.18.0.2", // Update with your Redis IP address
    port: 6379, // Update with the Redis port if necessary
  });

  const subscriber = client.duplicate();
  await subscriber.connect();

  const publisher = client.duplicate();
  await publisher.connect();

  const websocketServer = new WebSocket.Server({ server });

  websocketServer.on("connection", (ws) => {
    console.log("New websocket connection");

    ws.on("close", () => onClose(ws));
    ws.on("message", (message) => onClientMessage(ws, message));
    ws.send("Hello Client!");

    const user = getClientUser(ws); // Get the user associated with the WebSocket connection

    clients.push({
      socket: ws,
      user: user,
    });
  });

  await subscriber.subscribe("newMessage", onRedisMessage);
  await publisher.publish("newMessage", "Hello from Redis!");
};

const onClientMessage = (ws, message) => {
  console.log("Message received: " + message);
  publisher.publish("newMessage", message);
};

const onRedisMessage = (channel, message) => {
  console.log("Message received from Redis: " + message);
  clients.forEach((client) => client.socket.send(message));
};

const onClose = (ws) => {
  console.log("Websocket connection closed");
  const index = clients.findIndex((client) => client.socket === ws);
  if (index !== -1) {
    clients.splice(index, 1);
  }
};

function getClientUser(ws) {
  // Replace this logic with your own implementation to determine the user associated with the WebSocket connection
  if (ws === Don) {
    return "Don";
  } else if (ws === Corina) {
    return "Corina";
  } else {
    return "Unknown";
  }
}

module.exports = { initializeWebsocketServer };