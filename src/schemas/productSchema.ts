import joi from 'joi'

export const productSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    image_url: joi.string().uri().required(),
    by_weight: joi.boolean().required(),
    active: joi.boolean().required(),
    price: joi.number().integer().required(),
    category_id: joi.number().integer().required()
})