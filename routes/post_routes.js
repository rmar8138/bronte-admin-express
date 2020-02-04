const express = require("express");
const passport = require("passport");
const { celebrate } = require("celebrate");
const router = express.Router();
const PostController = require("./../controllers/post_controller");
const { validatePost } = require("./../middleware/celebrate");

router.get("/", PostController.index);

router.post(
  "/",
  // celebrate(validatePost),
  passport.authenticate("jwt", { session: false }),
  PostController.create,
);

router.get("/:id", PostController.show);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  PostController.update,
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  PostController.destroy,
);

module.exports = router;
