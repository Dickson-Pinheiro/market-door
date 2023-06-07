import { Response, Request, NextFunction } from "express";
import { ErrorResponse } from "../protocols";

const acceptedErrors = {
    notFoundError(err: ErrorResponse, res: Response){
        return res.status(404).send(err)
    },
    
    forbiddenError(err: ErrorResponse, res: Response){
        return res.status(403).send(err)
    },

    internalServerError(_err: ErrorResponse, res: Response){
        return res.status(500).send({
            name: 'internalServerError',
            message: 'internal server error'
        })
    },
    
    unauthorizedError(err: ErrorResponse, res: Response){
        return res.status(401).send(err)
    }
}

export function ErrorHandling(err: ErrorResponse, req: Request, res: Response, next: NextFunction){
    try {
        acceptedErrors[err.name](err, res)
    } catch (error) {
        acceptedErrors['internalServerError'](error, res)
    }
}