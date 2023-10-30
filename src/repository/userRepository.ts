
import { executeSql } from "../database/database";
import User from "../models/entity/User";

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
        const result = await executeSql(updateQuery, [name,userId]);
        console.log(result);
    }
}