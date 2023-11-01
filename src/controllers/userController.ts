import { Request, Response } from "express";
import ApiResponse from "../response/apiResponse"
import ApiResponseMessages from "../response/apiResponseMessages";
import { userService } from "../di/di";
import AddressRequestDTO from "../models/dto/request/addressRequestDTO";

export const fetchUserAddress = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.userId;
        const addresses = await userService.getAddressesByUser(userId!);
        return ApiResponse.success(res, ApiResponseMessages.addressFetchedSuccessfully, addresses);
    }
    catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
export const addAddressByUserId = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.userId;
        const address = req.body;
        const result = await userService.addAdress(userId!, address);
        return ApiResponse.created(res, ApiResponseMessages.addressAddedSuccessfully, result);
    }
    catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
export const updateDefaultAddress = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.userId;
        const { addressId } = req.params;
        const result = await userService.updateAddressToDefault(Number(addressId), userId!);
        return ApiResponse.success(res, ApiResponseMessages.addressUpdatedSuccessfully, result);
    }
    catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
export const updateAddress = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const address: AddressRequestDTO = req.body;
        const result = await userService.updateAddress(address, userId!);
        return ApiResponse.success(res, ApiResponseMessages.addressUpdatedSuccessfully, result);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);

    }

}
