const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => { 
    cb(null, './uploads'); // Save the uploaded file to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueName = uuidv4(); // Generate a unique name for the video file
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueName}${fileExtension}`); // Use the generated unique name for the file
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
  if (!req.file) {
    res.status(400).json({ error: 'No file was uploaded' });
    return;
  }

  const filePath = req.file.path; // Get the file path of the uploaded video
  // Save the file path to the database or do other logic here

  res.json({ filePath });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
