import joi from 'joi'

export const storeSchema = joi.object({
    name: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
})