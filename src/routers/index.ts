import { Router } from "express";
import { marketRouter } from "./marketRouter";
import {storeRouter} from './storeRouter'
import { productRouter } from "./productRouter";
import { categoryRouter } from "./categoryRouter";

const routers = Router()

routers.use('/market', marketRouter)
routers.use('/store', storeRouter)
routers.use('/product', productRouter)
routers.use('/category', categoryRouter)
export { routers }
