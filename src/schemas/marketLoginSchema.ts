import joi from 'joi'

export const marcketLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})