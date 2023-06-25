import joi from 'joi';

export const marketSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    name: joi.string().required()
})