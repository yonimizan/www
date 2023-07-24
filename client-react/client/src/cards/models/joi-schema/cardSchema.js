import Joi from "joi";
import imageSchema from "./image";

const cardSchema = {
  title: Joi.string()
    .required(),

  subtitle: Joi.string()
  .required(),

  imageUrl: Joi.string()
  .required(),
  imageAlt: Joi.string()
  .required(),

  phone: Joi.any()
  .required(),

  cardNumber: Joi.any()
  .required(),



  state: Joi.string().allow(""),
  country: Joi.string().min(2).max(256).required(),
  city: Joi.string().min(2).max(256).required(),
  street: Joi.string().min(2).max(256).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
};

export default cardSchema;