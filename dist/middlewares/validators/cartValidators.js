"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteItemFromCart = exports.validateAddToAndUpdateCart = void 0;
const validatorFunction_1 = require("./validatorFunction");
const apiResponseMessages_1 = __importDefault(require("../../response/apiResponseMessages"));
const validateAddToAndUpdateCart = function (req, res, next) {
    const productIdSchema = {
        productId: { type: "number", optional: false, integer: true, },
        quantity: { type: "number", optional: false, integer: true, }
    };
    (0, validatorFunction_1.validatorFunction)(req, res, next, apiResponseMessages_1.default.invalidProductOrQuantity, productIdSchema);
};
exports.validateAddToAndUpdateCart = validateAddToAndUpdateCart;
const validateDeleteItemFromCart = function (req, res, next) {
    const productIdSchema = {
        productId: { type: "number", optional: false, integer: true, },
    };
    (0, validatorFunction_1.validatorFunction)(req, res, next, apiResponseMessages_1.default.invalidProductOrQuantity, productIdSchema);
};
exports.validateDeleteItemFromCart = validateDeleteItemFromCart;
