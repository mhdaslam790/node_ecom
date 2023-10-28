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
                return result[0];
            }
            else
                return null;
        });
    }
}
exports.default = UserRepository;
