const path = require('path');
// Add express library
const express = require('express');

// create express app to handle API requests
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
// set up JSON parser to handle the form data
app.use(express.json());
// serve all the files from the build folder 
// This is important as we will be serving both react and Nodejs apps 
// on the same port so we will not get CORS (Cross-Origin Resource Sharing) 
// error which comes when an application running on one port accesses application running on another port.
app.use(express.static(buildPath));

// post request handler for send endpoint
app.post('/send', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Start the express server to listen at PORT 3030
app.listen(3030, () => {
  console.log('server start on port 3030');
});