const ImageModel = require("./../database/models/image_model");

async function index(req, res) {
  const images = await ImageModel.find();
  res.json(images);
}

async function create(req, res) {
  const { url, caption } = req.body;
  const image = await ImageModel.create({ url, caption });
  res.json(image);
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
