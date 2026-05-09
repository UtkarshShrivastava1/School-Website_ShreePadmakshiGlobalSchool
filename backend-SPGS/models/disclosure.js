const mongoose = require("mongoose");

const DisclosureSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    file: { type: String }, // Cloudinary URL
    originalFilename: { type: String }, // Original filename for display and download
    publicId: { type: String }, // Cloudinary public_id for secure download URLs
    resourceType: { type: String }, // Cloudinary resource type (image/raw/auto)
  },
  { timestamps: true }
);

module.exports = mongoose.model("Disclosure", DisclosureSchema);
