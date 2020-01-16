const mongoose = require("mongoose");
const AdminSchema = require("./../schemas/admin_schema");

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
