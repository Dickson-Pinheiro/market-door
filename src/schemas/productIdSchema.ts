import joi from 'joi';

export const productIdSchema = joi.object({
    produtcId: joi.number().required()
})