import ProductRepository from "../repository/productRepository";
import UserRepository from "../repository/userRepository";
import ProductService from "../service/productService";
import UserService from "../service/userSevice";

export const userRepository = new UserRepository();
export const productRepository = new ProductRepository();

export const userService = new UserService(userRepository);
export const productService = new ProductService(productRepository);