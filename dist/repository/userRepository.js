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
const database_1 = require("../database/database");
class UserRepository {
    addOTPByPhoneNumber(phoneNumber, otp) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertQuery = 'INSERT INTO OTPRecords(phonenumber,otp) VALUES (?,?)';
            yield (0, database_1.executeSql)(insertQuery, [phoneNumber, otp]);
        });
    }
    getOTPByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectQuery = 'select otp FROM OtpRecords WHERE phoneNumber = ? ORDER BY created_at LIMIT 1';
            const result = yield (0, database_1.executeSql)(selectQuery, [phoneNumber]);
            if (result.length > 0) {
                return result[0].otp;
            }
            else
                return null;
        });
    }
    getUserByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectQuery = "SELECT * FROM Users WHERE phoneNumber = ? LIMIT 1";
            const result = yield (0, database_1.executeSql)(selectQuery, [phoneNumber]);
            if (result.length) {
                return result[0];
            }
            return null;
        });
    }
    deleteOTPByPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteQuery = "DELETE FROM OTPRecords WHERE phoneNumber = ?";
            yield (0, database_1.executeSql)(deleteQuery, [phoneNumber]);
        });
    }
    addUserByPhoneNumber(phoneNumber, name, deviceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertQuery = "INSERT INTO Users (phoneNumber,name,deviceToken) VALUES (?,?,?)";
            yield (0, database_1.executeSql)(insertQuery, [phoneNumber, name, deviceToken]);
        });
    }
    updateDeviceTokenByUserId(userId, deviceToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE Users SET deviceToken = ? WHERE id = ?';
            yield (0, database_1.executeSql)(query, [deviceToken, userId]);
        });
    }
    getUserByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectQuery = 'SELECT * FROM Users WHERE id = ?';
            const result = yield (0, database_1.executeSql)(selectQuery, [userId]);
            if (result.length) {
                return result[0];
            }
            return null;
        });
    }
    updateUserNameByUserId(userId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateQuery = 'UPDATE Users SET name = ? WHERE id = ?';
            const result = yield (0, database_1.executeSql)(updateQuery, [name, userId]);
            console.log(result);
        });
    }
    updateAddressTONotDefault(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE Address SET isDefault = false where userId = ?';
            yield (0, database_1.executeSql)(query, [userId]);
        });
    }
    addAdressesByUserId(userId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO Address (userId,name,pincode,address,city,state,phoneNumber,isDefault) VALUES (?,?,?,?,?,?,?,?)";
            yield (0, database_1.executeSql)(query, [userId, address.name, address.pincode, address.address, address.city, address.state, address.phoneNumber, address.isDefault]);
        });
    }
    getAddressByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT `Address`.*, `User`.`id` AS `User.id`, `User`.`name` AS `User.name`, `User`.`phoneNumber` AS `User.phoneNumber`, `User`.`deviceToken` AS `User.deviceToken`" +
                "FROM `Address` AS `Address`" +
                "LEFT JOIN `Users` AS `User` ON `Address`.`userId` = `User`.`id`";
            const result = yield (0, database_1.executeSql)(query, [userId]);
            console.log(result);
            return result;
        });
    }
    updateAddressToDefault(addressId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        UPDATE Address 
        SET isDefault = CASE WHEN id =? THEN true
        ELSE false 
        END
        WHERE userId = ?
        `;
            yield (0, database_1.executeSql)(query, [addressId, userId]);
        });
    }
    editAddress(addressId, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE Address SET ? WHERE id = ?";
            yield (0, database_1.executeSql)(query, [newData, addressId]);
        });
    }
    getDeviceTokenByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectQuery = 'SELECT deviceToken FROM Users WHERE id = ? LIMIT 1';
            const result = yield (0, database_1.executeSql)(selectQuery, [userId]);
            if (result.length > 0) {
                return result[0].deviceToken;
            }
            else
                return null;
        });
    }
}
exports.default = UserRepository;
