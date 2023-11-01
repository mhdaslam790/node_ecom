import { mapAddressToAddressResponseDTO } from "../mapper/mapper";
import AddressRequestDTO from "../models/dto/request/addressRequestDTO";
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
    async updateDeviceToken(userId: number, deviceToken: string) {
        await this.userRepository.updateDeviceTokenByUserId(userId, deviceToken);
    }
    async getUserById(userId: number) {
        return await this.userRepository.getUserByUserId(userId);
    }
    async updateNameByUserId(userId: number, name: string) {
        await this.userRepository.updateUserNameByUserId(userId, name);
        return this.getUserById(userId);
    }

    async addAdress(userId: number, address: AddressRequestDTO) {
        if (address.isDefault) {
            await this.updateAdressToNotDefault(userId);
        }
        await this.userRepository.addAdressesByUserId(userId, address);
    }

    async updateAdressToNotDefault(userId: number) {
        await this.userRepository.updateAddressTONotDefault(userId);
    }
    async getAddressesByUser(userId: number): Promise<AddressRequestDTO[]> {
        const addresses = await this.userRepository.getAddressByUserId(userId);
        return addresses.map((address) => mapAddressToAddressResponseDTO(address, userId));
    }
    async updateAddressToDefault(addressId: number, userId: number): Promise<void> {
        await this.userRepository.updateAddressToDefault(addressId, userId);
    }
    async updateAddress(updatedAddress: AddressRequestDTO, userId: number): Promise<void> {
        if (updatedAddress.isDefault) {
            await this.updateAdressToNotDefault(userId);
        }
        await this.userRepository.editAddress(updatedAddress.id, updatedAddress);
    }
    async getDeviceTokenBYUserId(userId: number): Promise<string | null> {
        return await this.userRepository.getDeviceTokenByUserId(userId);
    }
}