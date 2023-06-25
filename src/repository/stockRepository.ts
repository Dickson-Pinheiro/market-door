import { prisma } from '../config/database';

async function createStock(quantity: number, productId: number, store_id: number){
    prisma.stock.create({
        data: {
            quantity,
            product_id: productId,
            store_id
        }
    })
}

async function getByProductId(productId: number){
    return prisma.stock.findUnique({
        where: {
            product_id: productId
        }
    })
}

async function updateStock(quantity: number, product_id: number){
    return prisma.stock.update({
        where: {
            product_id
        },
        data: {
            quantity
        }
    })
}

const stockRepository = {
    createStock,
    getByProductId,
    updateStock
}

export default stockRepository