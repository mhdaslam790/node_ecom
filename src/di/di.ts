import CartRepository from "../repository/cartRepository";
import ProductRepository from "../repository/productRepository";
import UserRepository from "../repository/userRepository";
import CartService from "../service/cartService";
import ProductService from "../service/productService";
import UserService from "../service/userSevice";

//Repo
export const userRepository = new UserRepository();
export const productRepository = new ProductRepository();
export const cartRepository = new CartRepository();

//Service
export const userService = new UserService(userRepository);
export const productService = new ProductService(productRepository);
export const cartService = new CartService(cartRepository);
