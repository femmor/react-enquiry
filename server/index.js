const path = require('path');
// Add express library
const express = require('express');

const transporter =  require("./config")
const dotenv = require('dotenv');
dotenv.config();

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
  try {
    //   Collect req.body data
      const mailOptions = {
          from: req.body.email,
          to: process.env.email,
          subject: req.body.subject,
          html: `
            <p>You have a new contact request</p>
            <h3>Contact details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Name: ${req.body.email}</li>
                <li>Name: ${req.body.subject}</li>
                <li>Name: ${req.body.message}</li>
            </ul>
          `
      }

    // Send the mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: "Something went wrong, please try again later"
            })
        } else {
            res.send({
                success: true,
                message: "Thanks for contacting us. We will get back to you shortly"
            })
        }
      })
  } catch (error) {
      res.status(500).send({
          success: false,
          message: "Something went wrong, please try again later"
      })
  }
});

// Start the express server to listen at PORT 3030
app.listen(3030, () => {
  console.log('server start on port 3030');
});