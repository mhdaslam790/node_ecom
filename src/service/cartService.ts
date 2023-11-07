import Cart from "../models/entity/cart";
import CartRepository from "../repository/cartRepository";

export default class CartService {
    constructor(private cartRepository: CartRepository) {

    }
    async fetchAllCarts(userId: number): Promise<Cart[]> {
        return await this.cartRepository.getAllCartsByUserId(userId);
    }
    async addProductToCart(productId: number, userId: number, quantity: number): Promise<void> {
        await this.cartRepository.addProductToCart(userId, productId, quantity);
    }
    async deleteProductFromCart(userId: number, productId: number): Promise<void> {
        await this.cartRepository.deleteProductFromCart(userId, productId);
    }
    async deleteAllProductFromCart(userId: number): Promise<void> {
        await this.cartRepository.deleteAllProductFromCart(userId);
    }
    async updateCartItemQuantity(userId: number, productId: number, quantity: number): Promise<void> {
        await this.cartRepository.updateCartItemQauntity(userId,productId,quantity);
    }
    async checkCartItemCount(userId:number):Promise<number>  {
        return await this.cartRepository.checkCartCount(userId);
    }
}