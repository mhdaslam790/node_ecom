"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authValidators_1 = require("../middlewares/validators/authValidators");
const authMiddleware_1 = require("../middlewares/authentication/authMiddleware");
const router = express_1.default.Router();
router.post('/login', authValidators_1.validateLoginPhoneNumber, authController_1.loginWithPhoneNumber);
router.post('/verify-otp', authValidators_1.validateLoginAndOTP, authController_1.verifyOTPAndLogin);
router.get('/userDetails', authMiddleware_1.authenticationMiddleware, authController_1.fetchUserDetails);
router.patch("/updateName", authMiddleware_1.authenticationMiddleware, authController_1.updateNameByUserId);
exports.default = router;
