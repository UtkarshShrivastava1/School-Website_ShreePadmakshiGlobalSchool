const mongoose = require("mongoose");

const DisclosureSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    file: { type: String }, // Cloudinary URL
    originalFilename: { type: String }, // Original filename for display and download
  },
  { timestamps: true }
);

module.exports = mongoose.model("Disclosure", DisclosureSchema);
