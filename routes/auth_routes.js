const express = require("express");
const router = express.Router();
const AuthController = require("./../controllers/auth_controller");

router.get("/", AuthController.login);

router.get("/", AuthController.logout); //maybe delete

router.put("/", AuthController.update);

module.exports = router;
