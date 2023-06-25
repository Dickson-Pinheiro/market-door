import { Response } from "express";
import { Product } from "interfaces/product";
import { AuthenticatedRequestStore } from "middleware/authenticateStore";
import productService from "../services/productService";

export async function createProduct(req: AuthenticatedRequestStore, res: Response) {
    const { store_id } = req
    const { name, description, image_url, by_weight, active, price, category_id } = req.body as Product
    try {
        const success = await productService.createProduct(req.body as Product)
    } catch (error) {
        
    }
}