const express = require("express");
const router = express.Router();
const { celebrate } = require("celebrate");
const ImageController = require("./../controllers/image_controller");
const { validateImage } = require("./../middleware/celebrate");

// GET all images

router.get("/", ImageController.index);

// GET image by id

router.get("/:id", ImageController.show);

// POST image

router.post("/", celebrate(validateImage), ImageController.create);

// PUT image

router.put("/:id", ImageController.update);

// DELETE image

router.delete("/:id", ImageController.destroy);

module.exports = router;
