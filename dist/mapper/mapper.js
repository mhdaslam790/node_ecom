"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAddressToAddressResponseDTO = void 0;
function mapAddressToAddressResponseDTO(address, userId) {
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
exports.mapAddressToAddressResponseDTO = mapAddressToAddressResponseDTO;
