var express = require("express");

var mainRouter = express.Router();

var User = require("./../models/User.js");

mainRouter.get("/data", function(req, res) {
  //get user data from mongodb
});

mainRouter.post("/data", function(req, res) {
  //post user data to mongodb
});

module.exports = mainRouter;