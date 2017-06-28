var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ParkingSchema = new Schema({

  LastName: {
    type: String
  },
  FirstName: {
    type: String
  },
 TagNumber: {
    type: Number
  },
  State: {
    type: String
  },
  Year: {
    type: Number
  },
  Color: {
    type: String
  },
  Make: {
    type: String
  },
  Model: {
    type: String
  }
});

var Parking = mongoose.model("Parking", ParkingSchema);

module.exports = Parking;