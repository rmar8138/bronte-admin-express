const express = require("express");
const { celebrate } = require("celebrate");
const passport = require("passport");
const router = express.Router();
const AuthController = require("./../controllers/auth_controller");
const { validateLogin } = require("./../middleware/celebrate");

router.post("/register", AuthController.register);

router.post(
  "/login",
  celebrate(validateLogin),
  passport.authenticate("local", {
    failureRedirect: "/login",
    session: false,
  }),
  AuthController.login,
);

router.get("/logout", AuthController.logout); //maybe delete

router.put("/update", AuthController.update);

module.exports = router;
