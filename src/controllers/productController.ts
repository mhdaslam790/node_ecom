import { Request ,Response} from "express";
import ApiResponse from "../response/apiResponse";
import ApiResponseMessages from "../response/apiResponseMessages";
import { productService } from "../di/di";

export const fetchAllProducts =async (req:Request, res:Response) => {
    try {
        const {page,offset} =req.body;
        const data = await productService.getAllProducts(page,offset);
        return ApiResponse.success(res, ApiResponseMessages.productFetchSuccessfully, data);

    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
    
}
export const getProductDetails =async (req:Request, res:Response) => {
    try {
        const {productId} =req.params;
        const data = await productService.getProductDetails(Number(productId));
        return ApiResponse.success(res, ApiResponseMessages.productFetchSuccessfully, data);

    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
    
}
export const addProduct =async (req:Request, res:Response) => {
    try {
        // const {productId} =req.params;
        const data = await productService.addProduct();
        return ApiResponse.success(res, ApiResponseMessages.requestSuccessFull, data);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
    
}