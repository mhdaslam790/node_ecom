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
exports.updateAddress = exports.updateDefaultAddress = exports.addAddressByUserId = exports.fetchUserAddress = void 0;
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const apiResponseMessages_1 = __importDefault(require("../response/apiResponseMessages"));
const di_1 = require("../di/di");
const fetchUserAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const addresses = yield di_1.userService.getAddressesByUser(userId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.addressFetchedSuccessfully, addresses);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.fetchUserAddress = fetchUserAddress;
const addAddressByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const address = req.body;
        const result = yield di_1.userService.addAdress(userId, address);
        return apiResponse_1.default.created(res, apiResponseMessages_1.default.addressAddedSuccessfully, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.addAddressByUserId = addAddressByUserId;
const updateDefaultAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { addressId } = req.params;
        const result = yield di_1.userService.updateAddressToDefault(Number(addressId), userId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.addressUpdatedSuccessfully, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.updateDefaultAddress = updateDefaultAddress;
const updateAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const address = req.body;
        const result = yield di_1.userService.updateAddress(address, userId);
        return apiResponse_1.default.success(res, apiResponseMessages_1.default.addressUpdatedSuccessfully, result);
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.updateAddress = updateAddress;
