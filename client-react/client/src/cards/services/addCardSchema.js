import Joi from "joi";

const addCardSchema = {
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

bizNumber: Joi.any()
.required(),

 
};

export default addCardSchema;