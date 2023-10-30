import { Request, Response } from "express";
import ApiResponse from "../response/apiResponse"
import ApiResponseMessages from "../response/apiResponseMessages";
import { userService } from "../di/di";

export const fetchUserAddress =async (req: Request, res: Response): Promise<void> => {
    try{
        const userId = req.userId;
        const addresses = await userService.getAddressesByUser(userId!);
        return ApiResponse.success(res,ApiResponseMessages.addressFetchedSuccessfully,addresses);
    }
    catch(error){
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
export const addAddressByUserId =async (req: Request, res: Response): Promise<void> => {
    try{
        const userId = req.userId;
        const address = req.body;
        const result = await userService.addAdress(userId!,address);
        return ApiResponse.created(res,ApiResponseMessages.addressAddedSuccessfully,result);
    }
    catch(error){
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}