const {Admin} = require('../models/admin');

// Admin login controller
exports.adminLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if username and password are provided
      if (!username || !password) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide username and password' 
        });
      }
  
      // Find admin with username and explicitly select password
      const admin = await Admin.findOne({ username }).select('+password');
  
      // Check if admin exists
      if (!admin) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid credentials' 
        });
      }
  
      // Check if password matches
      const isMatch = await admin.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid credentials' 
        });
      }
  
      // Update last login time
      admin.lastLogin = Date.now();
      await admin.save({ validateBeforeSave: false });
  
      // Generate token
      const token = admin.generateAuthToken();
  
      res.status(200).json({
        success: true,
        message: 'Login successful',
        token,
        admin: {
          id: admin._id,
          username: admin.username,
          name: admin.name,
          role: admin.role
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Server error, please try again later' 
      });
    }
  };