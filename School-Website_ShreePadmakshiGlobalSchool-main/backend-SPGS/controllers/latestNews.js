// import News from '../models/News.js';
const News = require('../models/latestNews.js');

// Create news
exports.createNews = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    if (!title || !image || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const news = new News({ title, image, description });
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
    console.log("Fetched all news:", news);
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
