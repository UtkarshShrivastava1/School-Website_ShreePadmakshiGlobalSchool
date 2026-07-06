const Notice = require("../models/Notice");
const fs = require("fs");
const path = require("path");

//  Add a new notice
exports.addNotice = async (req, res) => {
  try {
    console.log(req.body);

    const { title, description, date } = req.body;
    const fileUrl = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null;

    console.log("Uploaded file URL:", fileUrl);


    const newNotice = new Notice({ title, description, date, fileUrl });
    await newNotice.save();
    res.status(201).json({ message: "Notice added successfully", notice: newNotice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 });
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a notice
exports.updateNotice = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const notice = await Notice.findById(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });

    if (title !== undefined) notice.title = title;
    if (description !== undefined) notice.description = description;
    if (date !== undefined) notice.date = date;

    if (req.file) {
      // If there's an existing file, delete it
      if (notice.fileUrl) {
        try {
          const oldFilename = notice.fileUrl.split("/uploads/")[1];
          if (oldFilename) {
            const oldFilePath = path.join(__dirname, "..", "uploads", oldFilename);
            if (fs.existsSync(oldFilePath)) {
              fs.unlinkSync(oldFilePath);
            }
          }
        } catch (err) {
          console.error("Error deleting old notice file:", err);
        }
      }
      notice.fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    await notice.save();
    res.status(200).json({ message: "Notice updated successfully", notice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a notice
exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });

    // Delete file if it exists
    if (notice.fileUrl) {
      try {
        const filename = notice.fileUrl.split("/uploads/")[1];
        if (filename) {
          const filePath = path.join(__dirname, "..", "uploads", filename);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
      } catch (err) {
        console.error("Error deleting notice file:", err);
      }
    }

    await notice.deleteOne();
    res.status(200).json({ message: "Notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
