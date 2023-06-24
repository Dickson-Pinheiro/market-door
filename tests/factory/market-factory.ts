import { faker } from '@faker-js/faker';
import { prisma } from '../../src/config/database';

export async function createUser(){
    return prisma.market.create({
        data: {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.person.fullName()
        }
    })
}