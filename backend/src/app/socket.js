 
const socketio = require("socket.io");

exports.setupWebSocket = server => {
  const io = socketio(server);
  io.on("connection", socket => {
    console.log("New client connected"), setInterval(
      () => getApiAndEmit(socket),
      10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
  });
};