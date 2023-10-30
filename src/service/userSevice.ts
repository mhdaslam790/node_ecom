import User from "../models/entity/User";
import UserRepository from "../repository/userRepository";

export default class UserService {
    constructor(private userRepository: UserRepository) { }
    async generateOTP(phoneNumber: string): Promise<string> {
        const otp: string = Math.floor(1000 + Math.random() * 9000).toString();
        await this.userRepository.addOTPByPhoneNumber(phoneNumber, otp);
        return otp;
    }
    async verifyOTP(phoneNumber: string, otp: string): Promise<any> {
        try {
            const storedOTP = await this.userRepository.getOTPByPhoneNumber(phoneNumber);
            // return storedOTP;
            if (!storedOTP) {
                return false;
            }
            if (storedOTP === otp) {
                await this.userRepository.deleteOTPByPhoneNumber(phoneNumber);
                return true;
            }
            return false;
        }
        catch (error) {
            console.error('An error occurred while verifying OTP:', error);
            return false;
        }
    }
    async getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
        return await this.userRepository.getUserByPhoneNumber(phoneNumber);
    }
    async createUser(phoneNumber: string, name: string, deviceToken: string): Promise<User | null> {
         await this.userRepository.addUserByPhoneNumber(phoneNumber, name, deviceToken);
         return await this.getUserByPhoneNumber(phoneNumber);
    }
    async updateDeviceToken(userId:number,deviceToken:string) {
        await this.userRepository.updateDeviceTokenByUserId(userId,deviceToken);
    }
}