const jwt = require("jsonwebtoken");

// Middleware to verify JWT and attach admin info to request
exports.protect = async (req, res, next) => {
  try {
    let token;

    // Get token from Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Optional: check if token user matches hardcoded admin
      if (decoded.username !== process.env.ADMIN_USERNAME) {
        return res.status(401).json({
          success: false,
          message: "Invalid token credentials",
        });
      }

      // Attach decoded admin info to request object
      req.admin = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Token verification failed",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later",
    });
  }
};

// Middleware to check if user is admin (in this case, if token is valid and username matches)
exports.isAdmin = (req, res, next) => {
  try {
    if (!req.admin || req.admin.username !== process.env.ADMIN_USERNAME) {
      return res.status(403).json({
        success: false,
        message: "Admin privileges required",
      });
    }

    next();
  } catch (error) {
    console.error("Admin check error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during admin verification",
    });
  }
};
