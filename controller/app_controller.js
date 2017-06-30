app.get("/", function(req, res) {
  res.send("index.html");
});
app.get("/Fitness", function(req, res) {
  User.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});


app.get("/Handbook", function(req, res) {
  User.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});
app.get("/FirmDirectory", function(req, res) {
  User.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});