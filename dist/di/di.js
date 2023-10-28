"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.userRepository = void 0;
const userRepository_1 = __importDefault(require("../repository/userRepository"));
const userSevice_1 = __importDefault(require("../service/userSevice"));
exports.userRepository = new userRepository_1.default();
exports.userService = new userSevice_1.default(exports.userRepository);
