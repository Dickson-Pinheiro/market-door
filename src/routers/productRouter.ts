import { Router } from 'express';
import {createProduct} from '../controllers'
import { AuthenticateStore } from '../middleware/authenticateStore';
import validate from '../middleware/validationMiddleware';
import { productSchema } from '../schemas/productSchema';

const productRouter = Router()

productRouter
.post('', AuthenticateStore, validate(productSchema, 'body'), createProduct)

export { productRouter }