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
  const { title, body } = req.body;
  const post = await PostModel.create({ title, body }).catch(err =>
    res.status(500).send(err),
  );
  res.json(post);
} //need to lock down

async function update(req, res) {
  const { title, body } = req.body;
  const { id } = req.params;
  const post = await PostModel.findByIdAndUpdate(
    id,
    { title, body },
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
