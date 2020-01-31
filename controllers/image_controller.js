const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const fs = require("fs");
const ImageModel = require("./../database/models/image_model");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "bronte-portfolio",
    metadata: function(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname,
      });
    },
    key: function(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

async function index(req, res) {
  const images = await ImageModel.find();
  res.json(images);
}

async function create(req, res) {
  // set captions on each image
  req.files.forEach((file, index) => {
    file.caption = req.body[file.originalname];
  });

  const promises = req.files.map(file =>
    ImageModel.create({
      url: file.location,
      caption: file.caption,
      name: file.originalname,
    }),
  );

  const response = await Promise.all(promises);
  console.log(response);
  res.json(response);
}

async function update(req, res) {
  const { id } = req.params;
  const { caption } = req.body;
  const image = await ImageModel.findByIdAndUpdate(
    id,
    { caption },
    { new: true },
  );
  res.json(image);
}

async function show(req, res) {
  const { id } = req.params;
  console.log(id);
  const image = await ImageModel.findById(id);
  res.json(image);
}

async function destroy(req, res) {
  const { id } = req.params;
  const image = await ImageModel.findByIdAndRemove(id);
  res.json(image);
}

module.exports = {
  index,
  create,
  update,
  show,
  destroy,
};
