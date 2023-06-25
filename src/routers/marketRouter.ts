import { Request, Router, Response} from "express";
import { createMarket, signinMarket, createStore, getStores } from "../controllers";
import { AuthenticateMarket } from "../middleware/authenticateMarket";
import validate from "../middleware/validationMiddleware";
import { marketSchema } from "../schemas/marketSchema";
import { storeSchema } from "../schemas/storeScjema";

const marketRouter = Router()

marketRouter
.get('/health', (req: Request, res: Response) => res.send({okay: "okay"}))
.post('/signup',  createMarket)
.post('/login', validate(marketSchema, 'body'), signinMarket)
.post('/store', AuthenticateMarket, validate(storeSchema, 'body'), createStore)
.get('/store', AuthenticateMarket, getStores)

export { marketRouter }