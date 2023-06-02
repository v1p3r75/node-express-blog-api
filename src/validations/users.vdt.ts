import Joi = require("joi");

const create = Joi.object().keys({
    name: Joi.string()
})