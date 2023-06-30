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

async function updateProduct(product: Product, productId: number){
    return prisma.product.update({
        where: {
            id: productId
        },
        data: {
            ...product
        }
    })
}

async function getProducts(store_id: number, skip: number){
    return prisma.product.findMany({
        take: 12,
        skip,
        where: {
            store_id
        },
        include: {
            category: {
                select: {
                    category: true
                }
            }
        }
    })
}

async function countProducts(store_id: number){
    return prisma.product.aggregate({
        where: {
            store_id,
        },
        _count: {
            store_id: true
        }
    })
}

async function getOne(productId: number){
    return prisma.product.findUnique({
        where: {
            id: productId
        }
    })
}

async function deleteProduct(productId: number){
    return prisma.product.delete({
        where: {
            id: productId
        }
    })
}

async function activeProduct(productId: number){
    return prisma.product.update({
        where: {
            id: productId
        },
        data: {
            active: true
        }
    })
}

async function deactiveProduct(productId: number){
    return prisma.product.update({
        where: {
            id: productId
        },
        data: {
            active: false
        }
    })
}

const productRepository = {
    createProduct,
    getProducts,
    getOne,
    deleteProduct,
    activeProduct,
    deactiveProduct,
    updateProduct,
    countProducts
}

export default productRepository