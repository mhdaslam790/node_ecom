import AddressRequestDTO from "../models/dto/request/addressRequestDTO";
import Address from "../models/entity/address";

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