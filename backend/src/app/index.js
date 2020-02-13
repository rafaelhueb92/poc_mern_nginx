const express = require("express");
const cors = require("cors");
class AppController {
  constructor() {
    this.server;
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.socketIO();
  }

  routes() {
    this.app.use(require("./routes"));
  }

  socketIO() {
    this.server = require(`http`).Server(this.app);
    const io = require(`socket.io`)(this.server);
    this.app.use((req, res, next) => {
      req.io = io;
      next();
    });
  }
}

module.exports = new AppController().server;
