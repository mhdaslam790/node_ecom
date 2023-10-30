import { Response, Request, NextFunction } from "express";
import { validaterFunction } from "./validatorFunction";
import ApiResonseMessages from "../../response/apiResponseMessages";

export const validateLoginPhoneNumber = (req: Request, res: Response, next: NextFunction) => {
    const phoneSchema = {
        phoneNumber: { type: 'string',numeric:true, positive: true, integer: true, length: 10, optional: false },
    };
    validaterFunction(req, res, next, ApiResonseMessages.phoneNumberNotValid, phoneSchema);
}
export const validateLoginAndOTP = (req: Request, res: Response, next: NextFunction) => {
    const phoneAndOTpSchema = {
        phoneNumber: { type: 'string', numeric:true,positive: true, integer: true, optional: false, length:10, },
        otp: { type: "string", numeric:true,positive: true, integer: true, optional: false, length: 4, },
    };

    validaterFunction(req, res, next, ApiResonseMessages.phoneNumberOrOTPNotValid, phoneAndOTpSchema);
}

