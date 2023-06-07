import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import forbiddenError from '../errors/forbiddenError'
import notFoundError from '../errors/notFoundError'
import unauthorizedError from '../errors/unauthorizedError'
import marketRepository from '../repository/marketRepository'
import dotenv from 'dotenv'
dotenv.config()

async function createMarket(email: string, password: string, name: string) {
    try {
        const userWithEmail = await marketRepository.getByEmal(email)
        if (userWithEmail) {
            throw forbiddenError(['user already exist'])
        }
        const hashedPassword = bcrypt.hashSync(password, 10)
        await marketRepository.createMarket(email, hashedPassword, name)
    } catch (error) {
        throw error
    }
}

async function signinMarket(email: string, password: string) {
    const userWithEmail = await marketRepository.getByEmal(email)
    if (!userWithEmail) {
        throw notFoundError(['user not found.'])
    }

    const confirmPassword = bcrypt.compare(password, userWithEmail.password)
    if(!confirmPassword){
        throw unauthorizedError(['Unauthorized.'])
    }

    let token = jwt.sign({market_id: userWithEmail.id}, process.env.JWT_SECRET_KEY, {expiresIn: '3h'})

    return {
        token,
        market_name: userWithEmail.name,
        market_id: userWithEmail.id
    }
}

const marketService = {
    createMarket,
    signinMarket
}

export default marketService