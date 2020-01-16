const express = require("express");
const router = express.Router();
const ImageController = require("./../controllers/image_controller");

// GET all images

router.get("/", ImageController.index);

// GET image by id

router.get("/:id", ImageController.show);

// POST image

router.post("/", ImageController.create);

// PUT image

router.put("/:id", ImageController.update);

// DELETE image

router.delete("/:id", ImageController.destroy);

module.exports = router;
