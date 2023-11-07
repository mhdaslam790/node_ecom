"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartController_1 = require("../controllers/cartController");
const authMiddleware_1 = require("../middlewares/authentication/authMiddleware");
const cartValidators_1 = require("../middlewares/validators/cartValidators");
const app = (0, express_1.default)();
app.get('/getCart', authMiddleware_1.authenticationMiddleware, cartController_1.fetchAllCarts);
app.post('/addProductToCart', authMiddleware_1.authenticationMiddleware, cartValidators_1.validateAddToAndUpdateCart, cartController_1.addItemToCart);
app.get('/deleteCartItems', authMiddleware_1.authenticationMiddleware, cartValidators_1.validateDeleteItemFromCart, cartController_1.deleteAllProductFromCart);
app.get('/deleteItemFromCart', authMiddleware_1.authenticationMiddleware, cartController_1.deleteFromCart);
app.get('/updateCartItemQuantity', authMiddleware_1.authenticationMiddleware, cartController_1.updateCartItemQuantity);
app.get('/cartCounts', authMiddleware_1.authenticationMiddleware, cartController_1.checkCartCount);
exports.default = app;
