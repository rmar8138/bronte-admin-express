const { Schema } = require("mongoose");

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    bcrypt: true,
  },
});

AdminSchema.plugin(require("mongoose-bcrypt"));

module.exports = AdminSchema;
