const s3 = require("./../config/aws");
const ImageModel = require("./../database/models/image_model");

async function index(req, res) {
  const images = await ImageModel.find();
  res.json(images);
}

async function create(req, res) {
  const promises = req.files.map(file => {
    const data = JSON.parse(req.body[file.originalname]);

    return ImageModel.create({
      url: file.location,
      caption: data.caption,
      category: data.category,
      name: file.originalname,
    });
  });

  try {
    const response = await Promise.all(promises);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
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

  // remove from mongodb
  const image = await ImageModel.findByIdAndRemove(id);

  // remove from s3
  s3.deleteObject(
    {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: image.name,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json(err);
      }

      return res.json(data);
    },
  );
}

module.exports = {
  index,
  create,
  update,
  show,
  destroy,
};
