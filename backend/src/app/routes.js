const routes = require("express").Router();

const pushController = require("./controllers/pushController");

routes.get("/health",pushController.healt)
routes.post("/push", pushController.push);

module.exports = routes;
