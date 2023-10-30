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
exports.verifyOTPAndLogin = exports.loginWithPhoneNumber = void 0;
const di_1 = require("../di/di");
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const apiResponseMessages_1 = __importDefault(require("../response/apiResponseMessages"));
const jwtUtils_1 = require("../utils/jwtUtils");
const loginWithPhoneNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber } = req.body;
        const otp = yield di_1.userService.generateOTP(phoneNumber);
        const user = yield di_1.userService.getUserByPhoneNumber(phoneNumber);
        return apiResponse_1.default.success(res, "OTP sent successfully", { otp: otp, user: user });
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.loginWithPhoneNumber = loginWithPhoneNumber;
const verifyOTPAndLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phoneNumber, otp, name, deviceToken } = req.body;
        let user = yield di_1.userService.getUserByPhoneNumber(phoneNumber);
        if (!user) {
            if (!name) {
                return apiResponse_1.default.badRequest(res, apiResponseMessages_1.default.userNameNotProvided, "");
            }
        }
        const isOTPValid = yield di_1.userService.verifyOTP(phoneNumber, otp);
        if (isOTPValid) {
            if (!user) {
                user = yield di_1.userService.createUser(phoneNumber, name, deviceToken);
            }
            else {
                yield di_1.userService.updateDeviceToken(user.id, deviceToken);
            }
            const token = yield (0, jwtUtils_1.createJWT)(user.id);
            return apiResponse_1.default.success(res, apiResponseMessages_1.default.loggedInSuccessfully, { token, user });
        }
        else {
            return apiResponse_1.default.unauthorized(res, apiResponseMessages_1.default.invalidOTP);
        }
    }
    catch (error) {
        return apiResponse_1.default.internalServerError(res, apiResponseMessages_1.default.anErrorOccurred, error);
    }
});
exports.verifyOTPAndLogin = verifyOTPAndLogin;
