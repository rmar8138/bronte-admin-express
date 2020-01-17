const express = require("express");
const { celebrate } = require("celebrate");
const router = express.Router();
const AuthController = require("./../controllers/auth_controller");
const { validateLogin } = require("./../middleware/celebrate");

router.get("/login", celebrate(validateLogin), AuthController.login);

router.get("/logout", AuthController.logout); //maybe delete

router.put("/", AuthController.update);

module.exports = router;
