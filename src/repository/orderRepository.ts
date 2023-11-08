import { executeSql } from "../database/database";
import Order from "../models/entity/order";

export default class OrderRepository {
    async getOrders(userId: number): Promise<Order[]> {
        const query = `SELECT * FROM Orders WHERE userId = ?`;
        return await executeSql(query, [userId]);
    }
    async placeOrder(orderModel: Order) {
        const query = `INSERT INTO Orders(userId,totalPrice,orderedAt,orderStatus,paymentId,signature) VALUES (?, ?, ?, ?, ?, ?)`;
        return await executeSql(query, [orderModel.userId, orderModel.totalPrice, orderModel.orderedAt,
        orderModel.orderStatus, orderModel.paymentId, orderModel.signature
        ]);
    }
    async cancelOrder(orderId: number, userId: number, orderStatus: string): Promise<void> {
        const query = `UPDATE Orders SET orderStatus = ? WHERE userId = ? and id = ?`;
        await executeSql(query, [orderStatus, userId, orderId]);
    }
}		
