import { Product } from "../interfaces/product"
import productRepository from '../repository/productRepository'

export async function createProduct(product: Product, store_id: number){
    try {
        const success = await productRepository.createProduct(product, store_id)
        return success
    } catch (error) {
        throw error        
    }
}

const productService = {
    createProduct
}

export default productService