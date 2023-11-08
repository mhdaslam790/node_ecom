import { executeSql } from "../database/database";
import Order from "../models/entity/order";
import OrderRepository from "../repository/orderRepository";

export default class OrderService {
    constructor(private orderRepository: OrderRepository) { }
    async placeOrder(orderModel: Order): Promise<void> {
        await this.orderRepository.placeOrder(orderModel);
    }
    async getOrders(userId: number): Promise<void> {
        await this.orderRepository.getOrders(userId);

    }
    async cancelOrder(userId: number, orderStatus: string, orderId: number): Promise<void> {
        await this.orderRepository.cancelOrder(orderId, userId, orderStatus);

    }
}