// const { json } = require('express');
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
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

  const { name, email, message } = JSON.parse(event.body);
  const content = `Name: ${name} \nEmail: ${email} \nMessage:\n${message} `;

  console.log('CONTENT: ', content);

  const mail = {
    from: 'jon@lunde.dev',
    to: 'jon@lunde.dev',
    subject: 'New Message from Contact Form ',
    text: content,
  };

  const res = await transporter.sendMail(mail);

  return { statusCode: 200, body: JSON.stringify(res) };
};
