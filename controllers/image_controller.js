const AWS = require("aws-sdk");
const fs = require("fs");
const ImageModel = require("./../database/models/image_model");

AWS.config.update({
  accessKeyId: "AKIAWCYMVJKXYOJVP35N",
  secretAccessKey: "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",
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
  const { caption } = req.body;
  s3.upload(params, async (err, data) => {
    if (err) console.log(err);

    if (data) {
      const url = data.Location;
      const image = await ImageModel.create({ url, caption });
      res.json(image);
    }
  });
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
