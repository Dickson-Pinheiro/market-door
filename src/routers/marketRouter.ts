import { Router} from "express";
import { createMarket, signinMarket, createStore, getStores } from "../controllers";
import { AuthenticateMarket } from "../middleware/authenticateMarket";

const marketRouter = Router()

marketRouter
.post('/signup', createMarket)
.post('/login', signinMarket)
.post('/store', AuthenticateMarket, createStore)
.get('/store', AuthenticateMarket, getStores)

export { marketRouter }