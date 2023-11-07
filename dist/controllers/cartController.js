"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartItemQuantity = exports.checkCartCount = exports.deleteAllProductFromCart = exports.deleteFromCart = exports.addItemToCart = exports.fetchAllCarts = void 0;
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const apiResponseMessages_1 = __importDefault(require("../response/apiResponseMessages"));
const di_1 = require("../di/di");
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
const fetchAllCarts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const data = yield di_1.cartService.fetchAllCarts(userId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.cartFetchedSuccessfully, data);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.fetchAllCarts = fetchAllCarts;
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
const addItemToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { productId, quantity } = req.body;
        const data = yield di_1.cartService.addProductToCart(productId, userId, quantity);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.addedToCart, data);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.addItemToCart = addItemToCart;
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
const deleteFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { productId } = req.body;
        const result = yield di_1.cartService.deleteProductFromCart(userId, productId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.cartFetchedSuccessfully, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.deleteFromCart = deleteFromCart;
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
const deleteAllProductFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const result = yield di_1.cartService.deleteAllProductFromCart(userId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.cartFetchedSuccessfully, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.deleteAllProductFromCart = deleteAllProductFromCart;
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
const checkCartCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const result = yield di_1.cartService.checkCartItemCount(userId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.cartQuantity, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.checkCartCount = checkCartCount;
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
const updateCartItemQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { productId, quantity } = req.body;
        const result = yield di_1.cartService.updateCartItemQuantity(userId, productId, quantity);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.cartQuantity, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.updateCartItemQuantity = updateCartItemQuantity;
