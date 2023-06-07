import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import badRequestError from '../errors/badRequestError';

function validate(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false,
      });
  
      if (!error) {
        next();
      } else {
        res.status(404).send(badRequestError(error.details.map((d) => d.message)));
      }
    };
  }