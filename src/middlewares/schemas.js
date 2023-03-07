const Joi= require('@hapi/joi');

const schemas = {};

const email = Joi.string()
  .trim()
  .lowercase()
  .email()
  .required()
  .label('Email is required and should look like this : example@email.com!');
const password = Joi.string()
  .min(6)
  .required()
  .label('Password is required,  it must have at least 6 letters');
const name = Joi.string()
  .min(3)
  .required()
  .label('Name is required,  it must have at least 3 letters');



schemas.user = Joi.object().keys({
  email,
  name,
  password,
});

schemas.product = Joi.object().keys({
  name,
  description: Joi.string()
  .min(3)
  .required()
  .label('Decription is required,  it must have at least 3 letters'),
  image: Joi.string()
  .required()
  .label('Image is required,  it must have at least 3 letters'),
  price: Joi.number()
  .required()
  .label('Price is required, it must be a number'),
  category: Joi.string()
  .min(3)
  .required()
  .label('Category is required, it must have at least 3 letters'),
  manufaturedate: Joi.string()
  .required()
  .label('Manufacture date is required'),
});
module.exports= schemas;
