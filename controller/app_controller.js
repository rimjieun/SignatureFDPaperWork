var express = require("express");

var router = express.Router();

var path = require("path");
var User = require("./../models/user.js")

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});


router.get("/data", function(req, res) {
  User.find({"EmailAddress": "user@signaturefd.com"}, function(error, doc) {
    if (error) {
      res.send("GET error: " + error);
    } else {
      res.send(doc);
    }
  });
});

router.post("/data", function(req, res) {
  console.log(req.body.dummyEmail);

  User.findOneAndUpdate({
    "EmailAddress": req.body.dummyEmail
  
  }, req.body.data)
  // Execute the above query
  .exec(function(err, doc) {
    // Log any errors
    if (err) {
      res.send(err);
    } else {
      // Or send the document to the browser
      res.send({
          status: "Update Successful"
      });
    }
  });
});

module.exports = router;