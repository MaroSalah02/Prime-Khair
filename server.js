const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'validation_pdfs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});

const upload = multer({ storage: storage });

// Serve static files in the 'validation_pdfs' folder
app.use('/validation_pdfs', express.static('validation_pdfs'));

// Route to handle file upload
app.post('/saveFile', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.'); // Sending a success message
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});