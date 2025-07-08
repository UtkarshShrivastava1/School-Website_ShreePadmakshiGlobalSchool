const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with timeout handling
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 60000 // 60 seconds timeout for operations
});

// Test the configuration and provide detailed error reporting
const testCloudinaryConfig = async () => {
  try {
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary configuration is valid:', result);
  } catch (error) {
    console.error('❌ Cloudinary configuration error:', error.message);
    
    // Check for common configuration issues
    if (error.message.includes('api_key')) {
      console.error('API Key issue detected. Please check your CLOUDINARY_API_KEY environment variable.');
    } else if (error.message.includes('cloud_name')) {
      console.error('Cloud Name issue detected. Please check your CLOUDINARY_CLOUD_NAME environment variable.');
    } else if (error.message.includes('signature')) {
      console.error('API Secret issue detected. Please check your CLOUDINARY_API_SECRET environment variable.');
    }
    
    // Log config without exposing secrets
    console.log('Current Cloudinary Config:', {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'not set',
      api_key: process.env.CLOUDINARY_API_KEY ? '****' : 'not set',
      api_secret: process.env.CLOUDINARY_API_SECRET ? '****' : 'not set'
    });
  }
};

// Run the test when this module is imported
testCloudinaryConfig();

// Helper function for safer uploads with error handling
const safeUpload = async (fileData, options = {}) => {
  try {
    return await cloudinary.uploader.upload(fileData, {
      timeout: 30000, // 30 seconds timeout
      ...options
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error.message);
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};

// Helper function for safer deletion with error handling
const safeDestroy = async (publicId) => {
  try {
    if (!publicId) return { result: 'no id provided' };
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error.message);
    throw new Error(`Cloudinary deletion failed: ${error.message}`);
  }
};

// Export the configured instance and helper functions
module.exports = {
  ...cloudinary,
  safeUpload,
  safeDestroy
};