require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);

const transport = {
  host: 'smtp.zoho.eu',
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `Name: ${name} \nEmail: ${email} \nMessage:\n${message} `;

  const mail = {
    from: 'jon@lunde.dev',
    to: 'jon@lunde.dev',
    subject: 'New Message from Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'Error',
        error: err,
      });
    } else {
      res.json({
        status: 'Success',
      });
    }
  });
});
