import { mapProductToProductResponseDTO } from "../mapper/mapper";
import ProductResponseDTO from "../models/dto/request/ProductResponseDTO";
import ProductRepository from "../repository/productRepository";

export default class ProductService {
    constructor(private productRepository: ProductRepository) { }
    async getAllProducts(page: number, offset: number): Promise<ProductResponseDTO[]> {
        const products = await this.productRepository.getAllProducts(page, offset);
        return products.map(mapProductToProductResponseDTO);
    }
    async getProductDetails(productId: number): Promise<ProductResponseDTO | null> {
        const product = await this.productRepository.getProductById(productId);
        if (product) {
            return mapProductToProductResponseDTO(product);
        }
        else {
            return null;
        }
    }
    async addProduct() {
        await this.productRepository.add();
    }
}