const express = require("express");
const router = express.Router();
const authRoutes = require("./auth_routes");
const emailRoutes = require("./email_routes");
const imageRoutes = require("./image_routes");
const postRoutes = require("./post_routes");

router.get("/", (req, res) => res.send("WHITE MAGNUM"));

router.use("/login", authRoutes);
router.use("/email", emailRoutes);
router.use("/images", imageRoutes);
router.use("/posts", postRoutes);

module.exports = router;
