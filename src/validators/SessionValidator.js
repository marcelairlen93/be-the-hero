const { celebrate, Segments, Joi } = require('celebrate');

const Create = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

module.exports = {
  Create,
};
