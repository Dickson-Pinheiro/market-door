import joi from 'joi';

export const stockSchema = joi.object({
    quantity: joi.number().required()
})