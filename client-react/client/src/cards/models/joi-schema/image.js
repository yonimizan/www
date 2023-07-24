import Joi from "joi";

const imageSchema = {
  url: Joi.string()
    .required(),

  alt: Joi.string()
  .required(),

};

export default imageSchema;