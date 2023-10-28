import express, {Application} from "express";
import { port } from "./config/configs";
import bodyParser from "body-parser";
import authRoutes from "./routes/authroutes";
import { closeDb, initDb } from "./database/database";
const app: Application = express();

initDb();
//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api/v1/auth', authRoutes);

 app.listen(port,()=> {console.log(`Listening on port ${port}`);
 });

 process.on('exit',()=> {
    closeDb();
 })