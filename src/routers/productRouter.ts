import { Router } from 'express';
import {createProduct} from '../controllers'

const productRouter = Router()

productRouter
.post('', createProduct)

export { productRouter }