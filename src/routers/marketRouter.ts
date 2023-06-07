import { Router} from "express";
import { createMarket, signinMarket } from "../controllers";

const marketRouter = Router()

marketRouter.post('/signup', createMarket)
.post('/signin', signinMarket)

export { marketRouter }