import { NextFunction, Response } from "express";
import { Product } from "interfaces/product";
import { AuthenticatedRequestStore } from "middleware/authenticateStore";
import productService from "../services/productService";

export async function createProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    try {
        const success = await productService.createProduct(req.body as Product, store_id)
        res.status(201).send(success)
    } catch (error) {
        console.log(error)
        next(error)
    }
}