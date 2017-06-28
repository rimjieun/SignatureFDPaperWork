var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CellNumberSchema = new Schema({

  LastName: {
    type: String
  },
  FirstName: {
    type: String
  },
  Initials: {
    type: String
  },
  Nickname: {
    type: String
  },
  HomeAddress: {
    type: String
  },
  HomeAddress2: {
    type: String
  },
  HomePhoneNumber: {
    type: String
  },
  CellPhoneNumber: {
    type: String
  },
  OfficePhoneNumber: {
    type: String
  },
  Birthday: {
    type: String
  },
  SpouseName: {
    type: String
  },
  Department: {
    type: String
  }
});

var CellNumber = mongoose.model("CellNumber", CellNumberSchema);
module.exports = CellNumber;