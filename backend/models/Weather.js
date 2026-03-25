const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Weather", weatherSchema);