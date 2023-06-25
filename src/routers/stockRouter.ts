import { Router } from "express";
import { getStock, updateStock } from '../controllers'
import { AuthenticateStore } from "../middleware/authenticateStore";
import validate from "middleware/validationMiddleware";
import { productIdSchema } from "schemas/productIdSchema";
import { stockSchema } from "../schemas/stockSchema";
const stockRouter = Router()

stockRouter
.get('/:productId', AuthenticateStore, validate(productIdSchema, 'params'),  getStock)
.put('/:productId', AuthenticateStore, validate(productIdSchema, 'params'), validate(stockSchema, 'body'), updateStock)

export {stockRouter}