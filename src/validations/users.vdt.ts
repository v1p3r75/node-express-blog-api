import Joi = require("joi");

export const createUser = Joi.object().keys({
    username: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    admin: Joi.boolean,
})

export const updateUser = Joi.object().keys({
    id: Joi.number().required(),
    username: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    admin: Joi.boolean,
})

export const deleteUser = Joi.object().keys({
    id: Joi.number().required(),
})