import app from 'app';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import { cleanDB } from '../helpers/cleanDB';
import { createUser } from '../factory/market-factory';
import { generateValidToken } from '../helpers/generateValidToken';

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

describe("GET /market/health", () => {
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

    it("should respond with status 400 when email is invalid", async () => {
        const user = {
            email: '',
            password: faker.internet.password(),
            name: faker.person.fullName()
        }
        const response = await api.post('/market/signup').send(user)
        expect(response.status).toBe(400)
    })

    it("should respond with status 400 when name is invalid", async () => {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: ''
        }
        const response = await api.post('/market/signup').send(user)
        expect(response.status).toBe(400)
    })
    it("should respond with status 400 when password is invalid", async () => {
        const user = {
            email: faker.internet.email(),
            password: '',
            name: faker.person.fullName()
        }
        const response = await api.post('/market/signup').send(user)
        expect(response.status).toBe(400)
    })
})

describe("POST /market/login", () => {

    it("should respond with status 401 if email is invalid", async () => {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.person.fullName()
        }
        await createUser(user)
        const response = await api.post('/market/login').send({
            email: faker.internet.email(),
            password: user.password
        })
        expect(response.status).toBe(401)
    })

    it("should respond with status 401 if password is wrong", async () => {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.person.fullName()
        }
        await createUser(user)
        const response = await api.post('/market/login').send({
            email: user.email,
            password: faker.person.firstName()
        })
        expect(response.status).toBe(401)
    })

    it("should respond with status 400 if email is invalid format", async () => {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.person.fullName()
        }
        await createUser(user)
        const response = await api.post('/market/login').send({
            email: faker.person.fullName(),
            password: user.password
        })
        expect(response.status).toBe(400)
    })
})

describe("POST /market/store", () => {
    it("should respond with status 201 when data is ok", async () => {
        const market = await createUser()
        const token = await generateValidToken(market)
        const store = {
            name: faker.person.fullName(),
            username: faker.internet.userName(),
            password: faker.internet.password()
        }
        const response = await api.post('/market/store').set({'Authorization': `Bearer ${token}`}).send(store)
        expect(response.status).toBe(201)
    })
})

