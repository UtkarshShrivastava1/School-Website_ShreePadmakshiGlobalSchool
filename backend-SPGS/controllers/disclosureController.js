const fs = require("fs");
const path = require("path");

// Controller to add disclosure
exports.addDisclosure = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { originalname, filename, size, mimetype } = req.file;
    const filePath = path.join("uploads", filename);

    // Get file stats for additional metadata
    const stats = fs.statSync(filePath);

    // Save to database with complete file info
    const disclosureData = {
      originalName: originalname,
      fileName: filename,
      filePath: filePath,
      fileSize: size,
      mimeType: mimetype,
      uploadDate: new Date(),
      // Add other fields from req.body as needed
    };

    // Replace with your actual database save logic
    // const savedDisclosure = await DisclosureModel.create(disclosureData);

    res.status(201).json({
      message: "Disclosure uploaded successfully",
      data: disclosureData,
    });
  } catch (error) {
    console.error("Error adding disclosure:", error);
    res.status(500).json({ error: "Failed to upload disclosure" });
  }
};

// Controller to get all disclosures
exports.getAllDisclosure = async (req, res) => {
  try {
    // Replace with your actual database query
    // const disclosures = await DisclosureModel.find();

    // For now, reading from uploads directory as example
    const uploadsDir = path.join(__dirname, "../uploads");

    if (!fs.existsSync(uploadsDir)) {
      return res.json([]);
    }

    const files = fs.readdirSync(uploadsDir);
    const disclosures = files.map((filename) => {
      const filePath = path.join(uploadsDir, filename);
      const stats = fs.statSync(filePath);

      return {
        id: filename, // Use filename as ID for now
        originalName: filename.split("-").slice(1).join("-").replace(/_/g, " "), // Extract original name
        fileName: filename,
        fileSize: stats.size,
        uploadDate: stats.birthtime || stats.ctime,
        modifiedDate: stats.mtime,
        filePath: `uploads/${filename}`,
      };
    });

    res.json(disclosures);
  } catch (error) {
    console.error("Error getting disclosures:", error);
    res.status(500).json({ error: "Failed to retrieve disclosures" });
  }
};

// Controller to download disclosure
exports.downloadDisclosure = async (req, res) => {
  try {
    const { file } = req.query;

    if (!file) {
      return res.status(400).json({ error: "File parameter is required" });
    }

    const filePath = path.join(__dirname, "../uploads", file);

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
