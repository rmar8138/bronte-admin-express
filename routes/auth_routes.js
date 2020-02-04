const express = require("express");
const { celebrate } = require("celebrate");
const passport = require("passport");
const router = express.Router();
const AuthController = require("./../controllers/auth_controller");
const { validateLogin } = require("./../middleware/celebrate");

router.post("/register", AuthController.register);

router.post(
  "/login",
  // celebrate(validateLogin),
  passport.authenticate("local", {
    failureRedirect: "/login",
    session: false,
  }),
  AuthController.login,
);

router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  AuthController.logout,
);

router.put(
  "/update",
  passport.authenticate("jwt", { session: false }),
  AuthController.update,
);

module.exports = router;
