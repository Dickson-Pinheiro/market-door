import joi from 'joi';

export const marketSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    name: joi.string().required()
})