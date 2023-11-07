import ProductResponseDTO from "../models/dto/request/ProductResponseDTO";
import AddressRequestDTO from "../models/dto/request/addressRequestDTO";
import Address from "../models/entity/address";
import Product from "../models/entity/product";

export function mapAddressToAddressResponseDTO(address:Address,userId:number): AddressRequestDTO {
    return {
        id: address.id,
        userId: userId,
        name: address.name,
        pincode: address.pincode,
        address: address.address,
        city: address.city,
        state: address.state,
        phoneNumber: address.phoneNumber,
        isDefault: address.isDefault === 1
    };
}
export function mapProductToProductResponseDTO(product:Product) :ProductResponseDTO {
    return {
        id: product.id,
        image: product.image,
        name: product.name,
        productId:product.productId,
        description: product.description,
        unit: product.unit,
        categories: product.categories,
        currency: product.currency,
        dealOfTheDay: product.dealOfTheDay === 1,
        topProducts: product.topProducts === 1,
        onSale: product.onSale === 1,
        currentPrice: product.currentPrice,
        actualPrice: product.actualPrice,
        quantityPerUnit: product.quantityPerUnit,
        isProductAvailable: product.isProductAvailable === 1,
        nameSearch: product.nameSearch,
    }
}