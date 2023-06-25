import { prisma } from '../../src/config/database';

export async function cleanDB(){
    await prisma.store.deleteMany({})
    await prisma.market.deleteMany({})
}