import {Response,Request, NextFunction } from "express";
import { validaterFunction } from "./validatorFunction";
import ApiResonseMessages from "../../response/apiResponseMessages";

export const validateFetchAllProducts = (req: Request, res: Response, next: NextFunction) => {
    const productBodySchema = {
        page: { type: 'number',numeric:true, positive: true, integer: true, optional: false },
        offset: { type: 'number',numeric:true, integer: true, optional: false },
    };
    validaterFunction(req, res, next, ApiResonseMessages.phoneNumberNotValid, productBodySchema);
}