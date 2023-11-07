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
/* The CartRepository class provides methods for interacting with a database to manage a user's
shopping cart. */
class CartRepository {
    getAllCartsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        SELECT c.productId,
        p.image,
        p.name,
        p.unit,
        p.currency,
        p.currentPrice,
        p.quantityPerUnit,
        c.qauntity
        FROM Cart c JOIN Product p ON c.productId = p.id
        WHERE c.userId = ?`;
            const rows = yield (0, database_1.executeSql)(query, [userId]);
            return rows;
        });
    }
    /**
     * The function adds a product to a user's cart with the specified quantity.
     * @param {number} userId - The userId parameter is the unique identifier of the user who wants to
     * add a product to their cart. It is of type number.
     * @param {number} productId - The `productId` parameter is the unique identifier of the product that
     * you want to add to the cart. It is used to identify the specific product that the user wants to
     * add to their cart.
     * @param {number} quantity - The quantity parameter represents the number of products that the user
     * wants to add to their cart.
     */
    addProductToCart(userId, productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO Cart (userId, productId,quantity) VALUES (?, ?, ?)`;
            yield (0, database_1.executeSql)(query, [userId, productId, quantity]);
        });
    }
    /**
     * The function deletes a product from a user's cart in a database.
     * @param {number} userId - The `userId` parameter is the unique identifier of the user whose cart we
     * want to delete the product from. It is of type `number`.
     * @param {number} productId - The `productId` parameter is the unique identifier of the product that
     * needs to be deleted from the user's cart.
     */
    deleteProductFromCart(userId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `DELETE FROM Cart WHERE userId = ? AND productId = ?`;
            yield (0, database_1.executeSql)(query, [userId, productId]);
        });
    }
    /**
     * The function `checkCartCount` retrieves the count of items in a user's cart from the database.
     * @param {number} userId - The `userId` parameter is a number that represents the unique identifier
     * of a user.
     * @returns a promise that resolves to a number, which represents the count of items in the cart for
     * the given user ID.
     */
    checkCartCount(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT COUNT(*) AS count FROM Cart WHERE userId = ?`;
            return yield (0, database_1.executeSql)(query, [userId]);
        });
    }
    updateCartItemQauntity(userId, productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE Cart SET quantity = ? WHERE userId = ? AND productId = ?`;
            yield (0, database_1.executeSql)(query, [quantity, userId, productId]);
        });
    }
    deleteAllProductFromCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `DELETE FROM Cart WHERE userId = ?`;
            yield (0, database_1.executeSql)(query, [userId]);
        });
    }
}
exports.default = CartRepository;
