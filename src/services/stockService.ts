import forbiddenError from "../errors/forbiddenError";
import stockRepository from "../repository/stockRepository";

async function getStock(store_id: number, productId: number){
    try {
        const stock = await stockRepository.getByProductId(productId)
        if(!stock){
            throw forbiddenError(['Não autorizado'])
        }
        if(stock.store_id !== store_id){
            throw forbiddenError(['Não autorizado'])
        }
    } catch (error) {
        throw error
    }
}

async function updateStock(store_id: number, productId: number, quantity: number){
    try {
        const stock = await stockRepository.getByProductId(productId)
        if(!stock){
            throw forbiddenError(['Não autorizado'])
        }
        if(stock.store_id !== store_id){
            throw forbiddenError(['Não autorizado'])
        }
        const stockUpdated = await stockRepository.updateStock(stock.quantity + quantity, productId)
        return stockUpdated   
    } catch (error) {
        throw error
    }
}

const stockService = {
    getStock,
    updateStock
}

export default stockService