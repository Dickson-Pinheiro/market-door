import { prisma } from '../config/database'

async function getCategories(){
    return prisma.category.findMany({
        select: {
            category: true,
            id: true
        }
    })
}

const categoryRepository = {
    getCategories
}

export default categoryRepository