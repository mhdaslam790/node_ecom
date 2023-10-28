"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.port = void 0;
require("dotenv/config");
exports.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "9090";
exports.dbConfig = {
    host: (_b = process.env.DB_HOST) !== null && _b !== void 0 ? _b : "localhost",
    user: (_c = process.env.DB_USER) !== null && _c !== void 0 ? _c : "root",
    password: (_d = process.env.DB_PASSWORD) !== null && _d !== void 0 ? _d : "root",
    database: (_e = process.env.DB_DATABASE) !== null && _e !== void 0 ? _e : "localhost",
    port: (_f = Number(process.env.DB_PORT)) !== null && _f !== void 0 ? _f : 3306,
    namedPlaceholders: true,
    decimalNumbers: true,
};
