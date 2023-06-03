import Joi = require("joi");

export const createPost = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
})

export const updatePost = Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string(),
    content: Joi.string()
})

export const deletePost = Joi.object().keys({
    id: Joi.number().required(),
})