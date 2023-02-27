Node.js Video Recording API

This is a Node.js API that handles video recording using the MediaRecorder API and saves the recorded video to the server. The API also provides an endpoint to start recording and another endpoint to stop recording and upload the recorded video.
Installation

    Clone this repository
    Install the dependencies: npm install

Usage

    Start the server: npm start
    Open your web browser and navigate to http://localhost:3000/ to see the UI and test the video recording functionality.
    To start recording, click on the "Start Recording" button.
    To stop recording, click on the "Stop Recording" button.
    The recorded video will be downloaded automatically and saved to the uploads directory on the server.

API Endpoints

The API provides two endpoints:
POST /start-recording

This endpoint starts the video recording process.
POST /stop-recording

This endpoint stops the video recording process and uploads the recorded video to the server.
Testing the API using Postman

    Open Postman and create a new request.
    Set the request method to POST.
    Set the request URL to http://localhost:3000/start-recording.
    Send the request.
    Set the request method to POST.
    Set the request URL to http://localhost:3000/stop-recording.
    Under the "Body" tab, select "form-data" as the request type.
    Add a key named "video" and select a video file to upload.
    Send the request.

Uploading to an SSH server

    Generate a new SSH key pair on your local machine if you haven't already.
    Copy the public key to your server by running ssh-copy-id root@134.209.149.127 in your terminal.
    Connect to your server using SSH: ssh root@134.209.149.127.
    Create a new directory for the project: mkdir video-recording-api.
    Navigate to the new directory: cd video-recording-api.
    Copy the project files to the server using scp: scp -r /path/to/local/project root@134.209.149.127:/root/video-recording-api.
    Install the dependencies: npm install.
    Start the server: npm start.
    Open your web browser and navigate to http://134.209.149.127:3000/ to test the video recording functionality.