import { Response, Request, NextFunction } from "express";
import categoryService from "../services/categoryService";

export async function getCategories(req: Request, res: Response, next: NextFunction){
    try {
        const categories = await categoryService.getCategories()
        return res.send(categories)    
    } catch (error) {
        next(error)
    }
}