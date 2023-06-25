import { prisma } from '../config/database';

async function findByUsername(username: string){
    return prisma.store.findFirst({
        where: {
            username
        }
    })
}

async function createStore(name: string, username: string, password: string, market_id: number){
    return prisma.store.create({
        data: {
            name,
            password,
            username,
            market_id
        },
        select: {
            name: true,
            username: true,
        }
    })
}

async function getStoresByMarketId(market_id: number){
    return prisma.store.findMany({
        where: {
            market_id
        },
        select: {
            name: true,
            username: true,
        }
    })
}

async function getStoreByUsername(username: string){
    return prisma.store.findFirst({
        where: {
            username
        }
    })
}

const storeRepository = {
    findByUsername,
    createStore,
    getStoresByMarketId
}

export default storeRepository