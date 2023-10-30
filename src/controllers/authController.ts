import { userService } from "../di/di";
import { Request, Response } from 'express';
import ApiResponse from "../response/apiResponse";
import ApiResonseMessages from "../response/apiResponseMessages";
import { createJWT } from "../utils/jwtUtils";

export const loginWithPhoneNumber = async (req: Request, res: Response): Promise<void> => {
    try {
        const { phoneNumber } = req.body;
        const otp = await userService.generateOTP(phoneNumber);
        const user = await userService.getUserByPhoneNumber(phoneNumber);
        return ApiResponse.success(res, "OTP sent successfully", { otp: otp, user: user });
    }
    catch (error) {
        return ApiResponse.internalServerError(res, ApiResonseMessages.anErrorOccurred, error);

    }
}
export const verifyOTPAndLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { phoneNumber, otp, name, deviceToken } = req.body;
        let user = await userService.getUserByPhoneNumber(phoneNumber);
        if (!user) {
            if (!name) {
                return ApiResponse.badRequest(res, ApiResonseMessages.userNameNotProvided, "")
            }
        }
        const isOTPValid = await userService.verifyOTP(phoneNumber, otp);
        if (isOTPValid) {
            if (!user) {
                user = await userService.createUser(phoneNumber, name, deviceToken);
            } else {
                await userService.updateDeviceToken(user!.id,deviceToken);
            }
            const token =await createJWT(user!.id);
            return ApiResponse.success(res,ApiResonseMessages.loggedInSuccessfully, {token, user})
        }
        else {
            return ApiResponse.unauthorized(res,ApiResonseMessages.invalidOTP);
        }
    }
    catch (error) {
        return ApiResponse.internalServerError(res, ApiResonseMessages.anErrorOccurred, error);
    }
}