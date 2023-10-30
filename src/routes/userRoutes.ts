import express  from "express";
import { authenticationMiddleware } from "../middlewares/authentication/authMiddleware";
import { addAddressByUserId, fetchUserAddress } from "../controllers/userController";

const router = express.Router();

router.post("/add-address",authenticationMiddleware,addAddressByUserId);
router.get("/addresses",authenticationMiddleware,fetchUserAddress);
router.post("/userAddress");
router.post("/userAddress");

export default router;