"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAddressId = exports.validateAddress = void 0;
const apiResponseMessages_1 = __importDefault(require("../../response/apiResponseMessages"));
const validatorFunction_1 = require("./validatorFunction");
const validateAddress = (req, res, next) => {
    const addressSchema = {
        name: { type: "string", min: 3, max: 30, optional: false },
        pincode: { type: "string", numeric: true, length: 6 },
        address: { type: "string", min: 1, max: 30, optional: false },
        city: { type: "string", numeric: false, min: 1, max: 30, optional: false },
        phoneNumber: { type: "string", length: 10, optional: false },
        isDefault: { type: "boolean", min: 1, max: 30, optional: false },
    };
    (0, validatorFunction_1.validaterFunction)(req, res, next, apiResponseMessages_1.default.phoneNumberOrOTPNotValid, addressSchema);
};
exports.validateAddress = validateAddress;
const validateAddressId = (req, res, next) => {
    const addressIdSchema = {
        id: { type: "number", optional: false, integer: true, }
    };
};
exports.validateAddressId = validateAddressId;
