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
exports.addProduct = exports.getProductDetails = exports.fetchAllProducts = void 0;
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const apiResponseMessages_1 = __importDefault(require("../response/apiResponseMessages"));
const di_1 = require("../di/di");
const fetchAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, offset } = req.body;
        const data = yield di_1.productService.getAllProducts(page, offset);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.productFetchSuccessfully, data);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.fetchAllProducts = fetchAllProducts;
const getProductDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = yield di_1.productService.getProductDetails(Number(productId));
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.productFetchSuccessfully, data);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.getProductDetails = getProductDetails;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const {productId} =req.params;
        const data = yield di_1.productService.addProduct();
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.requestSuccessFull, data);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.addProduct = addProduct;
