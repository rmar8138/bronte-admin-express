const sgMail = require("@sendgrid/mail");

async function sendEmail(req, res) {
  const { name, from, number, text } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "cassandra.sloan16@gmail.com",
    from,
    subject: `Portfolio message from ${name} - ${number}`,
    text,
  };
  const response = await sgMail.send(msg);
  res.json(response);
}

module.exports = {
  sendEmail,
};
