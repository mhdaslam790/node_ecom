import express, {Application} from "express";
import { port } from "./config/configs";
import bodyParser from "body-parser";
import authRoutes from "./routes/authroutes";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productroutes";
import { closeDb, initDb } from "./database/database";
import cartRoutes from './routes/cartRoutes';
const app: Application = express();

initDb();
//middleware
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));



app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

 app.listen(port,()=> {console.log(`Listening on port ${port}`);
 });

 process.on('exit',()=> {
    closeDb();
 })