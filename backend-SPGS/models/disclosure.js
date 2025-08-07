const mongoose = require("mongoose");

<<<<<<< HEAD
const disclosureSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });
module.exports = mongoose.model('Disclosure', disclosureSchema);
=======
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
>>>>>>> cbdd66aaae07f5c8c05374282cc22b411a36a1db
