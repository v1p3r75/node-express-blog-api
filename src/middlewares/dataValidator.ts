import { NextFunction } from "express";
import { ObjectSchema } from "joi";
import { Request, Response } from "express";

export const validate = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {

    const { error } = schema.validate(req.body);

    if (error) {

        return res.status(400)
            .send({ status: false, message: 'Validation error', errors: error.message})
    }

    next();
}