const express = require('express');
const  {
  createNews,
  getAllNews,
  getNewsById,
  deleteNews,
  updateNews,
} = require('../controllers/latestnews.js');
const { protect, isAdmin } = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

const router = express.Router();

router.get('/', getAllNews);
router.get('/:id', getNewsById);

router.post('/create', protect, isAdmin, uploadMiddleware, createNews);
router.put('/:id', protect, isAdmin, uploadMiddleware, updateNews);
router.delete('/:id', protect, isAdmin, deleteNews);

module.exports = router;
