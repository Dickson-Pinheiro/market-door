import { Router } from 'express';
import {createProduct} from '../controllers'
import { AuthenticateStore } from '../middleware/authenticateStore';

const productRouter = Router()

productRouter
.post('', AuthenticateStore, createProduct)

export { productRouter }