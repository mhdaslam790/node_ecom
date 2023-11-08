import { Request, Response } from "express";
import ApiResponse from "../response/apiResponse";
import ApiResponseMessages from "../response/apiResponseMessages";
import { orderService } from "../di/di";

export const getOrders = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const result = await orderService.getOrders(userId!);
        return ApiResponse.success(res, ApiResponseMessages.userFetchedSuccessfully, result);

    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
export const placeOrder = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const result = await orderService.getOrders(userId!);
        return ApiResponse.success(res, ApiResponseMessages.userFetchedSuccessfully, result);

    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
export const cancelOrder = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const {orderStatus, id} = req.body;
        const result = await orderService.cancelOrder(userId!,orderStatus,id);
        return ApiResponse.success(res, ApiResponseMessages.userFetchedSuccessfully, result);

    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}