import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import badRequestError from '../errors/badRequestError';

export default function validate(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false,
      });
  
      if (!error) {
        next();
      } else {
        res.status(400).send(badRequestError(error.details.map((d) => d.message)));
      }
    };
  }