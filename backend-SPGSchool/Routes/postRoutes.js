// const express = require('express');
// const router = express.Router();
// const { protect, isAdmin } = require('../middleware/auth');
// const uploadMiddleware = require('../middleware/upload');
// const {
//   getAllPosts,
//   getPostById,
//   createPost,
//   updatePost,
//   deletePost
// } = require('../controllers/postController');

// // Debugging: Verify middleware and controller imports
// console.log('[DEBUG] Middleware check:', {
//   protect: typeof protect,
//   isAdmin: typeof isAdmin,
//   uploadMiddleware: typeof uploadMiddleware
// });

// console.log('[DEBUG] Controller check:', {
//   createPost: typeof createPost
// });

// // Admin routes
// router.post(
//   '/',
//   protect,
//   isAdmin,
//   uploadMiddleware,
//   createPost
// );


// module.exports = router;
const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

// Public routes
router.get('/', getAllPosts);
router.get('/:id', getPostById);

// Admin routes
router.post(
  '/',
  protect,
  isAdmin,
  uploadMiddleware,
  createPost
);

router.put('/:id', protect, isAdmin, uploadMiddleware, updatePost);
router.delete('/:id', protect, isAdmin, deletePost);

module.exports = router;