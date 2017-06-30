var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AdminSchema = new Schema({

  LastName: {
    type: String
  },
  FirstName: {
    type: String
  }
});

var Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;