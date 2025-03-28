const Notice = require("../models/Notice");

//  Add a new notice
exports.addNotice = async (req, res) => {
  try {
    // console.log(req.body);
    const { title, description, date } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
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
