const fs = require("fs");
const path = require("path");
const DisclosureModel = require("../models/disclosure");
const cloudinary = require("../config/cloudinary");
const axios = require("axios");

// Controller to add disclosure
exports.addDisclosure = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    
    let cloudinaryUrl = "";
    let originalFilename = "";
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'disclosures',
          resource_type: 'auto'
        });
        cloudinaryUrl = result.secure_url;
        originalFilename = req.file.originalname;
      } catch (error) {
        console.error('Cloudinary upload error:', error);
        return res.status(500).json({ error: 'Failed to upload file to cloud' });
      }
    }

    const disclosureData = {
      type,
      title,
      description,
      file: cloudinaryUrl,
      originalFilename,
    };

    const savedDisclosure = await DisclosureModel.create(disclosureData);
    
    res.status(201).json({
      message: "Disclosure uploaded successfully",
      data: savedDisclosure,
    });
  } catch (error) {
    console.error("Error adding disclosure:", error);
    res.status(500).json({ error: "Failed to upload disclosure" });
  }
};

// Controller to get all disclosures
exports.getAllDisclosure = async (req, res) => {
  try {
    const disclosures = await DisclosureModel.find().sort({ createdAt: -1 });
    res.json(disclosures);
  } catch (error) {
    console.error("Error getting disclosures:", error);
    res.status(500).json({ error: "Failed to retrieve disclosures" });
  }
};

// Controller to edit disclosure
exports.editDisclosure = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, title, description } = req.body;
    
    const existingDisclosure = await DisclosureModel.findById(id);
    if (!existingDisclosure) {
      return res.status(404).json({ error: "Disclosure not found" });
    }

    let updateData = { type, title, description };

    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'disclosures',
          resource_type: 'auto'
        });
        updateData.file = result.secure_url;
        updateData.originalFilename = req.file.originalname;
      } catch (error) {
        console.error('Cloudinary upload error:', error);
        return res.status(500).json({ error: 'Failed to upload file to cloud' });
      }
    }

    const updatedDisclosure = await DisclosureModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    res.json({
      message: "Disclosure updated successfully",
      data: updatedDisclosure,
    });
  } catch (error) {
    console.error("Error updating disclosure:", error);
    res.status(500).json({ error: "Failed to update disclosure" });
  }
};

// Controller to delete disclosure
exports.deleteDisclosure = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required",
      });
    }

    const disclosure = await DisclosureModel.findById(id);
    if (!disclosure) {
      return res.status(404).json({
        success: false,
        message: "Disclosure not found",
      });
    }

    // Delete the file from filesystem
    if (disclosure.file) {
      const filePath = path.join(__dirname, "../uploads/disclosures", disclosure.file);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          console.log(`File deleted successfully: ${disclosure.file}`);
        } catch (fileError) {
          console.error("Error deleting file:", fileError);
        }
      }
    }

    await DisclosureModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Disclosure deleted successfully",
      id: id,
    });
  } catch (error) {
    console.error("Error deleting disclosure:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete disclosure",
      error: error.message,
    });
  }
};

// Controller to download disclosure
exports.downloadDisclosure = async (req, res) => {
  try {
    const { file } = req.query;
    console.log('Download request for file:', file);

    if (!file) {
      return res.status(400).json({ error: "File parameter is required" });
    }

    if (file.startsWith('http')) {
      // Cloudinary URL - fetch and stream the file
      try {
        console.log('Fetching from Cloudinary URL:', file);

        // Find the disclosure to get the original filename
        const disclosure = await DisclosureModel.findOne({ file });
        console.log('Found disclosure:', disclosure ? 'yes' : 'no', disclosure?.originalFilename);

        const filename = disclosure?.originalFilename || file.split('/').pop().split('?')[0] || 'download';
        console.log('Using filename:', filename);

        const response = await axios.get(file, {
          responseType: 'stream',
          timeout: 30000 // 30 seconds timeout
        });

        console.log('Cloudinary response status:', response.status);
        console.log('Content-Type:', response.headers['content-type']);

        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Type', response.headers['content-type'] || 'application/octet-stream');

        response.data.pipe(res);

        // Handle stream errors
        response.data.on('error', (error) => {
          console.error('Stream error:', error);
          if (!res.headersSent) {
            res.status(500).json({ error: 'Stream error' });
          }
        });

      } catch (error) {
        console.error('Error fetching from Cloudinary:', error.message);
        console.error('Error details:', error.response?.status, error.response?.data);
        res.status(500).json({ error: 'Failed to download file from cloud' });
      }
    } else {
      // Local file (legacy) - but files don't exist on live server
      console.log('Local file requested, not supported');
      res.status(404).json({ error: "File not found - please reupload the disclosure" });
    }
  } catch (error) {
    console.error("Error downloading file:", error);
    res.status(500).json({ error: "Failed to download file" });
  }
};
