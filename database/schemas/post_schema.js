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
