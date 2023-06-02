import Joi = require("joi");

export const create = Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required(),
})