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