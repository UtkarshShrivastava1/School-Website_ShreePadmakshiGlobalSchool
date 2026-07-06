// import News from '../models/News.js';
const News = require('../models/latestnews.js');
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

// Helper function to handle Cloudinary uploads (supports both memory and disk storage)
const uploadToCloudinary = async (file) => {
  try {
    let uploadParam;
    if (file.buffer) {
      const fileStr = file.buffer.toString("base64");
      uploadParam = `data:${file.mimetype};base64,${fileStr}`;
    } else if (file.path) {
      uploadParam = file.path;
    } else {
      throw new Error("No file content found for upload");
    }

    const uploadResponse = await cloudinary.uploader.upload(uploadParam, {
      resource_type: "auto",
      folder: "latest_news_images",
      quality: "auto:good",
      fetch_format: "auto",
    });

    // If it was stored locally by multer diskStorage, clean it up
    if (file.path) {
      fs.unlink(file.path, (err) => {
        if (err) console.error("Error deleting local temp file:", err);
      });
    }

    return uploadResponse.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw new Error("Failed to process image upload");
  }
};

// Create news
exports.createNews = async (req, res) => {
  try {
    const { title, description } = req.body;
    let imageUrl = req.body.image;

    // Check if a file was uploaded
    if (req.file) {
      try {
        imageUrl = await uploadToCloudinary(req.file);
      } catch (uploadError) {
        return res.status(500).json({ message: uploadError.message });
      }
    }

    if (!title || !imageUrl || !description) {
      return res.status(400).json({ message: 'All fields are required (title, image file or url, description)' });
    }

    const news = new News({ title, image: imageUrl, description });
    await news.save();

    res.status(201).json({ message: 'News created successfully', news });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all news
exports. getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    // console.log("Fetched all news:", news);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get single news by ID
exports. getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update news
exports.updateNews = async (req, res) => {
  try {
    const { title, description } = req.body;
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });

    if (title !== undefined) news.title = title;
    if (description !== undefined) news.description = description;

    if (req.file) {
      try {
        const imageUrl = await uploadToCloudinary(req.file);
        news.image = imageUrl;
      } catch (uploadError) {
        return res.status(500).json({ message: uploadError.message });
      }
    } else if (req.body.image !== undefined) {
      news.image = req.body.image;
    }

    await news.save();
    res.status(200).json({ message: "News updated successfully", news });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete news
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
