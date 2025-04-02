const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('Only JPEG, PNG, GIF, and WebP images are allowed'), false);
    }
    cb(null, true);
};

const upload = multer({
    storage,
    limits: {
        fileSize: 15 * 1024 * 1024,
        files: 1
    },
    fileFilter
}).single('image');

const uploadMiddleware = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({
                    success: false,
                    message: err.code === 'LIMIT_FILE_SIZE' 
                        ? 'File too large. Maximum size is 2MB.' 
                        : err.message
                });
            }
            return res.status(400).json({
                success: false,
                message: err.message
            });
        }
        next();
    });
};

module.exports = uploadMiddleware;