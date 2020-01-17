const express = require("express");
const { celebrate } = require("celebrate");
const router = express.Router();
const AuthController = require("./../controllers/auth_controller");
const { validateLogin } = require("./../middleware/celebrate");

router.post("/register", AuthController.register);

router.post("/login", celebrate(validateLogin), AuthController.login);

router.get("/logout", AuthController.logout); //maybe delete

router.put("/update", AuthController.update);

module.exports = router;
