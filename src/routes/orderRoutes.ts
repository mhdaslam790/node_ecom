import express  from "express";
import { authenticationMiddleware } from "../middlewares/authentication/authMiddleware";
import { cancelOrder, getOrders, placeOrder } from "../controllers/orderController";

const app = express();

app.get('/orderInfo',authenticationMiddleware,getOrders);
app.post('/placeOrder',authenticationMiddleware,placeOrder);
app.put('/cancelOrder',authenticationMiddleware,cancelOrder);

export default app;