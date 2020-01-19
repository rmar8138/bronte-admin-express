const express = require("express");
const router = express.Router();
const EmailController = require("./../controllers/email_controller");

router.post("/", EmailController.sendEmail);

module.exports = router;
