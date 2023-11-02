"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productValidatorr_1 = require("../middlewares/validators/productValidatorr");
const productController_1 = require("../controllers/productController");
const app = (0, express_1.default)();
app.post("/allProducts", productValidatorr_1.validateFetchAllProducts, productController_1.fetchAllProducts);
app.get("/getProduct/:productId", productController_1.getProductDetails);
app.post("/addProduct", productController_1.addProduct);
exports.default = app;
