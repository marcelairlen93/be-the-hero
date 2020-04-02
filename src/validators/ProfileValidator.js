const { celebrate, Segments, Joi } = require('celebrate');

const Index = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

module.exports = {
  Index,
};
