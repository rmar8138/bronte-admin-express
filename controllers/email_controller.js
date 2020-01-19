const sgMail = require("@sendgrid/mail");

async function sendEmail(req, res) {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "ragan.martinez@live.com",
    from: "lukepierson@hotmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html:
      "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const response = await sgMail.send(msg);
  res.json(response);
}

module.exports = {
  sendEmail,
};
