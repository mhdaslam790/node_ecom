import express  from "express";
import { addItemToCart, checkCartCount, deleteAllProductFromCart, deleteFromCart, fetchAllCarts, updateCartItemQuantity } from "../controllers/cartController";
import { authenticationMiddleware } from "../middlewares/authentication/authMiddleware";
import { validateAddToAndUpdateCart, validateDeleteItemFromCart } from "../middlewares/validators/cartValidators";

const app = express();

app.get('/getCart',authenticationMiddleware,fetchAllCarts);
app.post('/addProductToCart',authenticationMiddleware,validateAddToAndUpdateCart,addItemToCart);
app.get('/deleteCartItems',authenticationMiddleware,validateDeleteItemFromCart,deleteAllProductFromCart);
app.get('/deleteItemFromCart',authenticationMiddleware,deleteFromCart);
app.get('/updateCartItemQuantity',authenticationMiddleware,updateCartItemQuantity);
app.get('/cartCounts',authenticationMiddleware,checkCartCount);


export default app;