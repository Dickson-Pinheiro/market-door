import { faker } from '@faker-js/faker';
import { prisma } from '../../src/config/database';
import { market } from '@prisma/client';

export async function createUser(user?: Partial<market>){
    return prisma.market.create({
        data: {
            email: user?.email || faker.internet.email(),
            password: user?.password || faker.internet.password(),
            name: user?.name || faker.person.fullName()
        }
    })
}