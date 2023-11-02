import express from 'express';
import { validateFetchAllProducts } from '../middlewares/validators/productValidatorr';
import { addProduct, fetchAllProducts,getProductDetails } from '../controllers/productController';

const app = express();

app.post("/allProducts",validateFetchAllProducts,fetchAllProducts);
app.get("/getProduct/:productId",getProductDetails);
app.post("/addProduct",addProduct);

export default app;