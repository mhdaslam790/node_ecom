import UserRepository from "../repository/userRepository";

export default class UserService {
    constructor(private userRepository: UserRepository) { }
    async generateOTP(phoneNumber: string): Promise<string> {
        const otp: string = Math.floor(1000 + Math.random() * 9000).toString();
        return otp;
    }
    async verifyOTP(phoneNumber:string , otp:string ): Promise<any>{
        try {
            const storedOTP = await this.userRepository.getOTPByPhoneNumber(phoneNumber);
            return storedOTP;
        }
        catch (error) {
            console.error('An error occurred while verifying OTP:', error);
            return false;
        }
    }
}