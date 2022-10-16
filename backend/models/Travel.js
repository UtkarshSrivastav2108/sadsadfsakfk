const mongoose = require("mongoose");

const TravelSchema = new mongoose.Schema({

  guest: {
    type: String,
    unique: false
  },
  arrivals: {
    type: String,
    unique: false
  },
  leaving: {
    type: String,
    unique: false
  },
  where: {
    type: String,
    unique: false
  },

});

module.exports = Travel = mongoose.model("travel", TravelSchema);
