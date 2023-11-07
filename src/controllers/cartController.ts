import { Request, Response } from "express";
import ApiResponse from "../response/apiResponse";
import ApiResponseMessages from "../response/apiResponseMessages";
import { cartService } from "../di/di";


/**
 * The function fetches all carts for a specific user and returns the data as a successful API response
 * or an error response if an error occurs.
 * @param {Request} req - The `req` parameter is an object representing the HTTP request made to the
 * server. It contains information such as the request method, headers, query parameters, and body.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties that allow you to set the response status,
 * headers, and body.
 * @returns a response object.
 */
export const fetchAllCarts = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const data = await cartService.fetchAllCarts(userId!);
        return ApiResponse.success(res, ApiResponseMessages.cartFetchedSuccessfully, data);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}

/**
 * The function `addItemToCart` adds a product to a user's cart.
 * @param {Request} req - The `req` parameter is an object representing the HTTP request made to the
 * server. It contains information such as the request method, headers, URL, and body.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties that allow you to set the response status,
 * headers, and body.
 * @returns The code is returning the result of the `cartService.addProductToCart(productId, userId)`
 * function call.
 */
export const addItemToCart = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const { productId, quantity } = req.body;
        const data = await cartService.addProductToCart(productId, userId!, quantity);
        return ApiResponse.success(res, ApiResponseMessages.addedToCart, data);

    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
/**
 * The function `deleteFromCart` is an asynchronous function that handles the deletion of a product
 * from a user's cart.
 * @param {Request} req - The `req` parameter is an object that represents the HTTP request made to the
 * server. It contains information such as the request headers, request body, request method, and
 * request URL.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties that allow you to set the status code,
 * headers, and send the response body.
 * @returns an ApiResponse with the success message "cartFetchedSuccessfully" and the result of
 * deleting the product from the cart.
 */

export const deleteFromCart = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const { productId } = req.body;
        const result = await cartService.deleteProductFromCart(userId!, productId);
        return ApiResponse.success(res, ApiResponseMessages.cartFetchedSuccessfully, result);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);

    }
}

/**
 * The function `deleteAllProductFromCart` deletes all products from a user's cart and returns a
 * success response with the updated cart.
 * @param {Request} req - The `req` parameter is an object that represents the HTTP request made to the
 * server. It contains information such as the request method, headers, query parameters, and request
 * body.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties that allow you to control the response, such
 * as setting the status code, headers, and sending the response body.
 * @returns a response object.
 */
export const deleteAllProductFromCart = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const result = await cartService.deleteAllProductFromCart(userId!);
        return ApiResponse.success(res, ApiResponseMessages.cartFetchedSuccessfully, result);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}
/**
 * The function `checkCartCount` is an asynchronous function that takes in a request and response
 * object, retrieves the user ID from the request, calls the `checkCartItemCount` function from the
 * `cartService` module, and returns a success response with the result or an error response if an
 * error occurs.
 * @param {Request} req - The `req` parameter is an object representing the HTTP request made to the
 * server. It contains information such as the request method, headers, query parameters, and request
 * body.
 * @param {Response} res - The `res` parameter is the response object that is used to send the response
 * back to the client. It contains methods and properties that allow you to control the response, such
 * as setting the status code, headers, and sending the response body.
 * @returns an ApiResponse with the success status, a message indicating the cart quantity, and the
 * result of the checkCartItemCount function.
 */

export const checkCartCount = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const result = await cartService.checkCartItemCount(userId!);
        return ApiResponse.success(res, ApiResponseMessages.cartQuantity, result);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}

/**
 * The function updates the quantity of a specific item in a user's cart.
 * @param {Request} req - The `req` parameter is an object that represents the HTTP request made to the
 * server. It contains information such as the request method, headers, URL, query parameters, request
 * body, etc. In this case, it is of type `Request`, which is likely a custom type defined in the code
 * @param {Response} res - The `res` parameter is the response object that will be sent back to the
 * client. It is used to send the response data, such as the status code, headers, and the response
 * body.
 * @returns a Promise that resolves to a response object.
 */
export const updateCartItemQuantity =async (req: Request, res: Response)  => {
    try {
        const userId = req.userId;
        const {productId,quantity} = req.body;
        const result = await cartService.updateCartItemQuantity(userId!,productId,quantity);
        return ApiResponse.success(res, ApiResponseMessages.cartQuantity, result);
    } catch (error) {
        return ApiResponse.internalServerError(res, ApiResponseMessages.anErrorOccurred, error);
    }
}