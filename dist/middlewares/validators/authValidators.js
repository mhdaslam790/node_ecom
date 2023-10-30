"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginAndOTP = exports.validateLoginPhoneNumber = void 0;
const validatorFunction_1 = require("./validatorFunction");
const apiResponseMessages_1 = __importDefault(require("../../response/apiResponseMessages"));
const validateLoginPhoneNumber = (req, res, next) => {
    const phoneSchema = {
        phoneNumber: { type: 'string', positive: true, integer: true, min: 10, max: 10, optional: false },
    };
    (0, validatorFunction_1.validaterFunction)(req, res, next, apiResponseMessages_1.default.phoneNumberNotValid, phoneSchema);
};
exports.validateLoginPhoneNumber = validateLoginPhoneNumber;
const validateLoginAndOTP = (req, res, next) => {
    const phoneAndOTpSchema = {
        phoneNumber: { type: 'string', positive: true, integer: true, optional: false, min: 10, max: 10, },
        otp: { type: "string", positive: true, integer: true, optional: false, min: 4, max: 4, },
    };
    (0, validatorFunction_1.validaterFunction)(req, res, next, apiResponseMessages_1.default.phoneNumberOrOTPNotValid, phoneAndOTpSchema);
};
exports.validateLoginAndOTP = validateLoginAndOTP;
