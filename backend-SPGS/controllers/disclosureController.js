const fs = require("fs");
const path = require("path");
const DisclosureModel = require("../models/disclosure");

// Controller to add disclosure
exports.addDisclosure = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    
    let filename = "";
    if (req.file) {
      filename = req.file.filename;
    }

    const disclosureData = {
      type,
      title,
      description,
      file: filename,
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
      // If there's a new file, we should delete the old one
      if (existingDisclosure.file) {
        const oldFilePath = path.join(__dirname, "../uploads/disclosures", existingDisclosure.file);
        if (fs.existsSync(oldFilePath)) {
          try {
            fs.unlinkSync(oldFilePath);
          } catch (err) {
            console.error("Failed to delete old file:", err);
          }
        }
      }
      updateData.file = req.file.filename;
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
    if (!file) {
      return res.status(400).json({ error: "File parameter is required" });
    }
    const filePath = path.join(__dirname, "../uploads/disclosures", file);
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }
    // Get file stats
    const stats = fs.statSync(filePath);
    // Extract original filename (remove timestamp prefix)
    const originalName = file.split("-").slice(1).join("-").replace(/_/g, " ");
    // Set proper headers for download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${originalName}"`
    );
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Length", stats.size);
    // Create read stream and pipe to response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    fileStream.on("error", (error) => {
      console.error("Error streaming file:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading file" });
      }
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    res.status(500).json({ error: "Failed to download file" });
  }
};
