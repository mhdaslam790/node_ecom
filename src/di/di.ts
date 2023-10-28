import UserRepository from "../repository/userRepository";
import UserService from "../service/userSevice";

export const userRepository = new UserRepository();

export const userService = new UserService(userRepository);