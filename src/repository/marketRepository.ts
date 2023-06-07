import { prisma } from '../config/database'

async function getByEmal(email: string) {
    return prisma.market.findUnique({
        where: {
            email
        }
    })
}

async function createMarket(email: string, password: string, name: string){
    return prisma.market.create({
        data: {
            email,
            name,
            password,
        }
    })
}

const marketRepository = {
    getByEmal,
    createMarket,
}

export default marketRepository