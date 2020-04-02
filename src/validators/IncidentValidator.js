const { celebrate, Segments, Joi } = require('celebrate');

const Index = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
});

const Create = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().min(3).max(50),
    description: Joi.string().required().min(3).max(5000),
    value: Joi.number().required(),
  }),
});

const Delete = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
});

module.exports = {
  Index, Create, Delete,
};
