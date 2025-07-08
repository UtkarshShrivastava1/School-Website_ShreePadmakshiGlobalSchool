const Disclosure = require("../models/disclosure");
const path = require('path');
const fs = require('fs');

const addDisclosure = async (req, res) => {
    try {
        console.log(req.body);
        const { type, title, description } = req.body;
        const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
        const fileSizeInKB = req.file ? (req.file.size / 1024).toFixed(2) + " KB" : null;

        console.log("Uploaded file URL:", fileUrl);
        
        const newDisclosure = new Disclosure({
            type,
            title,
            description,
            fileUrl,
            size: fileSizeInKB,
            date: new Date()
        });
        
        await newDisclosure.save();
        res.status(201).json({
            message: "Disclosure added successfully",
            disclosure: newDisclosure
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllDisclosure = async (req, res) => {
    try {
        const disclosures = await Disclosure.find().sort({ date: -1 });
        res.status(200).json(disclosures);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
}


const downloadDisclosure = async (req, res) => {
    try {
        const { id } = req.query;
        
        // Find the disclosure document
        const disclosure = await Disclosure.findById(id);
        
        if (!disclosure) {
            return res.status(404).json({ message: "Document not found" });
        }

        // Construct full file path
        const filePath = path.join(__dirname, '..', 'uploads', disclosure.fileUrl.split('/').pop());
        
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: "File not found" });
        }

        // Set headers for file download
        res.download(filePath, disclosure.title, (err) => {
            if (err) {
                console.error('Download error:', err);
                res.status(500).json({ message: "Error downloading file" });
            }
        });

    } catch (error) {
        console.error('Download error:', error);
        res.status(500).json({ error: error.message });
    }
};


module.exports = { addDisclosure, getAllDisclosure,downloadDisclosure };