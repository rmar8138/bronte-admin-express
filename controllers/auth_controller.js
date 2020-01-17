const AdminModel = require("./../database/models/admin_model");
const JWTService = require("./../services/jwt_service");
//add JWT stuff

async function register(req, res) {
  const { email, password } = req.body;
  const admin = await AdminModel.create({ email, password });
  res.json(admin);
}

async function login(req, res) {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({ email });
  const valid = await admin.verifyPassword(password);

  if (!valid) {
    return res.json("Invalid credentials");
  }

  // send jwt token here
  const token = JWTService.generateToken(admin);
  return res.json(token);
}

async function logout(req, res) {}

async function update(req, res) {
  const { email, password } = req.body;
  const admin = await AdminModel.findOneAndUpdate(
    { email },
    { password },
    { new: true },
  );
  res.json(admin);
}

module.exports = {
  register,
  login,
  logout,
  update,
};
