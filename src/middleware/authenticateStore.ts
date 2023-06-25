import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export async function AuthenticateStore(req: AuthenticatedRequestStore, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) return res.status(401).send(unauthorizedError())

    const { store_id } = jwt.verify(token, process.env.JWT_SECRET_KEY_STORE) as JWTPayloadStore

    if(!store_id) return res.status(401).send(unauthorizedError())

    req.store_id = store_id
    next()
}

function unauthorizedError() {
    return {
        name: 'UnauthorizedError',
        message: 'unauthorized'
    }
}

export type AuthenticatedRequestStore = Request & JWTPayloadStore;

type JWTPayloadStore = {
    store_id: number;
};