import { Router } from "express";
import { marketRouter } from "./marketRouter";
import {storeRouter} from './storeRouter'
import { productRouter } from "./productRouter";

const routers = Router()

routers.use('/market', marketRouter)
routers.use('/store', storeRouter)
routers.use('/product', productRouter)
export { routers }
