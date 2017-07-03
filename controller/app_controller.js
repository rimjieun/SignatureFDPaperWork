var express = require("express");

var router = express.Router();

var path = require("path");

router.get("/", function(req, res) {
  res.send("index.html");
});

router.get("/Fitness", function(req, res) {
  User.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});


router.get("/Handbook", function(req, res) {
  User.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});
router.get("/FirmDirectory", function(req, res) {
  User.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});


router.get("/reactIndex", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/ReactIndex.html"));
});

module.exports = router;