const express = require("express");
const { celebrate } = require("celebrate");
const router = express.Router();
const PostController = require("./../controllers/post_controller");
const { validatePost } = require("./../middleware/celebrate");

router.get("/", PostController.index);

router.post("/", celebrate(validatePost), PostController.create);

router.get("/:id", PostController.show);

router.put("/:id", PostController.update);

router.delete("/:id", PostController.destroy);

module.exports = router;
