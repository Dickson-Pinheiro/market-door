import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import forbiddenError from '../errors/forbiddenError'
import notFoundError from '../errors/notFoundError'
import unauthorizedError from '../errors/unauthorizedError'
import marketRepository from '../repository/marketRepository'
import dotenv from 'dotenv'
import storeRepository from '../repository/storeRepository'
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
    try {
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
    } catch (error) {
        throw error;
    }
}

async function createStore(name: string, username: string, password: string, market_id: number){
    try {
        const storeByUsername = await storeRepository.findByUsername(username)
        if(storeByUsername){
            return forbiddenError(['user already exist'])
        }
        
        const hashedPassword = bcrypt.hashSync(password, 10)
        const store = await storeRepository.createStore(name, username, hashedPassword, market_id)
        return store;   
    } catch (error) {
        throw error
    }
}

async function getStoresByMarketId(market_id: number){
    try {
        const stores = await storeRepository.getStoresByMarketId(market_id) 
        return stores   
    } catch (error) {
        throw error
    }
}

const marketService = {
    createMarket,
    signinMarket,
    createStore,
    getStoresByMarketId
}

export default marketService