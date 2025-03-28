const jwt = require('jsonwebtoken');
const { Admin } = require('../models/admin');

exports.protect = async (req, res, next) => {
  try {
    let token;

    // Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route'
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = decoded;

      // Verify admin existence
      const adminExists = await Admin.findById(decoded.id);
      if (!adminExists) {
        return res.status(401).json({
          success: false,
          message: 'Admin no longer exists'
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route'
      });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error, please try again later'
    });
  }
};

// Simplified admin check without role field
exports.isAdmin = (req, res, next) => {
  try {
    if (!req.admin) {
      return res.status(403).json({
        success: false,
        message: 'Admin privileges required'
      });
    }
    next();
  } catch (error) {
    console.error('Admin check error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during admin verification'
    });
  }
};