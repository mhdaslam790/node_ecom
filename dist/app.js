"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = require("./config/configs");
const body_parser_1 = __importDefault(require("body-parser"));
const authroutes_1 = __importDefault(require("./routes/authroutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productroutes_1 = __importDefault(require("./routes/productroutes"));
const database_1 = require("./database/database");
const app = (0, express_1.default)();
(0, database_1.initDb)();
//middleware
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use('/api/v1/auth', authRoutes);
app.use('/auth', authroutes_1.default);
app.use('/user', userRoutes_1.default);
app.use('/products', productroutes_1.default);
app.listen(configs_1.port, () => {
    console.log(`Listening on port ${configs_1.port}`);
});
process.on('exit', () => {
    (0, database_1.closeDb)();
});
