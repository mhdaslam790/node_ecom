"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.JWT_SECRET_KEY = exports.dbConfig = void 0;
require("dotenv/config");
exports.dbConfig = {
    host: (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : "localhost",
    user: (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : "root",
    password: (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : "root",
    database: (_d = process.env.DB_DATABASE) !== null && _d !== void 0 ? _d : "localhost",
    port: (_e = Number(process.env.DB_PORT)) !== null && _e !== void 0 ? _e : 3306,
    namedPlaceholders: true,
    decimalNumbers: true,
};
exports.JWT_SECRET_KEY = (_f = process.env.JWT_SECRET_KEY) !== null && _f !== void 0 ? _f : "abcdefghi12345678";
exports.port = (_g = process.env.PORT) !== null && _g !== void 0 ? _g : "9090";
