const Post = require('../models/Post.js');
const cloudinary = require('../config/cloudinary');

// Helper function to handle Cloudinary uploads
const uploadToCloudinary = async (file) => {
  try {
    const fileStr = file.buffer.toString('base64');
    const uploadResponse = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${fileStr}`,
      {
        resource_type: 'auto',
        folder: 'post_images',
        quality: 'auto:good',
        fetch_format: 'auto'
      }
    );
    return {
      public_id: uploadResponse.public_id,
      url: uploadResponse.secure_url
    };
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    throw new Error('Failed to process image upload');
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort('-createdAt').lean();
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts.map(post => ({
        ...post,
        content: post.content.substring(0, 500) // Limit preview content
      }))
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching posts'
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching post'
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }

    // Process image if uploaded
    let imageData = null;
    if (req.file) {
      try {
        imageData = await uploadToCloudinary(req.file);
      } catch (uploadError) {
        return res.status(500).json({
          success: false,
          message: uploadError.message
        });
      }
    }

    // Create post
    const newPost = await Post.create({
      title: title.trim(),
      content: content.trim(),
      image: imageData
    });

    res.status(201).json({
      success: true,
      data: {
        id: newPost._id,
        title: newPost.title,
        content: newPost.content,
        image: newPost.image?.url || null,
        createdAt: newPost.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({
      success: false,
      message: 'Server error creating post'
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Validate update data
    if (!title?.trim() && !content?.trim() && !req.file) {
      return res.status(400).json({
        success: false,
        message: 'No valid fields to update'
      });
    }

    // Process image update
    if (req.file) {
      try {
        // Delete old image if exists
        if (post.image?.public_id) {
          await cloudinary.uploader.destroy(post.image.public_id);
        }
        post.image = await uploadToCloudinary(req.file);
      } catch (uploadError) {
        return res.status(500).json({
          success: false,
          message: uploadError.message
        });
      }
    }

    // Update text fields
    if (title?.trim()) post.title = title.trim();
    if (content?.trim()) post.content = content.trim();

    const updatedPost = await post.save();

    res.status(200).json({
      success: true,
      data: {
        id: updatedPost._id,
        title: updatedPost.title,
        content: updatedPost.content,
        image: updatedPost.image?.url || null,
        updatedAt: updatedPost.updatedAt
      }
    });

  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating post'
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Delete image from Cloudinary
    if (post.image?.public_id) {
      try {
        await cloudinary.uploader.destroy(post.image.public_id);
      } catch (deleteError) {
        console.error('Error deleting image:', deleteError);
        // Continue with post deletion even if image deletion fails
      }
    }

    await post.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting post'
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};