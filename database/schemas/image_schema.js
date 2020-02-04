const { Schema } = require("mongoose");

const ImageSchema = new Schema({
  caption: {
    type: String,
    default: "",
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
      enum: [
        "blackandwhite",
        "portrait",
        "landscape",
        "editorial",
        "post",
      ],
      required: true,
    },
  ],
});

module.exports = ImageSchema;
