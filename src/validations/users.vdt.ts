import Joi = require("joi");

export const createUser = Joi.object().keys({
    username: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    admin: Joi.boolean,
})