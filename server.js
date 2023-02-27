const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Save the uploaded file to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  }
});
const upload = multer({ storage });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the POST request to start recording
app.post('/start-recording', (req, res) => {
  // Start recording logic here
  res.json({ message: 'Recording started' });
});

// Handle the POST request to stop recording and upload the recorded video
app.post('/stop-recording', upload.single('video'), (req, res) => {
  const filePath = req.file.path; // Get the file path of the uploaded video
  // Save the file path to the database or do other logic here

  res.json({ filePath });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
