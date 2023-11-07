"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartService = exports.productService = exports.userService = exports.cartRepository = exports.productRepository = exports.userRepository = void 0;
const cartRepository_1 = __importDefault(require("../repository/cartRepository"));
const productRepository_1 = __importDefault(require("../repository/productRepository"));
const userRepository_1 = __importDefault(require("../repository/userRepository"));
const cartService_1 = __importDefault(require("../service/cartService"));
const productService_1 = __importDefault(require("../service/productService"));
const userSevice_1 = __importDefault(require("../service/userSevice"));
//Repo
exports.userRepository = new userRepository_1.default();
exports.productRepository = new productRepository_1.default();
exports.cartRepository = new cartRepository_1.default();
//Service
exports.userService = new userSevice_1.default(exports.userRepository);
exports.productService = new productService_1.default(exports.productRepository);
exports.cartService = new cartService_1.default(exports.cartRepository);
