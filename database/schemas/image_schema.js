const { Schema } = require("mongoose");

const ImageSchema = new Schema({
  caption: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = ImageSchema;
