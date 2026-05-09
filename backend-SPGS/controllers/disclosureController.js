const fs = require("fs");
const path = require("path");
const DisclosureModel = require("../models/disclosure");
const cloudinary = require("../config/cloudinary");
const axios = require("axios");

const parseCloudinaryUrl = (fileUrl) => {
  try {
    const parsed = new URL(fileUrl);
    const parts = parsed.pathname.split("/").filter(Boolean);

    const uploadIndex = parts.indexOf("upload");
    if (uploadIndex === -1 || uploadIndex + 1 >= parts.length) return null;

    const resourceType = parts[uploadIndex - 1] || "auto";
    let publicPathParts = parts.slice(uploadIndex + 1);

    if (publicPathParts[0] && /^v\d+$/.test(publicPathParts[0])) {
      publicPathParts = publicPathParts.slice(1);
    }

    const publicIdWithExt = publicPathParts.join("/");
    const publicId = publicIdWithExt.replace(/\.[^/.]+$/, "");
    const format = publicIdWithExt.split(".").pop();

    return { resourceType, publicId, format };
  } catch (error) {
    return null;
  }
};

// Controller to add disclosure
exports.addDisclosure = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    
    let cloudinaryUrl = "";
    let originalFilename = "";
    let publicId = "";
    let resourceType = "auto";

    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'disclosures',
          resource_type: 'auto'
        });
        cloudinaryUrl = result.secure_url;
        originalFilename = req.file.originalname;
        publicId = result.public_id;
        resourceType = result.resource_type;
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
      publicId,
      resourceType,
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
        updateData.publicId = result.public_id;
        updateData.resourceType = result.resource_type;
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
      // Cloudinary URL - redirect with download attachment
      try {
        console.log('Processing Cloudinary URL:', file);

        // Find the disclosure to get the original filename
        const disclosure = await DisclosureModel.findOne({ file });
        console.log('Found disclosure:', disclosure ? 'yes' : 'no');

        const originalFilename = disclosure?.originalFilename || 'download';
        const parsed = parseCloudinaryUrl(file);

        const publicId = disclosure?.publicId || parsed?.publicId;
        const resourceType = disclosure?.resourceType || parsed?.resourceType || 'auto';
        const format = parsed?.format;

        if (!publicId) {
          throw new Error('Unable to parse Cloudinary public ID from URL');
        }

        const downloadUrl = cloudinary.url(publicId, {
          resource_type: resourceType,
          format,
          flags: 'attachment',
          attachment: originalFilename,
          sign_url: true,
          secure: true,
        });

        console.log('Generated Cloudinary download URL:', downloadUrl);
        res.redirect(downloadUrl);

      } catch (error) {
        console.error('Error processing Cloudinary URL:', error);
        res.status(500).json({ error: 'Failed to generate download link' });
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
