import { NextFunction, Response } from "express";
import { Product } from "interfaces/product";
import { AuthenticatedRequestStore } from "middleware/authenticateStore";
import productService from "../services/productService";

export async function createProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    try {
        const success = await productService.createProduct({ ...req.body, price: Number(req.body.price), category_id: Number(req.body.category_id) } as Product, store_id)
        res.status(201).send(success)
    } catch (error) {
        next(error)
    }
}

export async function updateProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    try {
        const success = await productService.updateProduct({ ...req.body, price: Number(req.body.price), category_id: Number(req.body.category_id) } as Product, store_id, Number(productId))
        res.send(success)
    } catch (error) {
        next(error)
    }
}

export async function getProducts(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    let { page } = req.query
    console.log(page)
    if(!page){
        page = '1'
    }
    try {
        const products = await productService.getProducts(store_id, Number(page))
        res.send(products)
    } catch (error) {
        next(error)
    }
}

export async function deleteProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    try {
        await productService.deleteProduct(store_id, Number(productId))
        return res.status(204).send()
    } catch (error) {
        next(error)
    }
}

export async function activeProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    try {
        const product = await productService.activeProduct(store_id, Number(productId))
        return res.send(product)
    } catch (error) {
        next(error)
    }
}

export async function deactiveProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    try {
        const product = await productService.deactiveProduct(store_id, Number(productId))
        return res.send(product)
    } catch (error) {
        next(error)
    }
}

export async function getProduct(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const { store_id } = req
    const { productId } = req.params
    try {
        const product = await productService.getOne(store_id, Number(productId))
        res.send(product)
    } catch (error) {
        next(error)
    }
}