import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import storeRepository from "../repository/storeRepository";
import unauthorizedError from '../errors/unauthorizedError';

async function loginStore(username: string, password: string){
    try {
        const storeWithUsername = await storeRepository.findByUsername(username)
        if(!username){
            throw unauthorizedError(['Unauthorizerd.'])
        }

        const comparePass = await bcrypt.compare(password, storeWithUsername.password)
        if(!comparePass){
            throw unauthorizedError(['Unauthorizerd.'])
        }

        const token = jwt.sign({store_id: storeWithUsername.id}, process.env.JWT_SECRET_KEY_STORE, {expiresIn: '3h'})
        return {
            token,
            store_name: storeWithUsername.name,
            store_id: storeWithUsername.id
        }
    } catch (error) {
        throw error
    }
}

const storeService = {
    loginStore
}

export default storeService