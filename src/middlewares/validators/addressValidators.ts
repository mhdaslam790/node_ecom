import { NextFunction, Request, Response } from "express";
import ApiResponseMessages from "../../response/apiResponseMessages";
import { validaterFunction } from "./validatorFunction";

export const validateAddress = (req:Request,res:Response,next:NextFunction) => {
    const addressSchema ={
        name: {type:"string",min:3,max:30,optional:false},
        pincode: {type:"string",numeric:true,length:6},
        address: {type:"string",min:1,max:30,optional:false},
        city: {type:"string",numeric:false ,min:1,max:30,optional:false},
        phoneNumber: {type:"string",length:10,optional:false},
        isDefault: {type: "boolean",min:1,max:30,optional:false},
    };
    validaterFunction(req, res, next, ApiResponseMessages.phoneNumberOrOTPNotValid, addressSchema);
}
export const validateAddressId =(req:Request,res:Response,next:NextFunction) => {
    const addressIdSchema = {
        id:{type:"number",optional:false,integer: true,}
    }
}