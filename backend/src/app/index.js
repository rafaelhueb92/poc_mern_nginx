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
    this.cors();
    this.socketIO();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(cors());
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

  cors() {
    this.app.use(function(_, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      next();
    });
  }
}

module.exports = new AppController().server;
