const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  fileUrl: { type: String, required: true },
});

module.exports = mongoose.model("Notice", noticeSchema);