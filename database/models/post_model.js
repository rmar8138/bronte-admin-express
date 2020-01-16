const mongoose = require("mongoose");
const PostSchema = require("./../schemas/post_schema");

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
