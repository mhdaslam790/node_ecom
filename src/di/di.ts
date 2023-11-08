import CartRepository from "../repository/cartRepository";
import OrderRepository from "../repository/orderRepository";
import ProductRepository from "../repository/productRepository";
import UserRepository from "../repository/userRepository";
import CartService from "../service/cartService";
import OrderService from "../service/orderService";
import ProductService from "../service/productService";
import UserService from "../service/userSevice";

//Repo
export const userRepository = new UserRepository();
export const productRepository = new ProductRepository();
export const cartRepository = new CartRepository();
export const orderRepository = new OrderRepository();

//Service
export const userService = new UserService(userRepository);
export const productService = new ProductService(productRepository);
export const cartService = new CartService(cartRepository);
export const orderService = new OrderService(orderRepository);

