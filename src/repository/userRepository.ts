import { executeSql } from "../database/database";

export default class UserRepository {
    async addOTPByPhoneNumber(phoneNumber: string, otp: string) { 

        const insertQuery = 'INSERT INTO OTPRecords(phonenumber,otp) VALUES (?,?)';
        await executeSql(insertQuery, [phoneNumber,otp]);
    }
    async getOTPByPhoneNumber(phoneNumber:string): Promise<String |null>{
        const selectQuery = 'select otp FROM OtpRecords WHERE phoneNumber = ? ORDER BY created_at LIMIT 1';
        const result = await executeSql(selectQuery,[phoneNumber]);
        if(result.length> 0) {
            return result[0];

        } else return null
    }
}