import { Response } from "express";
import { Product } from "interfaces/product";
import { AuthenticatedRequestStore } from "middleware/authenticateStore";

export async function createProduct(req: AuthenticatedRequestStore, res: Response) {
    const { store_id } = req
    const { name, description, image_url, by_weight, active, price, category_id } = req.body as Product

}