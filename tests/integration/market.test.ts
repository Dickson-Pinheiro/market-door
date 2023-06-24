import app from 'app';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import { cleanDB } from '../helpers/cleanDB';
import { createUser } from '../factory/market-factory';

beforeAll(async () => {
    await cleanDB()
})

afterAll(async () => {
    await cleanDB()
})

afterEach(async () => {
    await cleanDB()
})

const api = supertest(app);

describe("GET market/health", () => {
    it("should respond with status 200", async () => {
        const response = await api.get('/market/health')
        expect(response.status).toBe(200)
    })
})

describe("POST /market/signup", () => {

    it("should respond with status 201 when exist valid data", async () => {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.person.fullName()
        }

        const response = await api.post('/market/signup').send(user)
        expect(response.status).toBe(201)
    })
})

