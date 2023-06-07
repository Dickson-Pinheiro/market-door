import forbiddenError from "../errors/forbiddenError"
import marketRepository from "../repository/marketRepository"
import bcrypt from 'bcrypt'

async function createMarket(email: string, password: string, name: string) {
    try {
        const userWithEmail = await marketRepository.getByEmal(email)
        if (userWithEmail) {
            throw forbiddenError('user already exists')
        }
        const hashedPassword = bcrypt.hashSync(password, 10)
        await marketRepository.createMarket(email, hashedPassword, name)
    } catch (error) {
        throw error
    }
}

const marketService = {
    createMarket
}

export default marketService