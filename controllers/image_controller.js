const AWS = require("aws-sdk");
const fs = require("fs");
const ImageModel = require("./../database/models/image_model");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
});

const s3 = new AWS.S3();
const localImage = "./MAGNUM.jpg";

const params = {
  Bucket: "bronte-portfolio",
  Body: fs.readFileSync(localImage),
  Key: `${new Date().getTime()}.jpg`,
};

async function index(req, res) {
  const images = await ImageModel.find();
  res.json(images);
}

async function create(req, res) {
  const { url, caption, name, category } = req.body;
  const image = await ImageModel.create({
    url,
    caption,
    name,
    category,
  });
  res.json(image);
}

async function update(req, res) {
  const { id } = req.params;
  const { caption, category } = req.body;
  const image = await ImageModel.findByIdAndUpdate(
    id,
    { caption, category },
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
