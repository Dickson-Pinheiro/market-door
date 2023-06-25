import { Router } from 'express';
import {createProduct, getProducts, getProduct, deleteProduct, activeProduct, deactiveProduct, updateProduct} from '../controllers'
import { AuthenticateStore } from '../middleware/authenticateStore';
import validate from '../middleware/validationMiddleware';
import { productSchema } from '../schemas/productSchema';
import { productIdSchema } from '../schemas/productIdSchema';

const productRouter = Router()

productRouter
.post('', AuthenticateStore, validate(productSchema, 'body'), createProduct)
.get('', AuthenticateStore, getProducts)
.get('/:productId', AuthenticateStore, validate(productIdSchema, 'params'), getProduct)
.delete('/:productId', AuthenticateStore, validate(productIdSchema, 'params'), deleteProduct)
.patch('/active/:productId', AuthenticateStore, validate(productIdSchema, 'params'), activeProduct)
.patch('/deactive/:productId', AuthenticateStore, validate(productIdSchema, 'params'), deactiveProduct)
.put('/:productId', AuthenticateStore, validate(productIdSchema, 'params'), validate(productSchema, 'body'), updateProduct)

export { productRouter }