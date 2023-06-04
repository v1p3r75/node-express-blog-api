import Joi = require("joi");

export const createComment = Joi.object().keys({
    content: Joi.string().required(),
})

export const updateComment = Joi.object().keys({
    id: Joi.number().required(),
    content: Joi.string()
})

export const deleteComment = Joi.object().keys({
    id: Joi.number().required(),
})