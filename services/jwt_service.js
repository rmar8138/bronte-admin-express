const JWT = require("jsonwebtoken");
const expiry = "1h";

function generateToken(admin) {
  const token = JWT.sign(
    {
      email: admin.email,
    },
    process.env.JWT_SECRET,
    {
      subject: admin.id.toString(),
      expiresIn: expiry,
    },
  );
  return token;
}
module.exports = {
  generateToken,
};
