import Joi from "joi";

const validatePostUser = (req, res, next) => {
  const userSchema = Joi.object({
    firstName: Joi.string().min(3).max(100).required().messages({
      "string.base": "name should be a string",
      "string.empty": "name cannot be empty",
      "string.min": "name should have a minimum length of {#limit}",
      "string.max": "name should have a maximum length of {#limit}",
      "any.required": "name is required",
    }),
    lastName: Joi.string().min(3).max(100).required().messages({
        "string.base": "name should be a string",
        "string.empty": "name cannot be empty",
        "string.min": "name should have a minimum length of {#limit}",
        "string.max": "name should have a maximum length of {#limit}",
        "any.required": "name is required",
      }),
    email: Joi.string().min(3).max(100).required().messages({
      "string.base": "region should be a string",
      "string.empty": "region cannot be empty",
      "string.min": "region should have a minimum length of {#limit}",
      "string.max": "region should have a maximum length of {#limit}",
      "any.required": "region is required",
    }),
    password: Joi.string().min(3).max(100).required().messages({
      "string.base": "country should be a string",
      "string.empty": "country cannot be empty",
      "string.min": "country should have a minimum length of {#limit}",
      "string.max": "country should have a maximum length of {#limit}",
      "any.required": "country is required",
    }),
  });

  const { error } = institutionSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePutUser = (req, res, next) => {
  const userSchema = Joi.object({
    firstName: Joi.string().min(3).max(100).required().messages({
        "string.base": "name should be a string",
        "string.empty": "name cannot be empty",
        "string.min": "name should have a minimum length of {#limit}",
        "string.max": "name should have a maximum length of {#limit}",
        "any.required": "name is required",
      }),
      lastName: Joi.string().min(3).max(100).required().messages({
          "string.base": "name should be a string",
          "string.empty": "name cannot be empty",
          "string.min": "name should have a minimum length of {#limit}",
          "string.max": "name should have a maximum length of {#limit}",
          "any.required": "name is required",
        }),
      email: Joi.string().min(3).max(100).required().messages({
        "string.base": "region should be a string",
        "string.empty": "region cannot be empty",
        "string.min": "region should have a minimum length of {#limit}",
        "string.max": "region should have a maximum length of {#limit}",
        "any.required": "region is required",
      }),
      password: Joi.string().min(3).max(100).required().messages({
        "string.base": "country should be a string",
        "string.empty": "country cannot be empty",
        "string.min": "country should have a minimum length of {#limit}",
        "string.max": "country should have a maximum length of {#limit}",
        "any.required": "country is required",
      }),
  }).min(1); // Ensure at least one field is being updated

  const { error } = institutionSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { validatePostUser, validatePutUser };
