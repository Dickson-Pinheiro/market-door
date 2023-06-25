import { prisma } from "../config/database";
import { Product } from "../interfaces/product";

async function createProduct(product: Product, store_id: number){
    return prisma.product.create({
        data: {
            ...product,
            store_id
        }
    })
}

const productRepository = {
    createProduct
}

export default productRepository