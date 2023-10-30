"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authentication/authMiddleware");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post("/add-address", authMiddleware_1.authenticationMiddleware, userController_1.addAddressByUserId);
router.get("/addresses", authMiddleware_1.authenticationMiddleware, userController_1.fetchUserAddress);
router.post("/userAddress");
router.post("/userAddress");
exports.default = router;
