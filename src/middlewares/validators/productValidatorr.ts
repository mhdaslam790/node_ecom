import {Response,Request, NextFunction } from "express";
import { validatorFunction } from "./validatorFunction";
import ApiResonseMessages from "../../response/apiResponseMessages";

export const validateFetchAllProducts = (req: Request, res: Response, next: NextFunction) => {
    const productBodySchema = {
        page: { type: 'number',numeric:true, positive: true, integer: true, optional: false },
        offset: { type: 'number',numeric:true, integer: true, optional: false },
    };
    validatorFunction(req, res, next, ApiResonseMessages.phoneNumberNotValid, productBodySchema);
}