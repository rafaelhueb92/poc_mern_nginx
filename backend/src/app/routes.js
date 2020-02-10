const routes = require("express").Router();

const pushController = require("./controllers/pushController");

routes.get("/",pushController.healt)
routes.post("/push", pushController.push);

module.exports = routes;
