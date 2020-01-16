const express = require("express");
const router = express.Router();
const AuthController = require("./../controllers/auth_controller");

router.get("/login", AuthController.login);

router.get("/logout", AuthController.logout); //maybe delete

router.put("/", AuthController.update);

module.exports = router;
