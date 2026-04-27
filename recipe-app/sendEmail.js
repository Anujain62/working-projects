
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'anujain.aj021@gmail.com', 
      pass: 'ynev umnp shim ltby', 
    },
  });

  const mailOptions = {
    from: 'anujain.aj021@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };