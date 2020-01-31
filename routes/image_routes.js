const express = require("express");
const passport = require("passport");
const router = express.Router();
const { celebrate } = require("celebrate");
const ImageController = require("./../controllers/image_controller");
const { validateImage } = require("./../middleware/celebrate");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "bronte-portfolio",
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
