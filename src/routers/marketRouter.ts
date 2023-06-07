import { Router} from "express";
import { createMarket } from "../controllers";

const marketRouter = Router()

marketRouter.post('/signup', createMarket)

export { marketRouter }