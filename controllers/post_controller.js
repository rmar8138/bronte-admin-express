const PostModel = require("./../database/models/post_model");

async function index(req, res) {
  const posts = await PostModel.find();
  res.json(posts);
}

async function show(req, res) {
  const { id } = req.params;
  const post = await PostModel.findById(id);
  res.json(post);
}

async function create(req, res) {
  const { title, body, imageUrl, imageName, imageId } = req.body;
  try {
    const post = await PostModel.create({
      title,
      body,
      imageUrl,
      imageName,
      imageId,
    });
    console.log(post);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
} //need to lock down

async function update(req, res) {
  const { title, body, imageUrl, imageName, imageId } = req.body;
  const { id } = req.params;
  const post = await PostModel.findByIdAndUpdate(
    id,
    { title, body, imageUrl, imageName, imageId },
    { new: true },
  );
  res.json(post);
} //need to lock down

async function destroy(req, res) {
  const { id } = req.params;
  const post = await PostModel.findByIdAndRemove(id);
  res.json(post);
} //need to lock down

module.exports = {
  index,
  create,
  update,
  show,
  destroy,
};
