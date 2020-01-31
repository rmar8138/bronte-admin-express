const express = require("express");
const passport = require("passport");
const multer = require("multer");
const multerS3 = require("multer-s3");
const router = express.Router();
const { celebrate } = require("celebrate");
const ImageController = require("./../controllers/image_controller");
const { validateImage } = require("./../middleware/celebrate");
const s3 = require("./../config/aws");

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    metadata: function(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname,
      });
    },
    key: function(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

// GET all images

router.get("/", ImageController.index);

// GET image by id

router.get("/:id", ImageController.show);

// POST image

router.post(
  "/",
  upload.array("images"),
  // celebrate(validateImage),
  // passport.authenticate("jwt", { session: false }),
  ImageController.create,
);

// PUT image

router.put(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  ImageController.update,
);

// DELETE image

router.delete(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  ImageController.destroy,
);

module.exports = router;
