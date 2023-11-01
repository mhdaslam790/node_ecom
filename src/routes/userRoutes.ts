import express  from "express";
import { authenticationMiddleware } from "../middlewares/authentication/authMiddleware";
import { addAddressByUserId, fetchUserAddress, updateAddress, updateDefaultAddress } from "../controllers/userController";

const router = express.Router();

router.post("/add-address",authenticationMiddleware,addAddressByUserId);
router.get("/addresses",authenticationMiddleware,fetchUserAddress);
router.get("/updateDefaultAddress/:addressId",authenticationMiddleware,updateDefaultAddress);
router.patch("/editAddress",authenticationMiddleware,updateAddress);
router.get("/deviceToken",authenticationMiddleware);

export default router;