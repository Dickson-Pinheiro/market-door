import { Router } from "express";
import { marketRouter } from "./marketRouter";

const routers = Router()

routers.use('/market', marketRouter)

export { routers }
