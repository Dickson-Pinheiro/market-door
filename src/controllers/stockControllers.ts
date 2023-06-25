import { Response, NextFunction } from 'express'
import { AuthenticatedRequestStore } from "../middleware/authenticateStore";
import stockService from '../services/stockService';

export async function getStock(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    try {
        const stock = await stockService.getStock(store_id, Number(productId))
        return res.send(stock)
    } catch (error) {
        throw error
    }
}

export async function updateStock(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    const { quantity } = req.body as Record<string, number>
    try {
        const stock = await stockService.updateStock(store_id, Number(productId), quantity)
        return res.send(stock)
    } catch (error) {
        next(error)
    }
}

