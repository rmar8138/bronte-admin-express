const express = require("express");
const router = express.Router();
const PostController = require("./../controllers/post_controller");

router.get("/", PostController.index);

router.post("/", PostController.create);

router.get("/:id", PostController.show);

router.put("/:id", PostController.update);

router.delete("/:id", PostController.destroy);

module.exports = router;
