const { Joi, Segments } = require("celebrate");

const validateLogin = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const validatePost = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    imageUrl: Joi.string().required(),
    imageName: Joi.string().required(),
    imageId: Joi.string().required(),
  }),
};

const validateImage = {
  [Segments.BODY]: Joi.object().keys({
    url: Joi.string().required(),
    caption: Joi.string().required(),
    name: Joi.string().required(),
    category: Joi.array().required(),
  }),
};

module.exports = {
  validateLogin,
  validatePost,
  validateImage,
};
