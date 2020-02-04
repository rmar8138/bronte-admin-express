const { Schema } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  draft: {
    type: Boolean,
    required: true,
    default: true,
  },
  imageUrl: {
    type: String,
  },
  imageName: {
    type: String,
  },
  imageId: {
    type: String,
  },
});

module.exports = PostSchema;
