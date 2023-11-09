import express  from "express";
import { authenticationMiddleware } from "../middlewares/authentication/authMiddleware";
import { cancelOrder, getOrders, placeOrder } from "../controllers/orderController";
import { cancelOrderBodyValidator, orderModelValidator } from "../middlewares/validators/orderValidators";

const app = express();

app.get('/orderInfo',authenticationMiddleware,getOrders);
app.post('/placeOrder',authenticationMiddleware,orderModelValidator,placeOrder);
app.put('/cancelOrder',authenticationMiddleware,cancelOrderBodyValidator,cancelOrder);

export default app;