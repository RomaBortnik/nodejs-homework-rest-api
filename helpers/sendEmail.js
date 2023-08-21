const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;

const sendEmail = async ({ to, subject, html }) => {
  const email = {
    from: "dariazhekalo@meta.ua",
    to,
    subject,
    html,
  };

  const nodeMailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "dariazhekalo@meta.ua",
      pass: META_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(nodeMailerConfig);

  console.log("email", email);
  await transport.sendMail(email);
};

module.exports = sendEmail;

// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "bortnik25051998@gmail.com" };
//   await sgMail.send(email);
//   return true;
// };

// module.exports = sendEmail;
