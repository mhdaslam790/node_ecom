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
class CartService {
    constructor(cartRepository) {
        this.cartRepository = cartRepository;
    }
    fetchAllCarts(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cartRepository.getAllCartsByUserId(userId);
        });
    }
    addProductToCart(productId, userId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cartRepository.addProductToCart(userId, productId, quantity);
        });
    }
    deleteProductFromCart(userId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cartRepository.deleteProductFromCart(userId, productId);
        });
    }
    deleteAllProductFromCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cartRepository.deleteAllProductFromCart(userId);
        });
    }
    updateCartItemQuantity(userId, productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cartRepository.updateCartItemQauntity(userId, productId, quantity);
        });
    }
    checkCartItemCount(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cartRepository.checkCartCount(userId);
        });
    }
}
exports.default = CartService;
