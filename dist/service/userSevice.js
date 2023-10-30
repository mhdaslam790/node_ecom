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
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    generateOTP(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            yield this.userRepository.addOTPByPhoneNumber(phoneNumber, otp);
            return otp;
        });
    }
    verifyOTP(phoneNumber, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storedOTP = yield this.userRepository.getOTPByPhoneNumber(phoneNumber);
                // return storedOTP;
                if (!storedOTP) {
                    return false;
                }
                if (storedOTP === otp) {
                    yield this.userRepository.deleteOTPByPhoneNumber(phoneNumber);
                    return true;
                }
                return false;
            }
            catch (error) {
                console.error('An error occurred while verifying OTP:', error);
                return false;
            }
        });
    }
    getUserByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserByPhoneNumber(phoneNumber);
        });
    }
    createUser(phoneNumber, name, deviceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.addUserByPhoneNumber(phoneNumber, name, deviceToken);
            return yield this.getUserByPhoneNumber(phoneNumber);
        });
    }
    updateDeviceToken(userId, deviceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.updateDeviceTokenByUserId(userId, deviceToken);
        });
    }
    getAddressByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserByUserId(userId);
        });
    }
    updateNameByUserId(userId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.updateUserNameByUserId(userId, name);
            return this.getUserById(userId);
        });
    }
}
exports.default = UserService;
