import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export async function AuthenticateMarket(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) return res.status(401).send(unauthorizedError())

    try {
        const { market_id } = jwt.verify(token, process.env.JWT_SECRET_KEY) as JWTPayload
        if (!market_id) return res.status(401).send(unauthorizedError())
        req.market_id = market_id
        next()
    } catch (error) {
        return res.status(401).send(unauthorizedError())
    }
}

function unauthorizedError() {
    return {
        name: 'UnauthorizedError',
        message: 'unauthorized'
    }
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
    market_id: number;
};
