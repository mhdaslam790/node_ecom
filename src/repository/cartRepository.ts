import { executeSql } from "../database/database";
import Cart from "../models/entity/cart";
/* The CartRepository class provides methods for interacting with a database to manage a user's
shopping cart. */

export default class CartRepository {
    async getAllCartsByUserId(userId: number): Promise<Cart[]> {
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
        const rows = await executeSql(query, [userId]);
        return rows;
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
    async addProductToCart(userId: number, productId: number, quantity: number): Promise<void> {
        const query = `INSERT INTO Cart (userId, productId,quantity) VALUES (?, ?, ?)`;
        await executeSql(query, [userId, productId, quantity]);
    }
  /**
   * The function deletes a product from a user's cart in a database.
   * @param {number} userId - The `userId` parameter is the unique identifier of the user whose cart we
   * want to delete the product from. It is of type `number`.
   * @param {number} productId - The `productId` parameter is the unique identifier of the product that
   * needs to be deleted from the user's cart.
   */
    async deleteProductFromCart(userId: number, productId: number): Promise<void> {
        const query = `DELETE FROM Cart WHERE userId = ? AND productId = ?`;
        await executeSql(query, [userId, productId]);
    }
  /**
   * The function `checkCartCount` retrieves the count of items in a user's cart from the database.
   * @param {number} userId - The `userId` parameter is a number that represents the unique identifier
   * of a user.
   * @returns a promise that resolves to a number, which represents the count of items in the cart for
   * the given user ID.
   */
    async checkCartCount(userId: number): Promise<number> {
        const query = `SELECT COUNT(*) AS count FROM Cart WHERE userId = ?`;
        return await executeSql(query, [userId]);
    }
    async updateCartItemQauntity(userId: number, productId: number, quantity: number): Promise<void> {
        const query = `UPDATE Cart SET quantity = ? WHERE userId = ? AND productId = ?`;
        await executeSql(query, [quantity, userId, productId]);
    }
    async deleteAllProductFromCart(userId: number): Promise<void> {
        const query = `DELETE FROM Cart WHERE userId = ?`;
        await executeSql(query, [userId]);
    }
}