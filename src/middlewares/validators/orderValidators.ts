import { NextFunction, Response, Request } from "express";
import ApiResponseMessages from "../../response/apiResponseMessages";
import { validatorFunction } from "./validatorFunction";

export const orderModelValidator = function (req: Request, res: Response, next: NextFunction) {
    const orderModelSchema = {
        id: { type: "number", optional: false, integer: true, },
        userId: { type: "number",  optional: false ,integer: true,},
        totalPrice: { type: "number", numeric: true, length: 6 },
        orderedAt: { type: "string", min: 1, max: 30, optional: false },
        orderStatus: { type: "string", min: 1, max: 30, optional: false },
        paymentId: { type: "string", numeric: false, min: 1, max: 30, optional: false },
        signature: { type: "string", length: 10, optional: false },
    }
    validatorFunction(req, res, next, ApiResponseMessages.phoneNumberNotValid, orderModelSchema);
}
export const cancelOrderBodyValidator = function (req: Request, res: Response, next: NextFunction) {
    const cancelOrderSchema = {
        id: { type: "number", optional: false, integer: true, },
        orderStatus: { type: "number",  optional: false ,integer: true,},
    };
    validatorFunction(req, res, next, ApiResponseMessages.phoneNumberNotValid, cancelOrderSchema);
}
