const { Joi, Segments } = require("celebrate");

const validatePost = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
  }),
};

module.exports = {
  validatePost,
};
