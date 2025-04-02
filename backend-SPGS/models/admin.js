const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Define the admin schema
const adminSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      select: false // Don't include password in queries by default
    },
    role: {
      type: String,
      enum: ['admin', 'super-admin'], // Add appropriate roles
      default: 'admin'
    },
    name: {
      type: String,
      default: 'Administrator'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    lastLogin: {
      type: Date
    }
  }, { timestamps: true });
  
  // Hash password before saving
  adminSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    
    try {
      // Generate salt and hash password
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // Method to compare password
  adminSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };
  
  // Method to generate JWT token
  adminSchema.methods.generateAuthToken = function() {
    return jwt.sign(
      { id: this._id, username: this.username, role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );
  };
  
  // Create the model
  const Admin = mongoose.model('Admin', adminSchema);
  
  // Create a function to initialize default admin if none exists
  const initializeAdmin = async () => {
    try {
      const adminCount = await Admin.countDocuments();
      if (adminCount === 0) {
        await Admin.create({
          // username: 'mlzsadmin',
          // password: 'admin@123', // This will be hashed by the pre-save hook
          username:process.env.ADMIN_USERNAME,
          password: process.env.ADMIN_PASSWORD,
          name: 'Default Administrator',
          role: 'admin'
        });
        console.log('Default admin user created');
      }
    } catch (error) {
      console.error('Error creating default admin:', error);
    }
  };
  
  module.exports = { Admin, initializeAdmin };
