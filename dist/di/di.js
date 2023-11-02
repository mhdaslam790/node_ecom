"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = exports.userService = exports.productRepository = exports.userRepository = void 0;
const productRepository_1 = __importDefault(require("../repository/productRepository"));
const userRepository_1 = __importDefault(require("../repository/userRepository"));
const productService_1 = __importDefault(require("../service/productService"));
const userSevice_1 = __importDefault(require("../service/userSevice"));
exports.userRepository = new userRepository_1.default();
exports.productRepository = new productRepository_1.default();
exports.userService = new userSevice_1.default(exports.userRepository);
exports.productService = new productService_1.default(exports.productRepository);
