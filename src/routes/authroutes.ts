import express from "express";
import {loginWithPhoneNumber} from '../controllers/authController';

const router = express.Router();
router.get('/login',loginWithPhoneNumber);

export default router;