"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaterFunction = void 0;
const fastest_validator_1 = __importDefault(require("fastest-validator"));
const apiResponse_1 = __importDefault(require("../../response/apiResponse"));
const validator = new fastest_validator_1.default();
const validaterFunction = (req, res, next, message, schema) => {
    const checker = validator.compile(schema);
    const result = checker(req.body);
    console.log(schema);
    console.log(result);
    if (result === true) {
        next();
    }
    else {
        apiResponse_1.default.validationError(res, message, { result });
    }
};
exports.validaterFunction = validaterFunction;
