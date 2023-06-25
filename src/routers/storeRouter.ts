import { Router } from 'express';
import { loginStore } from '../controllers'
const storeRouter = Router()


storeRouter.post('/login', loginStore)

export { storeRouter }