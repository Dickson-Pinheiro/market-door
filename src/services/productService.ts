import notFoundError from "../errors/notFoundError"
import { Product } from "../interfaces/product"
import stockRepository from "../repository/stockRepository"
import productRepository from '../repository/productRepository'
import forbiddenError from "../errors/forbiddenError"

export async function createProduct(product: Product, store_id: number) {
    try {
        const success = await productRepository.createProduct(product, store_id)
        await stockRepository.createStock(0, success.id, store_id)
        return success
    } catch (error) {
        throw error
    }
}

async function updateProduct(product: Product, store_id: number, productId: number) {
    try {
        const productLocal = await productRepository.getOne(productId)
        if (!productLocal) {
            throw notFoundError(['No content'])
        }
        if (productLocal.store_id !== store_id) {
            throw forbiddenError(['forbidden error'])
        }
        const success = await productRepository.updateProduct(product, productId)
        return success
    } catch (error) {
        throw error
    }
}

async function getProducts(store_id: number, page: number) {
    const skip = (page - 1) * 12
    try {
        const products = await productRepository.getProducts(store_id, skip)
        const countProducts = await productRepository.countProducts(store_id)
        return {products, count: countProducts._count}
    } catch (error) {
        throw error
    }
}

async function deleteProduct(store_id: number, productId: number) {
    try {
        const product = await productRepository.getOne(productId)

        if (!product) {
            throw notFoundError(['No content'])
        }
        if (product.store_id !== store_id) {
            throw forbiddenError(['forbidden error'])
        }

        const result = await productRepository.deleteProduct(productId)
    } catch (error) {
        throw error
    }
}

async function activeProduct(store_id: number, productId: number) {

    try {
        const product = await productRepository.getOne(productId)

        if (!product) {
            throw notFoundError(['No content'])
        }
        if (product.store_id !== store_id) {
            throw forbiddenError(['forbidden error'])
        }

        const productUpdated = await productRepository.activeProduct(productId)
        return productUpdated
    } catch (error) {
        throw error
    }
}

async function deactiveProduct(store_id: number, productId: number) {

    try {
        const product = await productRepository.getOne(productId)

        if (!product) {
            throw notFoundError(['No content'])
        }
        if (product.store_id !== store_id) {
            throw forbiddenError(['forbidden error'])
        }

        const productUpdated = await productRepository.deactiveProduct(productId)
        return productUpdated
    } catch (error) {
        throw error
    }
}

async function getOne(store_id: number, productId: number) {

    try {
        const product = await productRepository.getOne(productId)
        if (!product) {
            throw notFoundError(['No content'])
        }
        if (product.store_id !== store_id) {
            throw forbiddenError(['forbidden error'])
        }
        return product
    } catch (error) {
        throw error
    }
}



const productService = {
    createProduct,
    getProducts,
    deleteProduct,
    activeProduct,
    deactiveProduct,
    getOne,
    updateProduct
}

export default productService