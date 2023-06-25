import { Request, Response, NextFunction } from "express";
import storeService from '../services/storeServices'

export async function loginStore(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body as Record<string, string>
    try {
        const success = await storeService.loginStore(username, password)
        return res.send(success)
    } catch (error) {
        next(error)
    }
}