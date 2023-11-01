
import { executeSql } from "../database/database";
import AddressRequestDTO from "../models/dto/request/addressRequestDTO";
import User from "../models/entity/User";
import Address from "../models/entity/address";

export default class UserRepository {
    async addOTPByPhoneNumber(phoneNumber: string, otp: string) {

        const insertQuery = 'INSERT INTO OTPRecords(phonenumber,otp) VALUES (?,?)';
        await executeSql(insertQuery, [phoneNumber, otp]);
    }
    async getOTPByPhoneNumber(phoneNumber: string): Promise<String | null> {
        const selectQuery = 'select otp FROM OtpRecords WHERE phoneNumber = ? ORDER BY created_at LIMIT 1';
        const result = await executeSql(selectQuery, [phoneNumber]);
        if (result.length > 0) {
            return result[0].otp;

        } else return null
    }
    async getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
        const selectQuery = "SELECT * FROM Users WHERE phoneNumber = ? LIMIT 1";

        const result = await executeSql(selectQuery, [phoneNumber]);
        if (result.length) {
            return result[0];
        }
        return null;
    }
    async deleteOTPByPhoneNumber(phoneNumber: string) {
        const deleteQuery = "DELETE FROM OTPRecords WHERE phoneNumber = ?";
        await executeSql(deleteQuery, [phoneNumber]);
    }
    async addUserByPhoneNumber(phoneNumber: string, name: string, deviceToken: string) {
        const insertQuery = "INSERT INTO Users (phoneNumber,name,deviceToken) VALUES (?,?,?)";
        await executeSql(insertQuery, [phoneNumber, name, deviceToken]);
    }
    async updateDeviceTokenByUserId(userId: number, deviceToken: string) {
        const query = 'UPDATE Users SET deviceToken = ? WHERE id = ?';
        await executeSql(query, [deviceToken, userId]);
    }
    async getUserByUserId(userId: number): Promise<User | null> {
        const selectQuery = 'SELECT * FROM Users WHERE id = ?';
        const result = await executeSql(selectQuery, [userId]);
        if (result.length) {
            return result[0];
        }
        return null;
    }
    async updateUserNameByUserId(userId: number, name: string) {
        const updateQuery = 'UPDATE Users SET name = ? WHERE id = ?';
        const result = await executeSql(updateQuery, [name, userId]);
        console.log(result);
    }
    async updateAddressTONotDefault(userId: number): Promise<void> {
        const query = 'UPDATE Address SET isDefault = false where userId = ?';
        await executeSql(query, [userId]);
    }
    async addAdressesByUserId(userId: number, address: AddressRequestDTO) {
        const query = "INSERT INTO Address (userId,name,pincode,address,city,state,phoneNumber,isDefault) VALUES (?,?,?,?,?,?,?,?)";
        await executeSql(query, [userId, address.name, address.pincode, address.address, address.city, address.state, address.phoneNumber, address.isDefault]);
    }
    async getAddressByUserId(userId: number): Promise<Address[]> {
        const query = "SELECT `Address`.*, `User`.`id` AS `User.id`, `User`.`name` AS `User.name`, `User`.`phoneNumber` AS `User.phoneNumber`, `User`.`deviceToken` AS `User.deviceToken`" +
            "FROM `Address` AS `Address`" +
            "LEFT JOIN `Users` AS `User` ON `Address`.`userId` = `User`.`id`";
        const result = await executeSql(query, [userId]);
        console.log(result);
        return result as Address[];
    }
    async updateAddressToDefault(addressId: number, userId: number): Promise<void> {
        const query = `
        UPDATE Address 
        SET isDefault = CASE WHEN id =? THEN true
        ELSE false 
        END
        WHERE userId = ?
        `;
        await executeSql(query, [addressId, userId]);
    }
    async editAddress(addressId: number, newData: any): Promise<void> {
        const query = "UPDATE Address SET ? WHERE id = ?";
        await executeSql(query, [newData, addressId]);
    }
    async getDeviceTokenByUserId(userId: number): Promise<string | null> {
        const selectQuery = 'SELECT deviceToken FROM Users WHERE id = ? LIMIT 1';
        const result = await executeSql(selectQuery, [userId]);
        if (result.length > 0) {
            return result[0].deviceToken;
        }
        else return null;
    }
}
