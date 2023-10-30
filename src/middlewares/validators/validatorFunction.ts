import { Response, Request, NextFunction } from "express";
import Validator from 'fastest-validator';
import ApiResponse from "../../response/apiResponse";

const validator = new Validator();
export const validaterFunction = (req: Request, res: Response, next: NextFunction, message: string, schema: any,): void => {
    const checker = validator.compile(schema);
    const result = checker(req.body);
    console.log(schema);
    console.log(result);
    if (result === true) {
        next();
    }
    else {
        ApiResponse.validationError(res, message, {result},);
    }
}