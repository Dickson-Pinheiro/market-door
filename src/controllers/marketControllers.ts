import { NextFunction, Request, Response } from "express";
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
        res.send(userAccess)
    } catch (error) {
        next(error)   
    }
}