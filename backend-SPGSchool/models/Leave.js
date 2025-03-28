const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Leave", leaveSchema);