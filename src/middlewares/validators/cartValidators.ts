import { NextFunction, Request, Response } from "express"
import { validatorFunction } from "./validatorFunction"
import ApiResponseMessages from "../../response/apiResponseMessages"

export const validateAddToAndUpdateCart = function (req: Request, res: Response, next: NextFunction) {
    const productIdSchema = {
        productId: { type: "number", optional: false, integer: true, },
        quantity: { type: "number", optional: false, integer: true, }
    }
    validatorFunction(req, res, next, ApiResponseMessages.invalidProductOrQuantity, productIdSchema);
}

export const validateDeleteItemFromCart = function (req: Request, res: Response, next: NextFunction) {
    const productIdSchema = {
        productId: { type: "number", optional: false, integer: true, },
    }
    validatorFunction(req, res, next, ApiResponseMessages.invalidProductOrQuantity, productIdSchema);
}
