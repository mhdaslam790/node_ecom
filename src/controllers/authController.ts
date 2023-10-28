import { userService } from "../di/di";
import {Request, Response} from 'express';

export const loginWithPhoneNumber = async (req: Request, res: Response) => {
    try {
        const user = await userService.verifyOTP("8303474154", "1234");
        res.status(200).json({ user: user});
    }
    catch (error) {
        res.status(500).json({ user: "error"});
    }
}