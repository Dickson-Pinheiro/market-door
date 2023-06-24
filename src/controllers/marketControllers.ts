import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../middleware/authenticateMarket";
import marketService from "../services/marketService";

export async function createMarket(req: Request, res: Response, next: NextFunction){
    const {email, password, name} = req.body as Record<string, string>
    try {
        await marketService.createMarket(email, password, name)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

export async function signinMarket(req: Request, res: Response, next: NextFunction){
    const {email, password} = req.body as Record<string, string>
    try {
        const userAccess = await marketService.signinMarket(email, password)
        return res.send(userAccess)
    } catch (error) {
        next(error)   
    }
}

export async function createStore(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const {market_id} = req
    const { password, name, username} = req.body
    try {
        const storeCreated = await marketService.createStore(name, username, password, market_id)
        return res.status(201).send(storeCreated)
    } catch (error) {
        next(error)
    }
}

export async function getStores(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const {market_id} = req
    try {
        const stores = await marketService.getStoresByMarketId(market_id)
        return res.send(stores)
    } catch (error) {
        next(error)
    }
}