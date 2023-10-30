import express from "express";
import {fetchUserDetails, loginWithPhoneNumber,updateNameByUserId,verifyOTPAndLogin} from '../controllers/authController';
import { validateLoginPhoneNumber,validateLoginAndOTP } from "../middlewares/validators/authValidators";
import { authenticationMiddleware } from "../middlewares/authentication/authMiddleware";

const router = express.Router();
router.post('/login',validateLoginPhoneNumber,loginWithPhoneNumber);
router.post('/verify-otp',validateLoginAndOTP,verifyOTPAndLogin);
router.get('/userDetails',authenticationMiddleware,fetchUserDetails);
router.patch("/updateName",authenticationMiddleware,updateNameByUserId);



export default router;