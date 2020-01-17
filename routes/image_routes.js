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

router.post(
  "/",
  celebrate(validateImage),
  passport.authenticate("jwt", { session: false }),
  ImageController.create,
);

// PUT image

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  ImageController.update,
);

// DELETE image

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  ImageController.destroy,
);

module.exports = router;
