const mongoose = require("mongoose");

const DisclosureSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    file: { type: String }, // path to the file
  },
  { timestamps: true }
);

module.exports = mongoose.model("Disclosure", DisclosureSchema);
