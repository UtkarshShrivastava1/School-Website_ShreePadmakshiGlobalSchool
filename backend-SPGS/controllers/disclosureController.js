const Disclosure = require("../models/Disclosure");

const addDisclosure = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    if (!type || !title || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const filePath = req.file ? req.file.path : null;

    const newDisclosure = new Disclosure({
      type,
      title,
      description,
      file: filePath,
    });

    await newDisclosure.save();
    res
      .status(201)
      .json({ message: "Disclosure added successfully", data: newDisclosure });
  } catch (error) {
    console.error("Error in addDisclosure:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllDisclosure = async (req, res) => {
  try {
    const disclosures = await Disclosure.find().sort({ createdAt: -1 });
    res.json(disclosures);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch disclosures" });
  }
};

const downloadDisclosure = async (req, res) => {
  const { filePath } = req.query;
  if (!filePath)
    return res.status(400).json({ message: "No file path provided" });
  res.download(filePath);
};

module.exports = { addDisclosure, getAllDisclosure, downloadDisclosure };
