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
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: [
    {
      type: String,
      enum: ["blackandwhite", "portrait", "landscape", "editorial"],
      required: true,
    },
  ],
});

module.exports = ImageSchema;
