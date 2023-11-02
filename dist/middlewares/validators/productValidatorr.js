"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFetchAllProducts = void 0;
const validatorFunction_1 = require("./validatorFunction");
const apiResponseMessages_1 = __importDefault(require("../../response/apiResponseMessages"));
const validateFetchAllProducts = (req, res, next) => {
    const productBodySchema = {
        page: { type: 'number', numeric: true, positive: true, integer: true, optional: false },
        offset: { type: 'number', numeric: true, integer: true, optional: false },
    };
    (0, validatorFunction_1.validaterFunction)(req, res, next, apiResponseMessages_1.default.phoneNumberNotValid, productBodySchema);
};
exports.validateFetchAllProducts = validateFetchAllProducts;
